package edu.errsa.wikisync;

import org.bukkit.Bukkit;
import net.luckperms.api.LuckPerms;
import net.luckperms.api.model.group.Group;
import net.luckperms.api.node.Node;
import net.luckperms.api.node.types.InheritanceNode;
import org.bukkit.permissions.Permission;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.java.JavaPlugin;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public final class PaperWikiSync extends JavaPlugin {
    @Override public void onEnable() {
        saveDefaultConfig();
        // After plugins finish enabling, collect on main thread, send HTTP on async executor.
        Bukkit.getScheduler().runTaskLater(this, () -> {
            String snapshot = snapshot();
            Bukkit.getScheduler().runTaskAsynchronously(this, () -> GitHubSnapshot.publish(
                getConfig().getString("github.owner", ""), getConfig().getString("github.repo", ""),
                getConfig().getString("github.branch", "main"), getConfig().getString("github.token", ""),
                "survival", snapshot, getLogger()));
        }, 40L);
    }
    private String snapshot() {
        List<Plugin> all = new ArrayList<>(List.of(Bukkit.getPluginManager().getPlugins()));
        all.sort(Comparator.comparing(Plugin::getName, String.CASE_INSENSITIVE_ORDER));
        List<String> plugins = new ArrayList<>();
        for (Plugin plugin : all) {
            Map<String, String> info = new LinkedHashMap<>();
            info.put("name", plugin.getName());
            info.put("version", plugin.getPluginMeta().getVersion());
            info.put("description", plugin.getPluginMeta().getDescription());
            info.put("enabled", Boolean.toString(plugin.isEnabled()));
            List<String> declared = new ArrayList<>();
            // Permission names declared in plugin metadata; does not imply exhaustive access rights.
            plugin.getDescription().getPermissions().stream()
                .sorted(Comparator.comparing(Permission::getName))
                .forEach(perm -> declared.add(GitHubSnapshot.fields(Map.of(
                    "node", perm.getName(), "description", perm.getDescription(),
                    "default", perm.getDefault().toString()))));
            String json = GitHubSnapshot.fields(info);
            plugins.add(json.substring(0,json.length()-1)+",\"permissions\":"+GitHubSnapshot.array(declared)+"}");
        }
        // Registered permissions are additional discoverable permissions, not necessarily attributable to a plugin.
        List<String> registered = new ArrayList<>();
        Bukkit.getPluginManager().getPermissions().stream()
            .sorted(Comparator.comparing(Permission::getName)).forEach(perm -> registered.add(
                GitHubSnapshot.fields(Map.of("node",perm.getName(),"description",perm.getDescription(),
                    "default",perm.getDefault().toString()))));
        List<String> groups = new ArrayList<>();
        // Only loaded LuckPerms groups, never player information or identity data.
        LuckPerms lp = Bukkit.getPluginManager().isPluginEnabled("LuckPerms")
            ? Bukkit.getServicesManager().load(LuckPerms.class) : null;
        if (lp != null) {
            List<Group> loaded = new ArrayList<>(lp.getGroupManager().getLoadedGroups());
            loaded.sort(Comparator.comparing(Group::getName, String.CASE_INSENSITIVE_ORDER));
            for (Group group : loaded) {
                List<String> nodes = new ArrayList<>();
                for (Node node : group.getNodes()) {
                    Map<String,String> entry = new LinkedHashMap<>();
                    entry.put("node", node.getKey());
                    entry.put("value", Boolean.toString(node.getValue()));
                    entry.put("context", node.getContexts().toSet().toString());
                    entry.put("type", node instanceof InheritanceNode ? "inheritance" : "permission");
                    nodes.add(GitHubSnapshot.fields(entry));
                }
                groups.add("{\"name\":" + GitHubSnapshot.json(group.getName())
                    + ",\"nodes\":" + GitHubSnapshot.array(nodes) + "}");
            }
        } else getLogger().warning("LuckPerms API unavailable; publishing plugin inventory without group assignments.");
        return "{\"schema\":1,\"server\":\"survival\",\"serverVersion\":" + GitHubSnapshot.json(Bukkit.getVersion())
            + ",\"minecraftVersion\":" + GitHubSnapshot.json(Bukkit.getMinecraftVersion())
            + ",\"capturedAt\":" + GitHubSnapshot.json(Instant.now().toString())
            + ",\"plugins\":" + GitHubSnapshot.array(plugins)
            + ",\"registeredPermissions\":" + GitHubSnapshot.array(registered)
            + ",\"luckPermsGroups\":" + GitHubSnapshot.array(groups) + "}\n";
    }
}
