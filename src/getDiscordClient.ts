//%import required modules

import { WebhookClient, WebhookClientData } from "discord.js";

export function getDiscordClient(options: WebhookClientData): WebhookClient {
  const discordClient = new WebhookClient(options);
  return discordClient;
}
