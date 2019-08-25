import React, {Component} from 'react';
import Task from './components/Task';
import CreateTask from './components/CreateTask';
import './App.css';




class App extends Component {
  state ={
    newTask:"",
    todos :[
      {text:'Task 1....................'},
      {text:'Task 2....................'},
      {text:'Task 3....................'},
      {text:'Task 4....................'},
    ]
  }
  completeTask=(index)=>{
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({todos});
  }
  updateNewTask =(event)=>{
    this.setState({newTask: event.target.value});
  }
  addTask=()=>{
    const todos = [...this.state.todos];
    todos.push({
      text:this.state.newTask
    });
    this.setState({
      todos,
      newTask: ''

    })
  }
  render() { 
    return (
      
      <div className="App">
            
      <button id="heder">To Do List</button>
    
       <CreateTask value={this.state.newTask} 
       onChange={this.updateNewTask} addTask={this.addTask}/> 

       {this.state.todos.map((todo, index) =>
       <Task todo={todo} index={index} completeTask={this.completeTask} key={index}/> )}
         
      </div>
      );
  }
}
 
export default App;
