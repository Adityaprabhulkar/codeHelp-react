

import { useDispatch,useSelector } from 'react-redux'
import {useState} from 'react'
import './App.css'
import { decrement, increment , reset, incrementByAmount} from './features/counter/counterSlice';


function App() {
   const [amount, setAmount] = useState(0)
   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();

  function handleIncrementClick() {
      dispatch(increment());
  }

  function handleDecrementClick() {
      dispatch(decrement());
  }

  function handleResetClick() {
      dispatch(reset());
  }

  function handleIncAmount() {
    dispatch(incrementByAmount(amount))
  }
  

  return (
  <div className='container'>
    <button onClick={handleIncrementClick}> + </button>
    <p>Count: {count}</p>
    <button onClick={handleDecrementClick}> - </button>
    <br/>
    <br/> 
    <button onClick={handleResetClick}> Reset </button>
    <br/>
    <br/>
    <input type='number'
    value={amount}
    placeholder='Enter Ammount'
    onChange={(e) => setAmount(e.target.value)} /><br/>
    <br/> 
    
    <button onClick={handleIncAmount}> Inc by Amount </button>
  </div>
  )
}

export default App
