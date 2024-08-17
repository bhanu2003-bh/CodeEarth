import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./Context/UserContext";
import './Home.css';
import axios from "axios";

function Home() {

  const {setrun_inputs,setrun_outputs,setProblem} = useContext(UserContext);

  const navigate = useNavigate();
  const [data, setData] = useState([]);



  function parseJSONString(str) {
    // Split the string using the delimiter between JSON objects
    let jsonObjects = str.split(/\}\s*\{/).map((obj, index, arr) => {
      // Add braces that were removed by split
      if (index > 0) obj = `{${obj}`;
      if (index < arr.length - 1) obj = `${obj}}`;
  
      // Parse the JSON object
      return JSON.parse(obj);
    });
  
    return jsonObjects;
  }


  useEffect(() => {
    if(localStorage.cookies!=document.cookie) navigate('/login')
    const fetchData = async () => {
      try {
        const obj = {
          cookie: document.cookie,
        };

        const response = await axios.post('http://localhost:8000/problem/get', obj);

          // For debugging, log the response data
        setData(response.data); // Set the data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  function Problemnavigate(e,item){
    e.preventDefault();
  
      item.example = parseJSONString(item.example);
       item.Constraints =   item.Constraints.split(',').map(item => item.trim());
       item.topics = item.topics.split(/[\s,]+/) 
       .filter(word => word.length > 0) 
       .map(word => word.split(' ')[0]);


       console.log(item);
     

      setrun_inputs(item.run_inputs);
      setrun_outputs(item.run_outputs);
      setProblem(item);

    navigate(`/problem/${item.number}`)
  }

  return (
    <div className="problems">
      {/* Profile image link at top left */}
      <a href="/profile" className="profile-link">
        <img src="/Profile.png" alt="Profile" className="profile-image" />
      </a>

      <h1 className="problemhead">CodeEarth</h1>
      <button className="problemsbutton" onClick={() => navigate('/form')}>Contribute Problem</button>

      <ol type="I" className="problem-list">
        <div className="problem-item" style={{ background: '#808080', color: "white" }}>
          Number
          <a href="#" style={{ color: "white" }}>Name</a>
          Level
        </div>
        {data.map((item, index) => (
          <li key={index}>
            <div className="problem-item">
              {index}
              <a href="" onClick={(e) => Problemnavigate(e, item)}>{item.name}</a>
              {item.level}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
