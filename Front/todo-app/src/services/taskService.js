//URL
const API_URL = 'http://localhost:4000';

//Obtener todas las tareas
export async function getTasks(){
    const res = await fetch(`${API_URL}/tasks`);
    return res.json();
}

//Agregar tarea
export async function addTaskAPI(text){
    const res = await fetch(`${API_URL}/addTask`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text})
    });
    return res.json();
}

//Eliminar tarea
export async function deleteTaskAPI(id){
    await fetch(`${API_URL}/task/${id}`, {method: "DELETE"});
    return true;
}