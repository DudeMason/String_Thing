import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
  const linkElement = getByText(/Music quickens the mind,and strengthens the stride!/i);
  expect(linkElement).toBeInTheDocument();
});
