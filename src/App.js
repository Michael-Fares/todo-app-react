import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  super()
  
  this.state = {
    isClicked: false
   }
  }

  handleClick = () => {
    // ternary operator but it can also be an if statement
    this.state.isClicked ? 
    this.setState({ isClicked : false }) : 
    this.setState({ isClicked : true })
  }

  render() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.handleClick}>Click Me</button>
        <p>
          {this.state.isClicked ? "true" : "false"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
