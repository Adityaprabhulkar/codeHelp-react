import { useMemo, useState } from 'react'
import './App.css'



function App() {
  const [ count, setCount] = useState(0);
  const [ input, setInput] = useState(0);

 function expensiveTask(num) {
    console.log("inside Expensive Task");
    for(let i=0; i<=1000000000; i++) {}
    return num+2;
}

let doubleValue = useMemo(() => expensiveTask(input), [input] );


  

  return (
    <div>
     <button onClick={() => setCount(count+1)}>
      Increment
     </button>

     <div>
      Count: {count}
     </div>


    <div>
      {doubleValue}
    </div>

    <input
    type='number'
    value={input}
    placeholder='enter number'
    onChange={(e) => setInput(e.target.value)} />
  </div>
  )
}

export default App
