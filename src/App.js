import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: 'No greeting for you',
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <div>{this.state.message}</div>
      </div>
    );
  }

  greet = () => {
    this.setState({ message: 'Hello Web 17' });
  }

  bye = () => {
    this.setState({ message: 'Bye Web 17' });
  }
}

export default App;
