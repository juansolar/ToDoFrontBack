import { useEffect, useState } from "react";

import './TaskList.css';

const TaskList = ({tasks, deleteTask}) => {

    if(tasks.length === 0)
        return <div className="list-app"><p className="list-app__title">¡No existen tarea!</p></div>

    const [search, setSearch] = useState("");
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        const results = tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));
        console.log(results);
        setFilteredTasks(results)
    },[search, tasks])

    return(
        <div className="list-app">
            <h2 className="list-app__title">Tareas</h2>
            <input className="list-app__input" type="text" placeholder="Buscar tarea..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <ul className="list-app__items">
            {filteredTasks.map((task) => (
                <li className="list-app__item" key={task.id}>{task.text}
                    <button className="item__button" onClick={() => deleteTask(task.id)}>Eliminar</button>
                </li>
            ))} 
            </ul>
        </div>
    )
}

export {TaskList};