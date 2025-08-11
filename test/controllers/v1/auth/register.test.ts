import { it, describe, expect } from 'vitest';
import Request from 'supertest';

/**
 * Its always to follow AAA pattern
 */
describe('Register the user', () => {
  it('should register the user', async () => {
    // Arrange -> arrange all things that need in this test
    const endpoint = '/api/v1/auth/register';
    const userPayload = {
      email: 'test@gmail.com',
      password: '12341234',
      role: 'user',
    };

    // Act -> acctually execute the test

    // Assert
  });
});
