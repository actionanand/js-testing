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

it('should throw an error, if multiple arguments provided instead of an array.',() => {
  const num1 = 3;
  const num2 = 7;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/numbers is not iterable/);
  // expect(resultFn).not.toThrow(); // to find the error message
});