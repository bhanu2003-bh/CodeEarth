import './Signup.css'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Signup() {
const navigate = useNavigate();
  const [name,setname] = useState('');
const [email,setemail] = useState('');
const [password,setpassword] = useState('');
const [show,setshow] = useState('password');

useEffect(()=>{
  if(localStorage.cookies==document.cookie) navigate('/')
},[])


async function handlesubmit(e){
  e.preventDefault();
  const obj = {
    'name':name,
    'email' : email,
    'password' : password
  };

  await  axios.post('http://localhost:8000/Signup',obj)
  .then((res)=>{
    console.log("SignUp Successfully!!")
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
    <div className="Signup">
         <h2>Welcome to <h3 className="Signup-logi">CodeEarth!</h3></h2>
        <input className='signup-input' placeholder="Full name" type="text" required  onChange={(e)=>setname(e.target.value)} value={name}></input>
        
        <input className='signup-input' placeholder="Your email" type="email" required onChange={(e)=>setemail(e.target.value)} value={email}></input>
 
        <input className='signup-input' placeholder="Password" type={show} required onChange={(e)=>setpassword(e.target.value)} value={password}></input>
        <div>
           <input className='signup-show' type='checkbox' onClick={Password_State}></input>
           <span className='signup-show' >Show password</span>
         </div>
        <button onClick={handlesubmit} className='signup-submit'>Signup</button>
      <h3>Already have an account ?<a href='http://localhost:5173/login'>Login</a></h3>
    </div>
    </div>
  )
}