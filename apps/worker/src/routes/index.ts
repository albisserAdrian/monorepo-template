import { greet } from "@monorepo/utils";

export default defineEventHandler(event => {
  return {
    message: greet("Worker"),
    timestamp: new Date().toISOString(),
    service: "worker",
  };
});
