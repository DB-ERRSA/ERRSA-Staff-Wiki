package edu.errsa.wikisync;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Base64;
import java.util.Map;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.logging.Logger;

/** Sends one snapshot to GitHub Contents API; no polling, sockets, or background timer. */
public final class GitHubSnapshot {
    private GitHubSnapshot() {}
    public static String json(String value) {
        if (value == null) return "null";
        StringBuilder b = new StringBuilder("\"");
        for (char c : value.toCharArray()) {
            switch (c) {
                case '"': b.append("\\\""); break;
                case '\\': b.append("\\\\"); break;
                case '\n': b.append("\\n"); break;
                case '\r': b.append("\\r"); break;
                case '\t': b.append("\\t"); break;
                default: if (c < 0x20) b.append(String.format("\\u%04x", (int)c)); else b.append(c);
            }
        }
        return b.append('"').toString();
    }
    public static String fields(Map<String, String> values) {
        StringBuilder b = new StringBuilder("{");
        values.forEach((key, val) -> { if (b.length() > 1) b.append(','); b.append(json(key)).append(':').append(json(val)); });
        return b.append('}').toString();
    }
    public static String array(List<String> jsonObjects) { return "[" + String.join(",", jsonObjects) + "]"; }
    public static void publish(String owner, String repo, String branch, String token, String server, String document, Logger log) {
        if (owner.isBlank() || repo.isBlank() || branch.isBlank() || token.isBlank()) {
            log.warning("Wiki Sync not configured. Add GitHub owner/repo/token/branch in config."); return;
        }
        if (!server.equals("survival") && !server.equals("velocity")) throw new IllegalArgumentException("Unknown server");
        try {
            String path = "docs/assets/wiki-sync/" + server + ".json";
            String endpoint = "https://api.github.com/repos/" + owner + "/" + repo + "/contents/" + path;
            HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
            for (int attempt = 0; attempt < 3; attempt++) {
                HttpRequest get = base(endpoint + "?ref=" + branch, token).GET().build();
                HttpResponse<String> existing = client.send(get, HttpResponse.BodyHandlers.ofString());
                if (existing.statusCode() != 200 && existing.statusCode() != 404) {
                    log.warning("Wiki Sync GitHub lookup failed: HTTP " + existing.statusCode()); return;
                }
                Matcher sha = Pattern.compile("\\\"sha\\\"\\s*:\\s*\\\"([a-f0-9]{40})\\\"").matcher(existing.body());
                String currentSha = existing.statusCode() == 200 && sha.find() ? sha.group(1) : null;
                String body = "{\"message\":" + json("Wiki sync: " + server + " startup snapshot")
                    + ",\"branch\":" + json(branch) + ",\"content\":" + json(Base64.getEncoder().encodeToString(document.getBytes(StandardCharsets.UTF_8)))
                    + (currentSha == null ? "" : ",\"sha\":" + json(currentSha)) + "}";
                HttpRequest put = base(endpoint, token).PUT(HttpRequest.BodyPublishers.ofString(body)).build();
                HttpResponse<String> result = client.send(put, HttpResponse.BodyHandlers.ofString());
                if (result.statusCode() == 200 || result.statusCode() == 201) {
                    log.info("Wiki Sync uploaded " + server + " snapshot to GitHub. Existing wiki deployment will rebuild."); return;
                }
                if (result.statusCode() != 409 && result.statusCode() != 422) {
                    log.warning("Wiki Sync upload failed: HTTP " + result.statusCode() + " (check token repository Contents permission)"); return;
                }
            }
            log.warning("Wiki Sync conflict: three attempts. Next server restart will retry.");
        } catch (Exception ex) {
            log.warning("Wiki Sync could not publish: " + ex.getClass().getSimpleName() + ": " + ex.getMessage());
        }
    }
    private static HttpRequest.Builder base(String url, String token) {
        return HttpRequest.newBuilder(URI.create(url)).timeout(Duration.ofSeconds(20))
            .header("Authorization", "Bearer " + token)
            .header("Accept", "application/vnd.github+json")
            .header("X-GitHub-Api-Version", "2022-11-28")
            .header("User-Agent", "ERRSA-Wiki-Sync")
            .header("Content-Type", "application/json; charset=utf-8");
    }
}
