import { render, screen } from '@testing-library/react';
import App from './App';

test('renders IntelliMock header', () => {
  render(<App />);
  // Header logo is always present
  expect(screen.getByText(/TATA ELXSI/i)).toBeInTheDocument();
  // Tagline should be present
  expect(screen.getByText(/Home to 8 Billion Possibilities/i)).toBeInTheDocument();
});
