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
    <div className='container-app'>
      <h1 className='container-app__title'>Lista de tareas</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
