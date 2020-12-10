import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilters from '../components/search-filters/SearchFilters';

test('test fetch jokes default amount 10', () => {
  render(<SearchFilters />);
  const textField = screen.getByTestId('fetch-amount');
  expect(textField.value).toEqual('10');
});

test('test fetch jokes minimum amount 1', () => {
  render(<SearchFilters />);
  const textField = screen.getByTestId('fetch-amount');
  fireEvent.change(textField, { target: { value: 0}})
  expect(textField.value).toEqual('1');
});