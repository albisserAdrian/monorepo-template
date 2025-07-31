import { formatResponse } from '@monorepo/core';

export default defineEventHandler(async event => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return formatResponse(users, 'Users retrieved successfully');
});
