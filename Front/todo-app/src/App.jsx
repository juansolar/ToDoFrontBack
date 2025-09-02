import { useState } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import { useEffect } from 'react';
import { getTasks, addTaskAPI, deleteTaskAPI } from './services/taskService';

function App() {
  
  const [tasks, setTasks] = useState([]);

  //Cargar tareas
  useEffect(() => {
    getTasks().then(setTasks)
  },[]);

  //agregar tarea
  const addTask = async (text) => {
    const newTask = await addTaskAPI(text);
    setTasks([...tasks,newTask]);
  }

  //eliminar tarea
  const deleteTask = async (id) => {
    await deleteTaskAPI(id);
    setTasks(tasks.filter((task) => task.id !== id))
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
