import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');

// as path is imported as default, we're mocking join from default
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1] // path.join() receives numerous args, but last element will be file name as per our function, 'storagePath' will be filename
      }
    }
  }
});

it('should execute writeFile method.', () => {
  const testData = 'test data.';
  const testFileName = 'text.txt';

  // it'll be resolved, but no value will be returned
  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

  writeData(testData, testFileName);

  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});