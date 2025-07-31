import { PrismaClient } from '../generated/prisma/client';

export const prisma = new PrismaClient();

export * from '@prisma/client';

export default prisma;
