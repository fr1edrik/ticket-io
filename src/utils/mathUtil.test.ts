import { clamp } from './mathUtil';

describe('clamp', () => {
  it('should return the number if it is within the min and max', () => {
    const number = 50;
    const min = 0;
    const max = 100;
    const result = clamp(number, min, max);
    expect(result).toEqual(number);
  });

  it('should return the min if the number is less than the min', () => {
    const number = -10;
    const min = 0;
    const max = 100;
    const result = clamp(number, min, max);
    expect(result).toEqual(min);
  });

  it('should return the max if the number is greater than the max', () => {
    const number = 200;
    const min = 0;
    const max = 100;
    const result = clamp(number, min, max);
    expect(result).toEqual(max);
  });

  it('should handle the case where the number is equal to the min or max', () => {
    const min = 0;
    const max = 100;

    const resultMin = clamp(min, min, max);
    expect(resultMin).toEqual(min);

    const resultMax = clamp(max, min, max);
    expect(resultMax).toEqual(max);
  });
});
