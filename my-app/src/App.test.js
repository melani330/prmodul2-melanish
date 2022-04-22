import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('Render a title in root component', () => {
  render(<App />);
  const title = screen.getByText('Music Playlist');
  expect(title).toBeInTheDocument();
});

test('Render a button in root component', () => {
  render(<App />);
  const button = screen.getByText('Login');
  expect(button).toBeInTheDocument();
});
