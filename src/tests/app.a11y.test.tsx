import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import App from '../App';
import { expect, test } from 'vitest';

test('App should have no detectable accessibility violations', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});
