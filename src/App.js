import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoCard from './TodoCard'

class App extends Component {
  constructor(props) {
  super(props)
  
  this.state = {
    inputValue: "",
    listOfTodos: []
   }
  }


  deleteItem = (index) => {
    let todosCopy = [...this.state.listOfTodos]
    todosCopy.splice(index, 1)
    this.setState({listOfTodos: [...todosCopy]})
  }
  editItem = (index) => {
    let todosCopy = [...this.state.listOfTodos]
    console.log(todosCopy[index])
    if(this.state.inputValue) {
    todosCopy[index] = this.state.inputValue
    }
    this.setState({listOfTodos: [...todosCopy]})
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
        <ol> {this.state.listOfTodos.map((todo, index) => {
              return (
                <TodoCard key={index} title={todo} index={index} clickToRemove={this.deleteItem}/>
              )
          })}
         </ol>    
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.name}     
       </a>
      </header>
    </div>
  );
}
}

export default App;
