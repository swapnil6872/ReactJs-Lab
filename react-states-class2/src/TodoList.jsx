import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {


    let [todos, setTodos] = useState([{ task: 'sample task', id: uuidv4(), mark: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), mark: false }]
        })
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => {
            return prevTodos.id != id;
        }));
    }

    // let upperCaseAll = () => {
    //      setTodos((prevTask) =>{
    //      return prevTask.map((todo)=>{
    //             return {...todo,task:todo.task.toUpperCase()}
    //         })
    //      } )
    // }



    // let upperCaseOne =(id)=>{
    //     setTodos((prevTodos)=>{
    //         return prevTodos.map((todo)=>{
    //            if(todo.id===id){
    //                 return{ ...todo,task: todo.task.toUpperCase()}
    //             }else{
    //                 return todo;
    //             }
    //         })
    //     })
    // }

    let markDoneAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todos) => {
                if (todos.mark == false) {
                    return { ...todos, mark: true }
                } else {
                    return { ...todos, mark: false }
                }
            })
        })

    }

    let markDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.mark == true) {
                    if (todo.id == id) {
                        return { ...todo, mark:false }
                    }
                } if (todo.mark == false) {
                    if (todo.id == id) {
                        return { ...todo, mark: true }
                    }
                }
                 return todo;  
            })
        })
    }

    return (
        <div>
            <input placeholder='add a task' value={newTodo} onChange={updateTodoValue} />
            <br />
            <br />
            <button onClick={addNewTask} >Add Task</button>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} >
                        <span style={todo.mark ? { textDecorationLine: "line-through" } : {}} > {todo.task}</span>  &nbsp;&nbsp;&nbsp;
                        <span> <button onClick={() => deleteTodo(todo.id)}> Delete </button> </span>
                        {/* <span> <button onClick={()=> upperCaseOne(todo.id)}> UpperCase</button> </span> <br /> */}
                        <span> <button onClick={() => markDone(todo.id)}> Mark A done</button> </span> <br />
                    </li>
                ))}
            </ul>
            {/* <button onClick={upperCaseAll}>UpperCaseAll</button> */}
            <button onClick={markDoneAll}>MarkDoneAll</button>
        </div>
    )
}