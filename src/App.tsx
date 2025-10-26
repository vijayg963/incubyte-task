import { useState } from 'react';
import { add } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    try {
      const value = add(input);
      setResult(value);
    } catch (err: Error | unknown) {
      setResult(null);
      setError((err as Error)?.message ?? 'Invalid input');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#fff',
        color: '#222',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <header>
        <h1>String Calculator</h1>
      </header>

      <main id="main-content" role="main">
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop"
          width={600}
          height={400}
          alt="Abstract calculator background"
          style={{ maxWidth: '100%', height: 'auto' }}
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
          aria-labelledby="calculator-heading"
        >
          <h2 id="calculator-heading" style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
            Enter numbers
          </h2>

          <label htmlFor="number-input" style={{ display: 'block', marginTop: '8px' }}>
            Numbers to calculate (comma, newline allowed). Use custom delimiter with <code>//delim\n</code>
          </label>
          <textarea
            id="number-input"
            style={{
              margin: '10px 0',
              color: '#222',
              width: '100%',
              minHeight: '100px',
              fontSize: '1rem',
            }}
            placeholder="e.g. 1,2,3 or //;⏎1;2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#006f9a',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Calculate
          </button>
        </form>

        {result !== null && (
          <p style={{ color: 'green', marginTop: '1rem' }} role="status">
            Result: {result}
          </p>
        )}

        {error && (
          <div role="alert" aria-live="assertive" style={{ marginTop: '1rem', color: '#b00020' }}>
            <p>{error}</p>
          </div>
        )}

        <p style={{ marginTop: '1rem', color: '#444' }}>
          Tip: press <kbd>Tab</kbd> to navigate, press <kbd>Enter</kbd> to submit.
        </p>
      </main>
    </div>
  );
};

export default App;
