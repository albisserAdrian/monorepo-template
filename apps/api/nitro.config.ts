export default defineNitroConfig({
  preset: 'node-server',
  srcDir: 'src',
  compatibilityDate: '2025-07-18',
  typescript: {
    strict: true,
  },
  alias: {
    '@monorepo/core': '../../packages/core/src/index.ts',
    '@monorepo/database': '../../packages/database/src/index.ts',
    '../generated/prisma/client':
      '../../packages/database/generated/prisma/client.ts',
  },
});
