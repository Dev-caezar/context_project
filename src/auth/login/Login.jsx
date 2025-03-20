import { useState } from 'react'
import { useNavigate } from 'react-router'
import { FaEye,FaEyeSlash } from "react-icons/fa";
import './login.css'
import { useData } from '../../global/User_Context';

const Login = () => { 
    const [showpass, setShowPass]= useState(false)
    const {state, dispatch} = useData()
    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPass((prev)=> !prev);
      };
      const handleChange =(e)=>{
        dispatch({
            type: "FORM",
            userData: e.target.name,
            payload: e.target.value
        })
      }
      const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch({type: "LOGIN"})
        console.log("User Logged in successfully", state)
        navigate("/home")
        }
       
        const handleSignup =()=>{
          navigate("/")
        }



  return (
    <div className='loginBody'>
        <div className="login">
        <div className="loginLogo">
            <img src="/black-logo.png" alt="" />
        </div>
        <h1>Welcome Back!!!</h1>
        <h3 className='field'>Please enter your credentials to log in</h3>

        <div className="inputArea">
            <input type="text" placeholder='Email'
            name='email'
            value={state.email}
            onChange={handleChange} 
            />
            <input type={showpass? "text": "password"}
             placeholder='Password' 
             name='password'
             value={state.password}
             onChange={handleChange} 
             
             />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showpass ? <FaEyeSlash /> : <FaEye />}
            </span>
            <p>Forgot password?</p>
        </div>
        <button className='signIn' onClick={handleSubmit}>SIGN IN</button>
      </div>
      <div className="signupNav">
        <div className="logoHolder">
        <img src="/management-logo.png" alt="" className='logo'/>
        <h1>CAEZAR</h1>
        
        </div>
       <div className="text">
       <p>New to our platform? Sign up now.</p>
       <button className='signUp' onClick={handleSignup}>SIGN UP</button>
       </div>
      </div>
      
    </div>
  )
}

export default Login
