"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DiscordCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordCoreModule = void 0;
const common_1 = require("@nestjs/common");
const createDiscordProvider_1 = require("./createDiscordProvider");
const discordConstants_1 = require("./discordConstants");
const getDiscordClient_1 = require("./getDiscordClient");
let DiscordCoreModule = DiscordCoreModule_1 = class DiscordCoreModule {
    static forRoot(options) {
        const provider = (0, createDiscordProvider_1.createDiscordProvider)(options);
        return {
            exports: [provider],
            module: DiscordCoreModule_1,
            providers: [provider],
        };
    }
    static forRootAsync(options) {
        const discordProvider = {
            inject: [discordConstants_1.DISCORD_MODULE],
            provide: discordConstants_1.DISCORD_TOKEN,
            useFactory: (options) => (0, getDiscordClient_1.getDiscordClient)(options),
        };
        return {
            exports: [discordProvider],
            imports: options.imports,
            module: DiscordCoreModule_1,
            providers: [...this.createAsyncProviders(options), discordProvider],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
                inject: options.inject,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        var _a;
        if (options.useFactory) {
            return {
                inject: (_a = options.inject) !== null && _a !== void 0 ? _a : [],
                provide: discordConstants_1.DISCORD_MODULE,
                useFactory: options.useFactory,
            };
        }
        return {
            inject: options.useExisting
                ? [options.useExisting]
                : options.useClass
                    ? [options.useClass]
                    : [],
            provide: discordConstants_1.DISCORD_MODULE,
            useFactory: (optionsFactory) => optionsFactory.createDiscordOptions(),
        };
    }
};
DiscordCoreModule = DiscordCoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], DiscordCoreModule);
exports.DiscordCoreModule = DiscordCoreModule;
//# sourceMappingURL=discordCoreModule.js.map