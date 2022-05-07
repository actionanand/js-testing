import { it, expect } from 'vitest';

import { add } from './math';

it('should sumarize all values.', () => {
  // Arrange
  const inputArray = [1, 2, 5];
  const expectedVal = inputArray.reduce((prevValue, curValue) => prevValue + curValue, 0);

  // Act
  const result = add(inputArray);

  // Assert
  expect(result).toBe(expectedVal);
});

it('should yield NaN, if value is string.', () => {
  const inputArray = ['number1', 3];

  const result = add(inputArray);

  expect(result).toBeNaN();
});

it('should yield correct sum, if numeric value is as string', () => {
  const inputArray = ['3', '7'];
  const expectedVal = inputArray.reduce((prevValue, curValue) => +prevValue + +curValue, 0);

  const result = add(inputArray);

  expect(result).toBe(expectedVal);
});

it('should yield 0, if empty array is passed.', () => {
  const inputArray = [];
  const expectedVal = 0;

  const result = add(inputArray);

  expect(result).toBe(expectedVal);
});

it('should throw an error, if no value is passed.', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});