import { it, expect } from 'vitest';

import writeData from './io';

it('should execute writeFile method.', () => {
  const testData = 'test data.';
  const testFileName = 'text.txt';

  // it'll be resolved, but no value will be returned
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});