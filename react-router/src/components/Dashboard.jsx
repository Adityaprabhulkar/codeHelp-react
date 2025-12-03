import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/")
  }
  
  return (
    <div>
      Dashboard page
      <button onClick={handleClick}>
        Move to Home Page
      </button>
      <Outlet/>
    </div>
  )
}

export default Dashboard
