import { describe, test, expect } from 'vitest';
import { add } from "../stringCalculator";

describe('String Calculator - basic', () => {
  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the sum of comma-separated numbers', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('handles newlines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters like //;\\n1;2', () => {
  expect(add('//;\\n1;2')).toBe(3);
});
});

