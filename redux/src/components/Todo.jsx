import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";


export default function Todo() {

    const todos = useSelector((state) => state.todos)
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log('delete', id);
        dispatch(deleteTodo(id));
    }
    const markDone =(id)=>{
          dispatch(markAsDone(id));
    } 
    return (
        <>
            <AddForm></AddForm>
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}  style={ todo.isDone ? { textDecorationLine: "line-through" } : {}} >{todo.task}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={()=> markDone(todo.id)}> Marks Done</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

