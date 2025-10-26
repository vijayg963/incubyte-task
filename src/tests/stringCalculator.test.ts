import { add } from '../src/stringCalculator';

describe('String Calculator - basic', () => {
  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
});
