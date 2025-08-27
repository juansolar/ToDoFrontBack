const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

//Middleware
app.use(cors());
app.use(express.json()); //para leer JSON en requests

//"Base de datos" temporal en memoria
let tasks = [];

//Rutas
app.get("/tasks", (req, res) =>{
    res.json(tasks);
});

app.post("/addTask", (req, res) => {
    const { text } = req.body;
    if(!text) return res.status(400).json({error: "El texto es obligatorio"});

    const newTask = {id:Date.now(), text};
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.delete("/task/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id != id);
    res.json({success: true})
});


//iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});







