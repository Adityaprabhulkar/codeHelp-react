import React from 'react'

const ChildComponent = React.memo(
    (props) => {
    
    console.log('Child Component re-render agian');
    
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttoName}
      </button>
    </div>
  )
}
)

export default ChildComponent
//React.memo -> wrap -> component ->
// component re-render when props getting change,
//  other wise not re-render

//if u r sending a function, then React.memo want be able to save you from re-rendering
