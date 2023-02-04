//%import required modules

import { Provider } from "@nestjs/common";
import { WebhookClientData, WebhookClient } from "discord.js";
import { DISCORD_TOKEN } from "./discordConstants";
import { getDiscordClient } from "./getDiscordClient";

export function createDiscordProvider(
  options: WebhookClientData
): Provider<WebhookClient> {
  return {
    provide: DISCORD_TOKEN,
    useValue: getDiscordClient(options),
  };
}
