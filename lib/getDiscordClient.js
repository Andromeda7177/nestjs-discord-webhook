"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscordClient = void 0;
const discord_js_1 = require("discord.js");
function getDiscordClient(options) {
    const discordClient = new discord_js_1.WebhookClient(options);
    return discordClient;
}
exports.getDiscordClient = getDiscordClient;
//# sourceMappingURL=getDiscordClient.js.map