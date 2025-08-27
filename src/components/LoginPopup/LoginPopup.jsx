import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login") // login , signup
  return (
    <div className='login-popup'>
    <form action="" className="login-popup-container">
      <div className="login-popup-title">
      <h2>{currState}</h2>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
        <div className="login-popup-inputs">
         {currState==="Login"?<></>:<input type="text" placeholder='your name' required />}
          <input type="email" placeholder='your email' required />
          <input type="password" placeholder='password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox"required/>
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"?
        <p onClick={()=>setCurrState("Sign Up")}>Create a new account? <span>Click here</span></p>
        :<p onClick={()=>setCurrState("Login")}>Already have an account? <span>Login here</span></p>}
       
    </form>
    </div>
  )
}

export default LoginPopup
