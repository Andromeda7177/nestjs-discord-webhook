//%import required mdoiules
import { DynamicModule, Module } from "@nestjs/common";
import { WebhookClientData } from "discord.js";
import { DiscordCoreModule } from "./discordCoreModule";
import { DiscordAsyncOptions } from "./discordOptions";

@Module({})
export class DiscordModule {
  public static forRoot(options: WebhookClientData): DynamicModule {
    return {
      module: DiscordModule,
      imports: [DiscordCoreModule.forRoot(options)],
    };
  }

  public static forRootAsync(options: DiscordAsyncOptions): DynamicModule {
    return {
      module: DiscordModule,
      imports: [DiscordCoreModule.forRootAsync(options)],
    };
  }
}
