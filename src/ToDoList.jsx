import { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] =useState("");

    function handleAddList(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
    }

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i!==index));
    }

    function moveUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDown(index){
        if (index < tasks.length){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div>
            <h1>To Do List</h1>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span>{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveUp(index)}>☝</button>
                    <button className="move-button" onClick={()=>moveDown(index)}>👇</button>
                    </li>)}
            </ol>
            <br />
            <input type="text" value={newTask} placeholder="Add New Task" onChange={handleInputChange}/>
            <button className="add-btn" onClick={handleAddList}>Add</button>
        </div>
    );
}

export default ToDoList