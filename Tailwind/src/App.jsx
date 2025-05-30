
import './App.css'
import Card from './components/Card'

function App() {
  let myNum={
    name: Prachi,
    age: 21
  }

  

  return (
    <>
    <h1 className='bg-black text-pink-500 p-4 rounded-xl'>Tailwind css</h1>
    <Card Company='tcs' myObject={myNum}/>

    </>
  )
}

export default App
