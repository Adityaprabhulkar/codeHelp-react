import React from 'react'

import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container ' style={props.style}>
        <p className='user-name'>{props.name}</p>
        <img id='user-img' src={props.image} alt={props.name}/>
        <p className='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
