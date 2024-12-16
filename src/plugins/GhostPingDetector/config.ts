import {Manifest} from "@betterdiscord/manifest";

const manifest: Manifest = {
    info: {
        name: "GhostPingDetector",
        authors: [{
            name: "Zerebos",
            discord_id: "249746236008169473",
            github_username: "zerebos",
            twitter_username: "IAmZerebos"
        }],
        version: "0.0.1",
        description: "Detects ghost pings.",
        github: "https://github.com/zerebos/BetterDiscordAddons/tree/master/Plugins/GhostPingDetector",
        github_raw: "https://raw.githubusercontent.com/zerebos/BetterDiscordAddons/master/Plugins/GhostPingDetector/GhostPingDetector.plugin.js"
    },
    main: "index.ts"
};

export default manifest;