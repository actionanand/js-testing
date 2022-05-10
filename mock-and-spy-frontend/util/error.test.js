import { it, describe, expect, beforeAll, beforeEach } from 'vitest';

import { HttpError, ValidationError } from './errors';

let httpError;
const statusCode = 200;
const message = 'test message';

let validationErr;


describe('HttpError Class:', () => {

  it('should initialize http error class', () => {
    const data = 'test data';
    httpError = new HttpError(statusCode, message, data);

    expect(httpError.data).toBe(data);
    expect(httpError.message).toBe(message);
    expect(httpError.statusCode).toBe(statusCode);
  });

  it('should be undefined, if data arg is missing', () => {
    httpError = new HttpError(statusCode, message);
    expect(httpError.data).toBeUndefined();
    expect(httpError.message).toBe(message);
    expect(httpError.statusCode).toBe(statusCode);
  });
});

describe('ValidationError Class:', () => {
  beforeAll(() => {
    validationErr = new ValidationError(message);
  });

  beforeEach(() => {
    validationErr = new ValidationError(message);
  });

  it('should initialize validation error class', () => {
    expect(validationErr.message).toBe(message);
  });
});
