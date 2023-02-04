//%import required modules

import { Inject } from "@nestjs/common";
import { DISCORD_TOKEN } from "./discordConstants";

export function InjectDiscord() {
  return Inject(DISCORD_TOKEN);
}
