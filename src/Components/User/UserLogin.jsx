import React from 'react'
import '../../Style/UserLogin.css'
import { useNavigate } from 'react-router-dom'
const UserLogin = () => {

  const gotouserportal = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      gotouserportal("/userPortal")
      
  }

  return (
    <div onClick={handleSubmit} className='user'>
      <h1>wellcome</h1>
    </div>
  )
}

export default UserLogin
