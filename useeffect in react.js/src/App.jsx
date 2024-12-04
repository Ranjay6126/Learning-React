import{useEffect} from 'react'
import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(0);

//   //  Variation 1
// // runs on every render
// useEffect(() => {
  
//   alert("I will run on each render");

// })


// variation 3
// that i will run ever time when count get update
useEffect(() => {

    alert ("that i will run ever time when count get update");
  
}, [count, update])


function handleClick(){
  setCount(count+1);
}
function handleupdate(){
  setUpdate(update+1);
}

  return (
   
    <div>

      <button onClick={handleClick}> Click me</button>
      <br/>
      count is: { count}
      <hr/> <br/>

      <button onClick={handleupdate}> Sumit</button>
      <br/>
      count is: { update}

    </div>

  )
}

export default App
