import { useState } from 'react' 
import './App.css'

function App() {
  
  const [color,setColor] = useState('olive');

  return (
    <> {color}
       <div className='w-full h-screen duration-400' style={{ backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center  inset-x-0 px-2 pad2y bottom-14'  >
          <div className='fixed flex flex-wrap justify-center shadow-lg bg-white gap-4 px-3 py-3 rounded-3xl'>
            <button className='outline-none px-4 rounded-full shadow-lg bg-red-500' onClick={ () => setColor('red') }>Red</button>

            <button className='outline-none px-4 rounded-full shadow-lg bg-green-500' onClick={ () => setColor('green') }>Green</button>

            <button className='outline-none px-4 rounded-full shadow-lg bg-blue-500' onClick={ () => setColor('blue') }>Blue</button>

            <button className='outline-none px-4 rounded-full shadow-lg bg-yellow-500' onClick={ () => setColor('yellow') }>Yellow</button>

          </div>
        </div>

       </div>
    </>
  )
}

export default App
