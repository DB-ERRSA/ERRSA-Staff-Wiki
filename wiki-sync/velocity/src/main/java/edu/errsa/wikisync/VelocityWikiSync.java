package edu.errsa.wikisync;

import com.google.inject.Inject;
import com.velocitypowered.api.event.Subscribe;
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent;
import com.velocitypowered.api.plugin.Plugin;
import com.velocitypowered.api.proxy.ProxyServer;
import com.velocitypowered.api.plugin.PluginContainer;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.logging.Logger;

@Plugin(id="errsa-wiki-sync", name="ERRSA Wiki Sync", version="1.0.0", description="Startup-only wiki inventory")
public final class VelocityWikiSync {
    private final ProxyServer server;
    private final Logger log = Logger.getLogger("ERRSAWikiSync");
    private final Path configDir;
    @Inject public VelocityWikiSync(ProxyServer server, @com.velocitypowered.api.plugin.annotation.DataDirectory Path configDir) {
        this.server=server; this.configDir=configDir;
    }
    @Subscribe public void onInit(ProxyInitializeEvent event) {
        Properties props=new Properties();
        Path config=configDir.resolve("config.properties");
        try {
            Files.createDirectories(configDir);
            if (!Files.exists(config)) {
                try (InputStream template = getClass().getResourceAsStream("/config.properties")) {
                    if (template != null) Files.copy(template,config);
                }
            }
            try (InputStream in=Files.newInputStream(config)) { props.load(in); }
        } catch (Exception ex) { log.warning("Wiki Sync configuration error: "+ex.getMessage()); return; }
        List<PluginContainer> all=new ArrayList<>(server.getPluginManager().getPlugins());
        all.sort(Comparator.comparing(c -> c.getDescription().getName().orElse(c.getDescription().getId()), String.CASE_INSENSITIVE_ORDER));
        List<String> plugins=new ArrayList<>();
        for (PluginContainer plugin:all) {
            var desc=plugin.getDescription();
            Map<String,String> item=new LinkedHashMap<>();
            item.put("name",desc.getName().orElse(desc.getId()));
            item.put("id",desc.getId());
            item.put("version",desc.getVersion().orElse("unknown"));
            item.put("description",desc.getDescription().orElse(""));
            plugins.add(GitHubSnapshot.fields(item));
        }
        String snapshot="{\"schema\":1,\"server\":\"velocity\",\"serverVersion\":"
            +GitHubSnapshot.json(server.getVersion().getVersion())
            +",\"capturedAt\":"+GitHubSnapshot.json(Instant.now().toString())
            +",\"plugins\":"+GitHubSnapshot.array(plugins)+"}\n";
        Thread thread=new Thread(() -> GitHubSnapshot.publish(
            props.getProperty("github.owner", "").trim(),props.getProperty("github.repo", "").trim(),
            props.getProperty("github.branch", "main").trim(),props.getProperty("github.token", "").trim(),
            "velocity",snapshot,log),"errsa-wiki-sync-publish");
        thread.setDaemon(true); thread.start();
    }
}
