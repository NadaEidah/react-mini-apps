import React from 'react';

function Task (props){
    const todo= props.todo;
    const index= props.index;
    const completeTask= props.completeTask;
    return (
   
    <div id="sli">
    <li>
            {todo.text} 
          <button onClick={()=>{completeTask(index)}}>
            x
          </button>
    </li>
    </div>
     ) ;
  }

  export default Task;