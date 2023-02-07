"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiscordProvider = void 0;
const discordConstants_1 = require("./discordConstants");
const getDiscordClient_1 = require("./getDiscordClient");
function createDiscordProvider(options) {
    return {
        provide: discordConstants_1.DISCORD_TOKEN,
        useValue: (0, getDiscordClient_1.getDiscordClient)(options),
    };
}
exports.createDiscordProvider = createDiscordProvider;
//# sourceMappingURL=createDiscordProvider.js.map