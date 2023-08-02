import { act } from '@testing-library/react';
import { formatCurrency } from './currency';

describe('formatCurrency', () => {
  it('should format number to currency string with currency sign', () => {
    const price = 1234.56;
    const expected = '1.234,56€';
    const result = formatCurrency(price);
    expect(result).toEqual(expected);
  });

  it('should format number to currency string without currency sign', () => {
    const price = 1234.56;
    const expected = '1.234,56';
    const result = formatCurrency(price, true);
    expect(result).toEqual(expected);
  });

  it('should handle zero', () => {
    const price = 0;
    const expected = '0,00€';
    const result = formatCurrency(price);
    expect(result).toEqual(expected);
  });

  it('should handle negative numbers', () => {
    const price = -1234.56;
    const expected = '-1.234,56€';
    const result = formatCurrency(price);
    expect(result).toEqual(expected);
  });
});
