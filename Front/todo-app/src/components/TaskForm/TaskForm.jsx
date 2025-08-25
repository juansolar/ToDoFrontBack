import { useState } from "react";

const TaskForm = ({addTask}) =>{

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()){
            alert("¡Debes escribir la tarea!")
            return;
        }
        addTask(text);
        setText("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Agregar tarea" 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            <button type="submit">
                Agregar
            </button>
        </form>
    )
}

export {TaskForm};