import { useEffect, useState } from "react";

const TaskList = ({tasks, deleteTask}) => {

    if(tasks.length === 0)
        return <div>¡No existen tarea!</div>

    const [search, setSearch] = useState("");
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        const results = tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));
        console.log(results);
        setFilteredTasks(results)
    },[search, tasks])

    return(
        <>
            <input type="text" placeholder="Buscar tarea..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <h2>Tareas</h2>
            <ul>
            {filteredTasks.map((task) => (
                <li key={task.id}>{task.text}
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </li>
            ))} 
            </ul>
        </>
    )
}

export {TaskList};