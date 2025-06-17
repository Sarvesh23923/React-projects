import './App.css';
import { useState,useRef } from 'react';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');
  const inputTask = useRef(null);

  const addTask = () => {
    setTodo([...todo, {current: task, completed: false}]);
    inputTask.current.value = '';
    setTask('');
  }

  const deleteTask = delTask => {
    setTodo(todo.filter((task) => {
      return task.current !== delTask;
    }))
  }

  const completeTask = complete => {
    setTodo(todo.map((task) => {
      return task.current === complete ? {...task, completed: !task.completed} : task
    }))
  }

  return(
    <div>
      <h1>Todo List</h1>

      <div className="input-field">
        <input type="text" 
        ref={inputTask}
        placeholder='Task...'
        onChange={event => setTask(event.target.value)}
        onKeyDown={event => {
          if(event.keyCode === 13) addTask()
        }}
        />

        <button className="add-btn" onClick={addTask}>Add Task</button>
        <hr />
      </div>

      <ul>
        {todo.map((val, key) => {
          return(
            <div className="tasks">
              <li key={key}>{val.current}</li>
              <button className="complete-btn" onClick={() => completeTask(val.current)}>Complete</button>
              <button className="delete-btn" onClick={() => deleteTask(val.current)}>Delete</button>

              {val.completed ? <p>Completed</p> : <p>Not Completed</p>}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App;