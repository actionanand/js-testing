import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  user = new User(testEmail);
});

beforeEach(() => {
  user = new User(testEmail);
});

afterEach(() => {
  // user = new User(testEmail);
});

afterAll(() => {

});


it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
