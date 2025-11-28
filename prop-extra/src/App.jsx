import './App.css';
import { useState } from 'react';
import Button from './components/Button';


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count +1);
  }

  return (
      <div>
        <Button handleClick={handleClick}
        text="Click me">
          <h1>{count}</h1>
        </Button>
      </div>
  )
}

export default App
