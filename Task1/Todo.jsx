import React, { useState } from 'react';

export default function ToDoApp() {
  const [name, setName] = useState('');
  const [arr, setArr] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleAddOrUpdateTask() {
    if (isEditing) {
      const updatedTasks = arr.map((task, index) => 
        index === editIndex ? name : task
      );
      setArr(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      if (name.trim()) {
        setArr([...arr, name]);
      }
    }
    setName('');
  }

  function handleDeleteTask(index) {
    const updatedTasks = arr.filter((_, i) => i !== index);
    setArr(updatedTasks);
  }

  function handleEditTask(index) {
    setName(arr[index]);
    setIsEditing(true);
    setEditIndex(index);
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
      <button onClick={handleAddOrUpdateTask}>
        {isEditing ? 'Update task' : 'Add task'}
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
