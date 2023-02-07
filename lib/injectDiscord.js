"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectDiscord = void 0;
const common_1 = require("@nestjs/common");
const discordConstants_1 = require("./discordConstants");
function InjectDiscord() {
    return (0, common_1.Inject)(discordConstants_1.DISCORD_TOKEN);
}
exports.InjectDiscord = InjectDiscord;
//# sourceMappingURL=injectDiscord.js.map