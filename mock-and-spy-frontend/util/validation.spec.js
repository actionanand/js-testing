import { expect, it } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error, if empty string is provided.', () => {
  const testInput = '';

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it('should throw an error, if only string of spaces is provided.', () => {
  const testInput = '  ';

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it('should throw an error with provided error message.', () => {
  const testInput = '';
  const testErrMsg = 'Test error occurred';

  const validationFn = () => validateNotEmpty(testInput, testErrMsg);

  expect(validationFn).toThrow();
});