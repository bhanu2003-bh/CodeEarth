import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.css'

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);



  useEffect(() => {
    const problems = [
        { name: 'Hello World', Description: 'Write Hello World Program', Accepted: '99' },
        { name: 'Calculator', Description: 'Write Calculator Program', Accepted: '101' },
        { name: 'Palindrome Checker', Description: 'Check if a word is a palindrome', Accepted: '89' },
        { name: 'Sorting Algorithm', Description: 'Implement a sorting algorithm', Accepted: '150' },
        { name: 'Prime Number Generator', Description: 'Generate prime numbers', Accepted: '75' },
        { name: 'Hello World', Description: 'Write Hello World Program', Accepted: '99' },
        { name: 'Calculator', Description: 'Write Calculator Program', Accepted: '101' },
        { name: 'Palindrome Checker', Description: 'Check if a word is a palindrome', Accepted: '89' },
        { name: 'Sorting Algorithm', Description: 'Implement a sorting algorithm', Accepted: '150' },
        { name: 'Prime Number Generator', Description: 'Generate prime numbers', Accepted: '75' }
      ];
      setData(problems);
    
    
    // if (localStorage.cookies !== document.cookie) navigate('/login');

    // axios.get('your-api-endpoint')
    //   .then((res) => {
        
    //     setData([obj,obj2]); 
    //   })
    //   .catch((err) => {
    //     console.log('Server Get Crashed:', err);
    //   });
  }, []);

  return (
    <div className="problems">
        <h1 className="problemhead">CodeEarth</h1>

         <button className="problemsbutton"  onClick={() => navigate('/form')}>Contribute Problem</button>

      <ol type="I" className="problem-list">
      <div className="problem-item" style={{background:'#808080',color:"white"}}>
          Number
          <a href="#" style={{color:"white"}}>Name</a>
          Accepted
        </div>
        {data.map((item, index) => (
          <li key={index}>
            <div className="problem-item">
            {index}
            <a href="#" onClick={() => navigate(`/problem/${item.id}`)}>{item.name}</a>
            {item.Accepted}
            </div>
          </li>
        ))}
      </ol>
      
    </div>
  );
}

export default Home;
