

import './App.css'

function App() {

  function handleClick() {
    alert('button clicked');
  }

  function handleMouseOver() {
    // alert('you over tha para');
    // console.log("Value til now:", e.target.value);
    
  }

  function handleInputChange(e) {
    // console.log("Value has been changed in input");
    console.log("Value til now:", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Should submit this Form");
  }


  return (
   <div>

    <button onClick={ alert('button clicked')}>Click me</button>

{/* 
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange}/>
      <button type="submit">Submit</button>
    </form> */}

    {/* <p onMouseOver={handleMouseOver} style={{backgroundColor: 'lightblue'}}> 
      I am a para
    </p>

    <button onClick={handleClick}>
      Click ME
    </button> */}
   </div>
  )
}

export default App
