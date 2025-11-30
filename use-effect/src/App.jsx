
import './App.css'
import { useState, useEffect } from 'react';

function App() {
//  const [count, setCount] = useState(0);
//  const [total, setTotal] = useState(1);
 const [seconds, setSeconds] = useState(0)
 //First => side-effect function
 //Second => clean-up function
 //Third => comma seperated dep list

 // Variation: 1
 // run on every rendering
//  useEffect(() => {
//   alert('I will call on every render')
//  })

 // Variation: 2
 //run only first rendering
// useEffect(() => {
//   alert("I will run on 1st render")
// },[])

//Variation: 3
// useEffect(() => {
//   alert("I will run every time when count is updated")
// },[count])

//Variation: 4
// useEffect(() => {
//   alert("I will run every time when count/total is updated")
// },[count, total])

//Variation: 5
// useEffect(() => {
//   alert("Count is Updated")
//   return() => {
//      alert("Count is unmounted from UI")
//   }
// },[count])



//  function handleClick() {
//   setCount( count+ 1);
//  }

//  function handleTotal() {
//   setTotal( total + 1);
//  }



useEffect(() => {
  const intervalid = setInterval(() => {
    console.log("setInterval executed");
    setSeconds(prevSeconds => prevSeconds + 1);
  }, 1000)

  return() => {
    console.log("Time is Stopped");
  clearInterval(intervalid)    
  }
}, [])

  return (
    <div>

      <h1>Seconds: {seconds}</h1>
      {/* <button onClick={handleClick}>
        Update Counter
      </button>
      <p>Count is: {count}</p>

      <br></br>

      <button onClick={handleTotal}>
        Update Total
      </button>
      <p>Total is: {total}</p> */}
    </div>
  )
}

export default App
