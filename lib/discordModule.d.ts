import { DynamicModule } from "@nestjs/common";
import { WebhookClientData } from "discord.js";
import { DiscordAsyncOptions } from "./discordOptions";
export declare class DiscordModule {
    static forRoot(options: WebhookClientData): DynamicModule;
    static forRootAsync(options: DiscordAsyncOptions): DynamicModule;
}
