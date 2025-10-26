import { describe, test, expect } from 'vitest';
import { add } from "../stringCalculator";

describe('String Calculator - basic', () => {
  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
});
