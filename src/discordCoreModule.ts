//%import required modules

import {
  ClassProvider,
  DynamicModule,
  Global,
  Module,
  Provider,
} from "@nestjs/common";
import { WebhookClient, WebhookClientData } from "discord.js";
import { createDiscordProvider } from "./createDiscordProvider";
import { DISCORD_MODULE, DISCORD_TOKEN } from "./discordConstants";
import { DiscordAsyncOptions, DiscordOptionsFactory } from "./discordOptions";
import { getDiscordClient } from "./getDiscordClient";

@Global()
@Module({})
export class DiscordCoreModule {
  public static forRoot(options: WebhookClientData): DynamicModule {
    const provider = createDiscordProvider(options);

    return {
      exports: [provider],
      module: DiscordCoreModule,
      providers: [provider],
    };
  }

  static forRootAsync(options: DiscordAsyncOptions): DynamicModule {
    const discordProvider: Provider<WebhookClient> = {
      inject: [DISCORD_MODULE],
      provide: DISCORD_TOKEN,
      useFactory: (options: WebhookClientData) => getDiscordClient(options),
    };

    return {
      exports: [discordProvider],
      imports: options.imports,
      module: DiscordCoreModule,
      providers: [...this.createAsyncProviders(options), discordProvider],
    };
  }

  private static createAsyncProviders(
    options: DiscordAsyncOptions
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
        inject: options.inject,
      } as ClassProvider,
    ];
  }

  private static createAsyncOptionsProvider(
    options: DiscordAsyncOptions
  ): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject ?? [],
        provide: DISCORD_MODULE,
        useFactory: options.useFactory,
      };
    }
    return {
      inject: options.useExisting
        ? [options.useExisting]
        : options.useClass
        ? [options.useClass]
        : [],
      provide: DISCORD_MODULE,
      useFactory: (optionsFactory: DiscordOptionsFactory) =>
        optionsFactory.createDiscordOptions(),
    };
  }
}
