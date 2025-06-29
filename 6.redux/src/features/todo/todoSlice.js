import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: "12", task: "sample task", isDone: false }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); //direct mutation       
        },
        deleteTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        markAsDone: (state, action) => {
           state.todos=state.todos.map((todo)=>{
              if(todo.id===action.payload){
                 return { ...todo, isDone: !todo.isDone };
              }
              return todo;
           })
        }
    }
})
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;


