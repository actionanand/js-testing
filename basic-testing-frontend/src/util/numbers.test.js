import { describe, expect, it } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber:', () => {
  it('should return a number, if number in string format is provided.', () => {
    const num = '8';
    const expectedVal = 8;
  
    const result = transformToNumber(num);
  
    expect(result).toBeTypeOf('number');
    expect(result).toBe(expectedVal);
  });
  
  it('should yield NaN, if value is non-number string.', () => {
    const num1 = 'num1';
    const num2 = {};
  
    const result1 = transformToNumber(num1);
    const result2 = transformToNumber(num2);
  
    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers:', () => {
  it('should return array of numbers, if array of string numbers provided.', () => {
    const numberValues = ['5', '13'];

    const cleanedValues = cleanNumbers(numberValues);

    expect(cleanedValues[0]).toBeTypeOf('number');
  });

  it('should throw error if any one of the arguments is empty', () => {
    const numberValues = ['', 3];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});