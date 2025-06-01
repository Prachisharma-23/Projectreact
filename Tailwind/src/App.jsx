
import './App.css'
import Card from './components/Card'

function App(){
  let arr=[1,2,3]
  return (
    <>
    <h1 className='bg-black text-pink-500 p-4 rounded-xl'>Tailwind css</h1>
    <Card username="hello" btnText="Click me"/>
    <Card username="work"/>

    </>
  )
}

export default App
