import { render, screen } from '@testing-library/react';
import Todolist from './Todolist'

test('renders learn react link', () => {
  render(<Todolist />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
