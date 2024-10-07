import React, { useState } from 'react';

export default function ToDoApp() {
  const [name, setName] = useState('');
  const [arr, setArr] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function AddTodo() {
        setArr([...arr, name]);
  }

  function handleDeleteTask(index) {
var n_arr = arr.filter((el,ind)=>{
  return ind!==index;
})

 setArr([...n_arr])
  }

  function handleEditTask(index) {
  arr[index]=prompt('enter the new task',arr[index]);
  setArr([...arr]);
  }

  return (
    <div>
      <h2>TO-DO APP</h2>
      <input
        type="text"
        placeholder="Enter the task.."
        value={name}
        onChange={handleInputChange}
        id="input"
      />
      <button onClick={AddTodo}>
       add task
      </button>

      <ul>
        {arr.map((val, i) => (
          <li key={i}>
            {val}
            <button onClick={() => handleDeleteTask(i)}>Delete</button>
            <button onClick={() => handleEditTask(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}