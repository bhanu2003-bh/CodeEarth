import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import SemiNav from './Components/SemiNav'

function Problem() {

const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.cookies!=document.cookie) navigate('/login')
  },[])

  return (
    <div>
     <Navbar></Navbar>
      <SemiNav></SemiNav>
      <Body></Body>
    </div>
  )
}

export default Problem
