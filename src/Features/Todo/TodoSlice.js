import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}


export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        editTodo: (state, action) => {
            const {id, text} = action.payload
            state.todos.map((todo) => todo.id === id ? (todo.text = text) : todo.text)
        }
        ,
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const {addTodo, editTodo, removeTodo} = TodoSlice.actions

export default TodoSlice.reducer