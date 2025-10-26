export function add(numbers: string): number {
  if (!numbers) return 0;

  // Normalize newlines to commas, then split by comma
  const normalized = numbers.replace(/\n/g, ',');
  const parts = normalized.split(',').filter(Boolean);

  const nums = parts.map((p) => {
    const n = Number(p);
    if (Number.isNaN(n)) {
      // Non-number entries treated as 0? We'll throw in later tests.
      return 0;
    }
    return n;
  });

  return nums.reduce((s, v) => s + v, 0);
}
