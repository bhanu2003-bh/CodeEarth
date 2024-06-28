import UserContext from "../Context/UserContext";
import "./Navbar.css";
import { useContext, useState } from "react";

function Navbar() {
  
  const {dark,setdark,run_inputs,run_outputs} = useContext(UserContext);

  function Checker(){
     run_inputs.map( async (items,ind) =>{
       const output = await Apidata();
  
     })
  }

  return (
    <header
      className="head"
      style={{
        backgroundColor:  "#010001",
        color:  "#F2F2F2" ,
      }}
    >
      <h1 className="logo">
        <span style={{ color: "#ee0653" }}>Code</span>
        Earth
      </h1>
      <div className="store1">
        <button
          className="mode"
          onClick={() => setdark(!dark)}
          style={
             { background: "#37373E", color: "white" }  
          }
        >
          <i className={dark ? "fa-regular fa-sun" : "fa-solid fa-moon"}></i>
        </button>
      </div>
      <div className="store2">
        <button
          className="run1"
          style={
            { background: "#37373E", color: "white" }  
          }
          onClick={Checker}
        >
          Run <i className="fa-solid fa-person-running"></i>
        </button>
        <button
          className="run2"
          style={
             { background: "#37373E", color: "white" }
          }
        >
          Submit <i className="fa-solid fa-cloud-arrow-up"></i>
        </button>
      </div>
      <h3 className="level">Difficulty:1982</h3>
      <div className="nextprev">
        <button
          className="prev"
          style={
            { background: "#37373E", color: "white" }
          }
        >
          <i className="fa-solid fa-arrow-left"></i> Previous
        </button>
        <button
          className="next"
          style={
             { background: "#37373E", color: "white" }  
          }
        >
          Next <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
