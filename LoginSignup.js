import React,{useState} from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email_icon.jpg'
import password_icon from '../Assets/password_icon.png' 
import user1_icon from '../Assets/user1_icon.jpg' 

const LoginSignup = () => {
  const[action,setAction] =useState("SignUp");

  return (
    <div className='container'>
    <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
      <div className='inputs'>

      {action==='Login'?<div></div>:<div className='input'>
            <img src={user1_icon} alt=''/>
            <input type='text' placeholder='Name'/>
        </div>}
        
        <div className='input'>
            <img src={email_icon} alt=''/>
            <input type='email' placeholder='Email'/>
        </div>
        <div className='input'>
            <img src={password_icon} alt=''/>
            <input type='password' placeholder='Password'/>
        </div>
      </div>
      {action==='Sign Up'? <div></div>:<div className='forgot-password'>Forgot Password? <span>Click here</span></div>}
      
      <div className='submit_container'>
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign UP</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>LOG IN</div>
      </div>
    </div>
  )
}

export default LoginSignup;
