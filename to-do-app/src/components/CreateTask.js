import React from 'react';




function CreateTask (props){
  return(
    <div>
      <input id="btnInput" value={props.value} onChange={props.onChange}/>
      <button onClick={props.addTask}>+</button>
    </div>
  )
  }
  export default CreateTask;