import { DynamicModule } from "@nestjs/common";
import { WebhookClientData } from "discord.js";
import { DiscordAsyncOptions } from "./discordOptions";
export declare class DiscordCoreModule {
    static forRoot(options: WebhookClientData): DynamicModule;
    static forRootAsync(options: DiscordAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
