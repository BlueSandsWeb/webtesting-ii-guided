import React from 'react';
import ReactDOM from 'react-dom';

// step 1 - import library
import { render } from 'react-testing-library';

import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//step 2
it('renders successfully', () => {
  render(<App></App>);
})