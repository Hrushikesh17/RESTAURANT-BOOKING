import React from 'react'
import { Link } from 'react-router-dom'
import './../Style/Landing.css'
const LandingPage = () => {
  return (
    <div className='landingPage'>
     <div className="loginOption">
     <Link to="/userLogin"><button>Entry</button></Link>
      <Link to="/adminLogin"><button>Login as Admin</button></Link>
      <h1>weelcome to hhjkllhhj</h1>
     </div>
  </div>
  )
}

export default LandingPage
