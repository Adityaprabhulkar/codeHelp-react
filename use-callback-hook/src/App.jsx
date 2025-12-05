
import './App.css'

import ChildComponent from './components/ChildComponent'
import ExpensiveComp from './components/ExpensiveComp';

function App() {
  
    return(
      <div>
        <ExpensiveComp/>
      </div>
    )
}
// {
//   const [count, setCount] = useState(0)

//   const handleClick = useCallback(() => {
//     setCount(count+1);
//   }, [count])

//   return (
//    <div>
//     <div>
//      Count: {count}
//     </div>
//     <br/> <br/>
//     <div>
//       <button onClick={handleClick}>
//          Increment </button>
//     </div>
//       <br/> <br/>

//     <div>
//       <ChildComponent
//        buttoName='Click Me'
//        handleClick={handleClick}
//       />
//     </div>
//    </div>
   
//   )
// }

export default App
