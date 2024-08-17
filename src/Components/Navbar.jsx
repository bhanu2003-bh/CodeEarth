import axios from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";

const getFileExtension = (language) => {
  const extensions = {
    python: 'py',
    javascript: 'js',
    cpp: 'cpp',
    java: 'java',
    csharp: 'cs',
    php: 'php',
  };
  return extensions[language.toLowerCase()] || 'txt'; // Default to 'txt' if the language is not found
};

const getVersionForLanguage = (language) => {
  const LANGUAGE_VERSIONS = {
    cpp: "10.2.0",
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
  };
  return LANGUAGE_VERSIONS[language.toLowerCase()] || "*"; // Default to '*' if language is not found
};

function Navbar() {
  const navigate = useNavigate();
  const { dark, setdark, run_inputs, lang, data, run_outputs, setfinalcolotest , settestcase} = useContext(UserContext);
   
  async function Checker() {
    let i = 0;
    let coloring = ['white', 'white', 'white', 'white', 'white'];
    let finaltestcasestate = ['Running...','Running...','Running...','Running...','Running...'];
    setfinalcolotest(coloring);
    settestcase(['Running...','Running...','Running...','Running...','Running...'])
    for (const items of run_inputs) { 
      try {
        const version = getVersionForLanguage(lang);
        console.log(`Using version ${version} for ${lang}`);
        
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
          language: lang,
          version: version, 
          files: [
            {
              name: "main." + getFileExtension(lang),
              content: data,
            },
          ],
          stdin: items, 
        });
        
        const resultOutput = response.data.run.stdout.trim(); 
        console.log('Result Output:', resultOutput);
        console.log('Expected Output:', run_outputs[i]);
        
        if (resultOutput === run_outputs[i].trim()) {
          coloring[i] = 'green';
           finaltestcasestate[i] = 'Accepted'
        } else {
          coloring[i] = 'red';
          finaltestcasestate[i] = 'Failed'
        }
        
        console.log(`Coloring for input ${i}: ${coloring[i]}`);
      } catch (error) {
        console.error('Error running code with Piston:', error.message);
        finaltestcasestate[i] = 'Failed'
        coloring[i] = 'Red'
      }
      i++;
    }
    settestcase(finaltestcasestate);
    setfinalcolotest(coloring);
  }

  return (
    <header
      className="head"
      style={{
        backgroundColor: "#010001",
        color: "#F2F2F2",
      }}
    >
      <h1 className="logo">
        <span style={{ color: "#ee0653" }}>Code</span>Earth
      </h1>
      <div className="store1">
        <button
          className="mode"
          onClick={() => setdark(!dark)}
          style={{ background: "#37373E", color: "white" }}
        >
          <i className={dark ? "fa-regular fa-sun" : "fa-solid fa-moon"}></i>
        </button>
      </div>
      <div className="store2">
        <button
          className="run1"
          style={{ background: "#37373E", color: "white" }}
          onClick={Checker}
        >
          Run <i className="fa-solid fa-person-running"></i>
        </button>
        <button
          className="run2"
          style={{ background: "#37373E", color: "white" }}
        >
          Submit <i className="fa-solid fa-cloud-arrow-up"></i>
        </button>
      </div>
      <h3 className="level">Difficulty: 1982</h3>
      <div className="nextprev">
        <button
          className="prev"
          style={{ background: "#37373E", color: "white" }}
          onClick={()=>navigate('/')}
        >
          <i className="fa-solid fa-arrow-left"></i> Home
        </button>
        <button
          className="next"
          style={{ background: "#37373E", color: "white" }}
          onClick={()=>navigate('/profile')}
        >
          Profile <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
