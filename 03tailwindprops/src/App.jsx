import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username:'Piyush',
    age:'40'
  }
  return (
    <>
      <h1 className='bg-green-400 p-5 rounded-xl '>Tailwind CSS</h1>
      <Card channel="Photo1" myInfo={myObj} btnText="My profile"></Card>
      <Card channel="Photo2" ></Card>
    </>
  )
}

export default App
