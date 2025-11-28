
import './App.css'
import { useState } from 'react';
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
 

  // ---{Early Return Pattern}--//
if(!isLoggedIn) {
  return (
    <LoginBtn/>
  )
}


return (
  <div>
    <h1>Welcome Eeveryone to Dev world </h1>
    <div>
      {isLoggedIn && <LogoutBtn/> || <LoginBtn/>}
    </div>
  </div>
)


//--{ Ternary Operator}--//
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn/>}    
  //   </div>
  // )


//--{using If else condition}--//
  // if(isLoggedIn) {
  //   return(
  //     <LogoutBtn/>
  //   )
  // }                              
  // else {
  //   return(
  //     <LoginBtn/>
  //   )
  // }

}



export default App
