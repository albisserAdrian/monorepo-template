export default defineNitroConfig({
  preset: "node-server",
  srcDir: "src",
  compatibilityDate: "2025-07-18",
  typescript: {
    strict: true,
  },
  alias: {
    "@monorepo/utils": "../../packages/utils/src/index.ts",
  },
});
