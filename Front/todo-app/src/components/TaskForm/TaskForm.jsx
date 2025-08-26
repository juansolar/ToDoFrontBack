import { useState } from "react";

import './TaskForm.css'

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
        <form className="form-app" onSubmit={handleSubmit}>
            <input className="form-app__input" type="text" placeholder="Agregar tarea" 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            <button className="form-app__button" type="submit">
                Agregar
            </button>
        </form>
    )
}

export {TaskForm};