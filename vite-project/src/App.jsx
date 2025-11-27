
import './App.css'
import UserCard from './components/UserCard'
import Tobey from './assets/tobey.jpg'
import tomcruise from './assets/tomcruise.jpg'
import anadearmas from './assets/anadearmas.jpg'

function App() {
  

  return (
    <div className='container'>
    <UserCard name="Tomb cruise" desc="desc 1" image={tomcruise}  style={{"border-radius":"10px"}}/>
    <UserCard name="ana-de-armas" desc="desc 2" image={anadearmas} style={{"border-radius":"10px"}} />
    <UserCard name="tobey" desc="desc 3" image={Tobey}  style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
