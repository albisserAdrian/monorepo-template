export function greet(name: string): string {
  return `Hello, ${name}! Welcome to the monorepo.`;
}

export function formatResponse<T>(data: T, message: string) {
  return {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString()
  };
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export const constants = {
  API_VERSION: "v1",
  DEFAULT_TIMEOUT: 5000,
  MAX_RETRIES: 3
} as const;