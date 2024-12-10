import { createAction, createReducer } from "@reduxjs/toolkit"

const initiaState = {
    count: 0,
    todos: ["кнопка 1", "кнопка 1", "кнопка 1", "кнопка 1"]
}

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const addtodos = createAction("addtodos");


export default createReducer(initiaState, (builder)=>{
    builder.addCase(increment, (state)=>{
        state.count = state.count + 1
    });
    builder.addCase(decrement, (state) =>{
        state.count = state.count - 1;
    })
    builder.addCase(addtodos, (state)=>{
        state.todos.push(" nazir100") 
   })
}) 