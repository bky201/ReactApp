import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

class App extends Component {
  render() {
    return (
      <div className="App">
       <FunctionalGreeting />
       <FunctionalGreetingWithProps />
      </div>
    );
  }
}

export default App;
