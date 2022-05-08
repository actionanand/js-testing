import { expect, it } from 'vitest';

import { transformToNumber } from './numbers';

it('should return a number, if number in string format is provided.', () => {
  const num = '8';
  const expectedVal = 8;

  const result = transformToNumber(num);

  expect(result).toBe(expectedVal);
});