import { it, expect } from 'vitest';

import { add } from './math';

it('should sumarize all values.', () => {
  const result = add([1, 3, 4]);
  expect(result).toBe(8);
});