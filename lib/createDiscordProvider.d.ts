import { Provider } from "@nestjs/common";
import { WebhookClientData, WebhookClient } from "discord.js";
export declare function createDiscordProvider(options: WebhookClientData): Provider<WebhookClient>;
