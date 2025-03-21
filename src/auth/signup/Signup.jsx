import React, { useState } from 'react'
import './signup.css'
import { useData } from '../../global/User_Context'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const {state, dispatch}= useData()
  const navigate = useNavigate()
    const handleChange = (e) => {
        dispatch({
            type: 'FORM',
            userData: e.target.name,
            payload: e.target.value
        })
    }
    const handleSubmit = (e) => {
      e.preventDefault(); 
  
      if (!state.fullName || !state.email || !state.userName || state.password === "") {
          dispatch({ type: "ERROR" });
         console.log(state.error) 
      }
      else if(state.fullName === "" || state.email === "" || state.userName === "" || state.password === "") {
          dispatch({ type: "FORM" });
      }
      else {
          dispatch({ type: "SUCCESS" });
          navigate("login")
          console.log("User signed up successfully:", state);
      }
  };

  const handleSignin =()=>{
    navigate("/login")
  }
  
  return (
    <div className='signUpBody'>
     <div className="signInNav">
        <div className="signInlogoHolder">
        <img src="/management-logo.png" alt="" className='signLogo'/>
        <h1>Caezar</h1>
        </div>
       <div className="signInText">
       <p>Already have Account? Sign In now.</p>
       <button className='signInBtn' onClick={handleSignin}>SIGN IN</button>
       </div>
       </div>
       <div className="loginNav">
        <div className="loginHead">
          <h1>Sign up</h1>
          <img src="/black-logo.png" alt="" />
        </div>
        <p style={{fontSize:'18px'}}>Please provide your information to sign up.</p>
        <div className="loginInputArea">
          <input type="text" 
          placeholder='Name' 
          name='fullName'
          value={state.fullName}
          onChange={handleChange}
          className='loginInput' />
          <input type="text" 
          placeholder='Email'
          name='email'
          value={state.email}
          onChange={handleChange}
           className='loginInput'/>
          <div className="dataInput">
          <input type="text" 
          placeholder='Username'
          name='userName'
          value={state.userName}
          onChange={handleChange} 
          className='datatext' />
          <input type="text" 
          placeholder='Password'
          name='password'
          value={state.password}
          onChange={handleChange}
          className='datatext' />
        </div>
        </div>
        {state.error && <p className='error_message'>{state.error}</p>}
        <button className='mySignUp' onClick={handleSubmit}>SIGN UP</button>
       </div>
     </div>
  )
}

export default SignUp
