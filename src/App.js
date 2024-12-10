import React from 'react'
import { useDispatch, useSelector } from "react-redux"; // импорт диспетч и селектор для того чтобы редакс и компонет работал совместно
import { increment, decrement, addtodos } from './reduxToolkit/toolkitReducer';

function App() {

  const count = useSelector(state => state.toolkit.count);
  const todos = useSelector(state => state.toolkit.todos);


  const dispatch = useDispatch()



  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={()=> dispatch(increment())}>Инкримент</button>
        <button onClick={()=> dispatch(decrement())}>Декремент</button>
        <h1>{todos}</h1>
        <button onClick={()=> dispatch(addtodos())}>todos</button>
    </div>
  );
}

export default App;
