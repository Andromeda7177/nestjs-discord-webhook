import { ModuleMetadata, Type } from "@nestjs/common/interfaces";
import { WebhookClientData } from "discord.js";
export interface DiscordOptionsFactory {
    createDiscordOptions(): Promise<WebhookClientData> | WebhookClientData;
}
export interface DiscordAsyncOptions extends Pick<ModuleMetadata, "imports"> {
    inject?: any[];
    useClass?: Type<DiscordOptionsFactory>;
    useExisting?: Type<DiscordOptionsFactory>;
    useFactory?: (options: WebhookClientData) => Promise<WebhookClientData> | WebhookClientData;
}
