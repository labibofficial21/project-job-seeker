import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders dengan initial count value', () => {
    render(<App count={0} />)
    const countValue = screen.getByTestId("count-value")
    expect(countValue).toHaveTextContent("0")
  });

  test('increments count when button is clicked', () => {
    render(<App count={0} />)
    const incrementButton = screen.getByText(/increment/i)
    const countValue = screen.getByTestId("count-value")

    expect(countValue).toHaveTextContent("0")
    fireEvent.click(incrementButton)
    expect(countValue).toHaveTextContent("1")
  });
})

