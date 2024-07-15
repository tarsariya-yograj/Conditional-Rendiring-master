
import React, { useState } from 'react'

const UserAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    
      <div>
       
        <h1 style={{color: isLoggedIn ? "yellowgreen" : "palegreen"}}>{isLoggedIn? "Welcome!":"Plsease Login"}</h1>
        <button onClick={()=>handleClick()}>Toggle Login</button>
      </div>
  )
}

export default UserAuthentication