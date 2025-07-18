# Monorepo with Nitro.build Apps

A pnpm workspace monorepo with Nitro.build applications and shared packages.

## Structure

```
monorepo/
├── apps/
│   ├── api/          # Nitro.build API
│   └── worker/       # Nitro.build Worker
├── packages/
│   └── utils/       # Shared utilities and functions
├── package.json      # Root package.json with workspace scripts
└── pnpm-workspace.yaml
```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build shared packages:

   ```bash
   pnpm --filter "@monorepo/utils" build
   ```

3. Run all apps in development mode:

   ```bash
   pnpm dev
   ```

4. Build all projects:

   ```bash
   pnpm build
   ```

## Available Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all packages and apps
- `pnpm format` - Format all code with Prettier
- `pnpm format:check` - Check code formatting

## Apps

### API (`apps/api`)

- Nitro.build node-server preset
- Available at `http://localhost:3001` in dev mode
- Routes:
  - `/` - Welcome message
  - `/users` - Sample users endpoint

### Worker (`apps/worker`)

- Nitro.build node-server preset
- Available at `http://localhost:3002` in dev mode
- Routes:
  - `/` - Welcome message

## Packages

### Utils (`packages/shared`)

- Common utilities and functions
- Exported functions:
  - `greet(name: string)` - Greeting function
  - `formatResponse<T>(data: T, message: string)` - API response formatter
  - `generateId()` - Random ID generator
  - `constants` - Shared constants
