import { useState } from 'react';
import './App.css';

//useSate used to change the state of the element and propogate to ui into DOM
function App() {


  let [counter, setCounter] = useState(15)
  
  //setcounter is method which is used to control counter variable
  //let counter=5

  const addValue = () =>{
    console.log("Clicked", counter);
    //counter=counter+1
    setCounter(counter => {
      if(counter<20){
        return counter +1;
      }
      else{
        return counter;
      }
    })
  }

  const removeValue = () =>{
    console.log("Clicked",counter);
    setCounter(counter => {
      if(counter>0){
        return counter-1;
      }
      else{
        return counter;
      }
    }
    )
  }


  return (
    <>
     
     <h1>Counter project</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value </button>
     <br/>
     <button onClick={removeValue}>Remove value</button>
     <footer>footer: {counter}</footer>
    </>
  )
}

export default App
