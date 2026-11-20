---
tags:
  - DEV
  - SERVER LEAD
---

# Plugins

Majority of the time a developer is needed for a task, it will involve plugins. Plugins can be thought as the foundation
to our custom ERRSA MC setup. Plugins are mainly compiled Java codes, in this module we will be explaining critical notes
every developer needs to know about plugins which result in safe operation of the server.

Plugins consist of usually the following:

- .jar file - this is the file that is uploaded to the plugins folder to install the new plugin 
- specific plugin folder/config.yml - where you can tweak settings to the plugin without having to mess with code
- specific plugin folder/other files - may have storage files, other configuration files, and more

## Plugin Limitations

Biggest takeaway from the module is Developers must know when they have permission to add, modify, or delete plugins on
any of the backend or proxy servers. We do not simply act, we conduct extensive research, and get proper approvel.
A developer should generally follow the process below for plugins:

### Is this plugin addition, modification, deletion a server necessity?

We do not just add, modify, delete plugins on whim, every change we make to the server is intentional and thought out. Ask
yourself what is the problem? Is the problem worth fixing? Will it be a change that will cater to all players and strengthen
our community?

Often times, the solution is not straight forward. Adding a new plugin can introduce compatibility issues, takes more server
resources, and can introduce more bugs down the line. Modifying a plugin may destroy features that were intentionally setup.
Deleting existing plugins, may get rid of core systems that not only the server relies on but other plugins may stop functioning.

If after carefully researching the problem, you determine the solution is a server necessity, proceed to the next step in our flow.

### Implementation options

Determine all of the possible solutions to resolve the problem. The solution may be to introduce a new plugin, modify
config settings of an existing plugin, or deleting a plugin on our system. 

### Adding new plugin: Existing > Creating a plugin

If you determine a feature must be added to resolve the problem by insterting a new plugin, you may be tempted to create
a new plugin from scratch.

We encourage/prefer existing plugins over creating an entirely new plugin. The solution to the exact problem may have already 
been created. We prefer existing plugins, due to them more likely being properly bug tested and they save proper time. A
brand new plugin from scratch may take months of development to properly work out all of the bugs and then must be updated if needed
for the next server reset. The problem might be urgent and not have the time required to develop a new plugin.

If the plugins do not already exist or maybe the existing plugin introduces many unecessary features it may be worth creating a new 
plugin. This is further discussed in [Module 3](mod3.md).

### Do you have the server leads permission?

The server lead ultimately makes the final decisions with what is best for the server and it's course. The server lead must
be communicated all issues present. Walk the server lead through the issue, the possible solutions, and any implications
this plugin addition, modification, or deletion will cause.

If after this whole process you recieve server leads permission, you may get started.

---

## Plugin compatibility (1.21 but running 1.25, & java version)

Adding a new plugin is not as simple as downloading any jar file of the specific plugin. There are a few considerations to
keep in mind:

### Plugins being added to a Backend Server or the Proxy Server

The backend server runs Paper software which has it's own java libraries, requring the plugins .jar file must be specified 
to Paper. Although some Bukkit & Spigot .jar files may work on paper, but if there is a paper alternative, use it.

The proxy server runs Velocity software which even though is created by PaperMC, the proxy requires Velocity .jar files

Example:

> Paper Backend Server:
>
> ✅ - Paper ```.jar``` files
> 
> ⚠️ - Bukkit, Spigot ```.jar``` files
>
> ❌ - Velocity, Fabric, Forge, NeoForge, Quilt ```.jar``` files


> Paper Backend Server:
>
> ✅ - Velocity ```.jar``` files
>
> ❌ - Paper, Bukkit, Spigot, Fabric, Forge, NeoForge, Quilt ```.jar``` files


### Plugin versions

Once you determined the plugin platform/software, next you need to verify the plugin ```.jar``` file's rated Minecraft version.

As Minecraft is always updating their source code, so does the plugins in order to keep properly functioning. Every few year 
Mojang will update the Java language which almost guarantees that the old plugins will not work on the newer versions. Note plugins
are normally not backward nor forwards compatible, even if the systems seem to function this can introduce many unfixable bugs
until you get the correct server version.

Example:

