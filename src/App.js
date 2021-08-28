import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  super()
  
  this.state = {
    isClicked: false,
    inputValue: "",
    listOfTodos: []
   }
  }

  handleClick = (index) => {
   this.deleteItem(index)
  }
  deleteItem = (index) => {
    let objectCopy = [...this.state.listOfTodos]
    objectCopy.splice(index, 1)
    this.setState({listOfTodos: [...objectCopy]})

  }
  handleChange = (event) => {
    this.setState({inputValue : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // spread operator  ... to spread rest of todos in array
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
    
  }

  render() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
        <ol>{this.state.listOfTodos.map((todo, index) => {
        return (
        <div key={index}> 
          <li key={index}>{todo}</li>
          <button onClick={() => this.handleClick(index)}>Delete</button>
          </div>
          )
        })} </ol>
       
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
