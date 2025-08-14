import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Welcome } from './welcome/welcome';

describe('App', () => {
  it('renders the heading', () => {
    render(<Welcome />);
    expect(screen.getByText('Hello world')).toBeTruthy();
  });
});
