# @monorepo/db

Database package with Prisma client for the monorepo.

## Setup

1. Copy `.env.example` to `.env` and configure your database URL:
   ```bash
   cp .env.example .env
   ```

2. Run database migrations:
   ```bash
   pnpm db:migrate
   ```

## Usage

Import the Prisma client in your apps:

```typescript
import { prisma } from "@monorepo/db";

// Use the client
const users = await prisma.user.findMany();
```

## Available Scripts

- `pnpm build` - Build the package
- `pnpm dev` - Watch mode for development
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio

## Schema

The package includes a basic schema with User and Post models. Modify `prisma/schema.prisma` to add your own models.