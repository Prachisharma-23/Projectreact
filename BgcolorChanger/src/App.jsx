import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (  
    <>

    <h1 className="ml-100 w-120 mt-12 italic text-center bg-black mb-4 text-white rounded-full">BG Color changer</h1>
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div 
      className=" fixed flex flex-wrap justify-center top-40 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button
        onClick={()=> setColor("red")} 
        className="outline-none px-4 py-1 text-white shadow-lg rounded-full hover:opacity-90 hover:scale-105"
        style={{backgroundColor :"red"}}>
          Red</button>
      </div>
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button 
        onClick={() => setColor("pink")}
        className="outline-none px-3 py-2 text-white shadow-lg rounded-full hover: opacity-90 hover:scale-105 "
        style={{backgroundColor :"pink"}}>
          Pink</button>
      </div>
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button 
        onClick={() => setColor("green")}
        className="outline-none px-3 py-2 text-white shadow-lg rounded-full hover: opacity-90 hover:scale-105 "
        style={{backgroundColor :"green"}}>
          Green</button>
      </div>
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button 
        onClick={() => setColor("purple")}
        className="outline-none px-3 py-2 text-white shadow-lg rounded-full hover: opacity-90 hover:scale-105"
        style={{backgroundColor :"purple"}}>
          Purple</button>
      </div>
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button 
        onClick={() => setColor("black")}
        className="outline-none px-3 py-2 text-white shadow-lg rounded-full hover: opacity-90 hover:scale-105"
        style={{backgroundColor :"black"}}>
          Black</button>
      </div>
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button 
        onClick={ () => setColor("yellow")}
        className="outline-none px-3 py-2 text-white shadow-lg rounded-full hover: opacity-90 hover:scale-105 "
        style={{backgroundColor :"yellow"}}>
          Yellow</button>
      </div>
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button 
        onClick={() => setColor("brown")}
        className="outline-none px-3 py-2 text-white shadow-lg rounded-full hover: opacity-90 hover:scale-105"
        style={{backgroundColor :"brown"}}>
          Brown</button>
      </div>
      
      </div>
    </div>
    </>
  );
}

export default App;


