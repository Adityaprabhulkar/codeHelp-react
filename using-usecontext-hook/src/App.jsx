import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB';
import ChildC from './components/ChildC';


//step1: create context
const ThemeContext = createContext();
const UserContext = createContext();


// step2: wrap all the child inside a provider
// step3: pass value
// step4: go inside at consumer and consume that value

function App() {
const [user, setUser] = useState({name:"Aaditya"});
const [theme, setTheme] = useState('light')

return(
    <UserContext.Provider  value={user}>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA/>
        </div>

      </ThemeContext.Provider>
    </UserContext.Provider>
 
  

  
    // <>
    //   <UserContext.Provider value={user} >
    //     <ChildA/>
    //   </UserContext.Provider>
    // </>
  )
}

export default App
export {UserContext}
export {ThemeContext}

