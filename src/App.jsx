import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import SemiNav from './Components/SemiNav'
function App() {
 

  return (
    <div className='container'>
      <Navbar></Navbar>
      <SemiNav></SemiNav>
      <Body></Body>
    </div>
  )
}

export default App
