import { useState,useCallback,useEffect,useRef } from 'react' 
 

function App() {
  const [length,setLenght] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)

  const [password, setPassword] = useState();

  const passwordRef = useRef(null);
  

  const passwordGenerator =  useCallback( () => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if(numAllowed) str+= '0123456789';
      if(charAllowed) str+= '!@#$%^&*+=[]{}';

      for (let index = 1; index < length; index++) {
           let char = Math.floor(Math.random() * str.length + 1);
           pass += str.charAt(char);
      }
      console.log(pass);
      setPassword(pass);

  },[length,numAllowed,charAllowed,setPassword]);  

  const copyPasswordToClip = useCallback( () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password]);

  const changePassword = () => {
    passwordGenerator();
  }

  useEffect( () => {
    passwordGenerator();
  },[length,numAllowed,charAllowed,setPassword,passwordGenerator])


  return (
    <>
      
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 py-3 my-3 text-orange-500 bg-gray-800  '>
        <h1 className='text-4xl text-center text-white px-4 py-3 bottom-10'>Password Generator</h1>
        <div className='flex m  shadow-md rounded-lg mb-4 overflow-hidden text-center'>
          <input type='text' value={password} className='outline-noe w-full px-3 py-1 ' placeholder='Password' readOnly ref={passwordRef}></input>
          <button className='bg-blue-700 py-0.5 px-3 shrink-0 text-white outline-none' onClick={copyPasswordToClip}>Copy</button>
          <button className='bg-green-700 py-0.5 px-3 shrink-0 text-white outline-none' onClick={changePassword}>Change</button>
        </div>
        <div className='flex items-center  gap-x-1'>
          <input type='range' id='range' name='range' min='6' max='100' value={length}  className='cursor-pointer' onChange={ (e) => {setLenght(e.target.value)} }></input>
          <label>Lenght: {length}</label>
         
            <input type='checkbox' defaultChecked={numAllowed} id='numberInput' onChange={ () => { setNumAllowed((prev) => !prev ); } }></input>
            <label>Numbers</label>
        
            <input type='checkbox' defaultChecked={numAllowed} id='numberInput' onChange={ () => { setCharAllowed((prev) => !prev ); } }></input>
            <label>Character</label>
        </div>
      </div>
    </>
  )
}

export default App
