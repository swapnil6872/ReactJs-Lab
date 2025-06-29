import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task,setTask]=useState("");
    const dispatch = useDispatch(); 

    const submitHandler= (e)=>{
         e.preventDefault();
         dispatch(addTodo(task));
    }
    return ( 
        <> 
        <form action="" onSubmit={submitHandler}>
            <input type="text" placeholder="Add a Task" onChange={(e) => setTask(e.target.value)}/>
            <button>Add Task</button>
        </form>
        </>
    )
}