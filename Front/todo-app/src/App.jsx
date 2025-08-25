import { useState } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  
  const [tasks, setTasks] = useState([]);

  console.log(tasks)

  //agregar tarea
  const addTask = (text) => {
    const newTask = {id: Date.now(), text};
    setTasks([...tasks,newTask]);
  }

  //eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }


  return (
    <>
      <h1>Lista de tareas</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App
