import { greet } from "@monorepo/utils";

export default defineEventHandler(async event => {
  return {
    message: greet("API"),
    timestamp: new Date().toISOString(),
    service: "api",
  };
});
