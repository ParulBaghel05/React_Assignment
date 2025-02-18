import React, { useState } from 'react';

const TodoList = () => {
  const [val, addValue] = useState("");
  const [task, addTask] = useState([]);

  function handleInput(event) {
    addValue(event.target.value);
  }

  function handleTask() {
    addTask((prev) => [...prev, val]);
    addValue("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add your task" value={val} onChange={handleInput} />
      <button onClick={handleTask}>Add</button>
      <div>
        {
        task.map((item)=>(
            <div>
                {item}
            </div>
        ))
    }
      </div>
    </div>
  );
};

export default TodoList;

