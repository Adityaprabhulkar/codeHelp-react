
import Card from "./components/card"
import { useState } from "react"

function App() {
  //create state
  //manage state
  //change state
  //sync to state in on child

  const [name, setName] = useState("")
  

  return (
    <div>

      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      {/* <Card name={name} setName={setName}/>
      <p>I am inside parent Component and value of name is {name}</p> */}
    </div>

  )
}

export default App
