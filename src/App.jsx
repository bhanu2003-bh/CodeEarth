// App.jsx
import './App.css';
import Problem from './Problem.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import Form from './Components/Form.jsx';
import Home from './Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/problem/:id' element={<Problem />} />
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
