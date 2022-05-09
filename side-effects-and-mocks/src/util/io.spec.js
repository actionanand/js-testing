import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');

it('should execute writeFile method.', () => {
  const testData = 'test data.';
  const testFileName = 'text.txt';

  // it'll be resolved, but no value will be returned
  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

  writeData(testData, testFileName);

  expect(fs.writeFile).toBeCalled();
});