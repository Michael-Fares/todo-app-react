import React, {Component} from 'react';
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
      <h1>To Do List</h1>
      <h4>What will <span className="you">you</span> do today?</h4>
        <form onSubmit={this.handleSubmit} >
          <input style={{fontFamily: "Quicksand, sans-serif"}} type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button style={{fontFamily: "Quicksand, sans-serif", border: "none", cursor: "pointer", marginLeft: "5px", padding: "3px"}} type="submit">Add ToDo</button>
        </form>
        <ol> {this.state.listOfTodos.map((todo, index) => {
              return (
                <TodoCard key={index} title={todo} index={index} clickToRemove={this.deleteItem}/>
              )
          })}
         </ol>    
       

    </div>
  );
}
}

export default App;
