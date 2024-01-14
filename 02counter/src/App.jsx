import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  let [counter,setCounter] = useState(10)

  //let counter = 10;

  const addValue = () => {
    //console.log(counter)
    if(counter < 25)
    {
      counter = counter + 1 
    }
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter > 0)
    {
      counter = counter -1 
    }
      setCounter(counter);
  }

  return (
    <>
      <h1>Counter react</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add Value</button> &nbsp;|&nbsp;
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
