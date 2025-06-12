import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed , setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [clicked, setClicked] =useState(false);

  const passwordRef= useRef(null);

  const passwordGenerator = useCallback(() =>{

    let pass = ""
    let str =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str +="!@#$%^&*_-{}[]~`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      }


    setPassword(pass)



  }
   , [length,numberAllowed , charAllowed, setPassword])
   //to memorize we use setPassword otherwise we don't need it 

   const copyPasswordToClipboard= useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
    setClicked(true);
   },
  [password])

   useEffect(()=>{
   passwordGenerator()
   },[length, numberAllowed, charAllowed, passwordGenerator])

  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md text-lg text-orange-400 bg-gray-700'>
        Password generator
        <div className='flex text-orange-400 shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none bg-white text-orange-400 w-full py-1 px-3'
          placeholder="Password"
          readOnly
          ref={passwordRef}
          />

          <button onClick ={copyPasswordToClipboard}
          className={` text-white px-3 py-1 ${clicked ? 'bg-black' : 'bg-orange-600'}`}>
            copy
          </button>
        </div>
        <div className='flex  text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          
            <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {setnumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='numberInout'> Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={() => {setcharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='CharacterInout'> Character</label>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default App