export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiters = /,|\n/;
  let values = numbers;

  const customDelimMatch = numbers.match(/^\/\/(.+)\n/);
  if (customDelimMatch) {
    const delim = customDelimMatch[1];
    const escaped = delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    delimiters = new RegExp(escaped);
    values = numbers.slice(customDelimMatch[0].length);
  }

  const parts = values.split(delimiters as RegExp).filter(Boolean);

  const nums = parts.map((p) => {
    const n = Number(p);
    if (Number.isNaN(n)) {
      return 0;
    }
    return n;
  });

  // Check negatives
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
  }

  return nums.reduce((s, v) => s + v, 0);
}
