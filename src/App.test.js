import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Home from "./pages/home/index";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render home react link', ()=>{
  const {getByText} = render(<Home/>)
  const linkElement = getByText(/Home react/i)
  expect(linkElement).toBeInTheDocument();
})


