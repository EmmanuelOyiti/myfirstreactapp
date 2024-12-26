import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const [count, setCount]= useState(0)
  
  const increment =()=>{
    setCount( count + 1)
  }
  return (
   <div><h2>Counter App</h2>
   <button onClick={increment}>
    Clicked {count} times</button>
   </div>
  )
}

export default App;