> Paper Backend Server (1.21.4):
> 
> For context 1.21.4 runs ```Java 21```
>
> ✅ - EssentialsX 1.21.4 - Paper ```.jar``` file
>
> ⚠️ - EssentialsX 1.21.5 - Paper ```.jar``` file: _uses ```Java 21``` but will have version issues_
>
> ❌ - EssentialsX 26.1 - Paper ```.jar``` file: _uses ```Java 25```_
> ❌ - EssentialsX 1.21.4 - Fabric ```.jar``` file: _uses uncompatible platform_

---

## Plugin conflicts

It is improtant to understand even though you may have selected the correct platform and version of the plugin but you
may not be out of the clear jsut yet. You must research and test plugins to see if they may interfere with on another. One
plugin can generally mess with anothers process. This becomes especially important when plugins share dependencies or if
plugins try fixing the same problem and then try fixing it at the same time. additionaly a plugin can drain lots of resources
causing another plugins process to not run accoridingly

This is usually is not easy to spot and is a fundamental reason for doing extensive testing on the Test server.

---

## Plugin dependencies 

When adding, modifiyng, deleting a plugin it's important to check if another plugin is depending on it. Plugins have the 
ability to communicate with one another to complete a process, this is a dependency.

A hard dependency means the other plugin is a requirement for this plugin to function at all.

A soft dependency means the opther plugin is not required for functionality but will have some processes disabled.

For example:

> QuickShop-Hikari:
> 
> Hard-dependency: 
> - Vault
> - EssentialsX
> 
> Soft-dependency:
> - Protocolib
> 
> Remove Vault or EssentialsX and Quickshop-Hikari will not work.
> 
> Remove Protocolib and Quickshop-Hikari will still allow for player shops but the item display feature will disappear.
> 

There are also plugins that can communicate to other servers through the proxy and may rely off a Velocity copy and Paper copies
to function.

---

## Configs

Configs are files that come with some plugins (not all). Which allow you to change settings for the plugin without having to 
edit the source code. The config may include enable/disable features, change values of setting, change display messages, and
may more. Note that some features of a plugin are not in the config or some plugins might not have a config at all, meaning
there is no way of editing the current plugin without editing the source code.

Only make edits to configs when approved and when the server has properly been shutdown.

---

## Permissions

Plugins may seperate player access by tying it to permissions. These permissions allow us to assign certain features to
specific roles. All of this is handled through [luckperms](../../plugins/permissions-and-moderation/luckperms.md){ preview }
where we can assign any plugin that has permissions to any role annd specify what server or even world the role inherits.

![Luckperms Example](../../assets/images/developer-training/Luckperms_example.png)

Developers must understand how the luckperms system functions on the network and recognize what is connected. Developers should only
act when given permission when reasonable to do so.



---

## Updating plugins

When adding, updating or removing plugins it is critical to follow a safe process:

1. Stop the server which allows for files to save and prevents duplicates
2. Backup whatever file you may be changing 
3. If updating or removing a plugin delete the .jar file
4. If adding or updating a plugin add in the new .jar file to the plugins/ folder
5. Restart the server and watch console for any errors, once the server successfully restarts, stop the server again
6. If success, check config to ensure correct config was implemented sometimes updating a plugin will not add the new features and 
that must also be manually added
7. Once confirmed restart the server once more and watch for any errors

When creating major infrastructure changes:

1. Stop the server
2. Using a FTP client create a backup of the whole server (will need possibly up to 80 GB)
3. Make changes while server is stopped
4. Restart server ensure no errors were made

Note that Apex's system does not backup plugins or it's data only world file. If an issue occurs contact a support for a backup, ask
for a zip file so you can properly restore it isolated rather than overwritting everything, but it's best just to make your own backup
before major infrastructure changes as Apex does not support databases that may be oversized.

Always utilize the test server to practice/test the new changes prior to putting on the Primary server. Ensure that the
test server stay up to date mirror with the primary server to have as acucrate testing cappabilities as possible.

!!!danger "You must use a mouse when using FTP" 
        Although Apex allows mobile devices and laptops, touch screens and trackpads
        do not work with folders and always result in reordering parent folders resulting in breaking the correct file tree structure.

---

