import React from 'react';
import ReactDOM from 'react-dom';

// step 1 - import library
import { render } from 'react-testing-library';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //step 2 write a test
  it('renders successfully', () => {
    render(<App></App>);  // this returns functions that can help find things in the dom
  })

  it('renders Hello World', () => {
    //this shows all of the functions that will help grab things on the dom
    // const helpers = render(<App />)
    // console.log('helpers', helpers);
    const { getByText, queryByText, debug } = render(<App />);
    debug(); // this renders the html to the terminal that jest is running in even if it passes
    // getByText('hello world');     // this is case sensative
    getByText(/hello world/i);     // this is case insensative
  })

})

