import { useEffect, useState , useRef} from 'react'

import './App.css'

function App() {

  const [time, setTime] = useState(0);

  let timeRef = useRef(null);
  // const [count, setCount] = useState(0);
  // let val = useRef(0)

  // let btnRef = useRef();

  // function handleIncrement() {
  //   val.current = val.current + 1;
  //   console.log("value of val: ", val.current);
    
  //   setCount(count+1)
  // }

  // useEffect(() => {
  //   console.log("Im render every time");
    
  // })

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

  function startTimer() {
   timeRef.current = setInterval(() => {
      setTime(time => time +1)
    }, 1000)
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
   <div>
    <h1>StopWatch: {time} seconds </h1>
    <button onClick={startTimer}>
      Start
    </button>
    <br/>
    <br/>

    <button onClick={stopTimer}>
      Stop
    </button>
    <br/>
    <br/>
     <button onClick={resetTimer}>
      Reset
    </button>
    {/* <button
     ref={btnRef}
      onClick={handleIncrement}>
      increment
    </button>
    <br/>
    <br/>

    <button onClick={changeColor}>
      Chnage Color of 1st Button
    </button>

    <div>
      Count: {count}
    </div> */}
   </div>

  )
}

export default App
