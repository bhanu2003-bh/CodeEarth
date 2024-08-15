import './Login.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Login() {
const navigate = useNavigate();
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [show,setshow] = useState('password');
  


  useEffect(()=>{
    if(localStorage.cookies==document.cookie) navigate('/')
  },[])
  
  
  async function handlesubmit(e){
    e.preventDefault();
    const obj = {
      'email' : email,
      'password' : password
    };
  
    await  axios.post('http://localhost:8000/Login',obj)
    .then((res)=>{
      console.log("Login Successfully!!",res)
      if(res.status>=200 && res.status<300){
        document.cookie = res.data.cookie;
        localStorage.setItem('cookies',res.data.cookie);
         navigate('/');
       }
    })
    .catch((error)=>{
      console.log("Something went Wrong!!",error);
    });
    
  }

  function Password_State(e){
  if(e.target.checked) setshow('text');
  else setshow('password');
  }
  
  
    return (
      <div className='bg-login'>
      <div className="login">
           <h2>Welcome to <h3 className="login-logi">CodeEarth</h3><h2 className='login-x'>!</h2></h2>
  
          <input className='login-input' placeholder="Your email" type="email" required onChange={(e)=>setemail(e.target.value)} value={email}></input>
         
          <input className='login-input' placeholder="Password" type={show} required onChange={(e)=>setpassword(e.target.value)} value={password}></input>
           <div>
           <input className='login-show' type='checkbox' onClick={Password_State}></input>
           <span className='login-show' >Show password</span>
           </div>
          <button className='login-submit' onClick={handlesubmit}>Login</button>

      <h4>Dont have an account?Create a <a href='http://localhost:5173/Signup'>new account</a></h4>
    </div>
    </div>
  )
}