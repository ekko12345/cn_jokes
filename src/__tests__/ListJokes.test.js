import { render, screen, fireEvent } from '@testing-library/react';
import ListJokes from '../components/list-jokes/ListJokes';

test('test showing no jokes text when no jokes', () => {
  render(<ListJokes/>);
  const cards = screen.getAllByRole('card')
  const card = screen.getByText(/no jokes/i)
  cards.length === 1 ? expect(card).toBeInTheDocument() : expect(card).toBeNull();
});