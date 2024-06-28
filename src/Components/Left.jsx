import "./Left.css";
import Problem from "../Data/Problem1";
export default function Left() {
  return (
    <div className="left-container">
      <h1 className="name">
        <span style={{ color: "#ee0653"}}>{Problem.number}</span>.{" "}
        <span style={{ color: "white"}}>{Problem.name}</span>
      </h1>

      <div className="description">
        <pre className="description-para">{Problem.description}</pre>
      </div>

      <div className="examples">
        {Problem.example.map((item, index) => (
          <div className="example" key={index}>
            <pre>
              <h3 style={{ color: "white" }}>
                <b>Testcase {index}:</b>
              </h3>
              <br></br>
              <pre>
                <b style={{ color: "white" }}>Input: </b>
                {item.Input}
              </pre>
              <pre>
                <b style={{ color: "white" }}>Output: </b>
                {item.Output}
              </pre>
              <br></br>
            </pre>
          </div>
        ))}
      </div>
      <h3 style={{color:"white"}}>Constraints</h3>
      <br></br>
      <div className="constraints">
        <ul>
          {Problem.Constraints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="topics">
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head"></input>
            <label htmlFor="collapsible-head">Topics</label>
            <div className="collapsible-text">
              <p>{Problem.topics.map((items) => items + " || ")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="problem-profile">
        <h4>
          {" "}
          <span>Accepted</span> : {Problem.Accepted} | <span>Submissions</span>{" "}
          : {Problem.Submissions} | <span>Acceptance Rate</span> :{" "}
          {Problem.Acceptance_Rate}%
        </h4>
      </div>
    </div>
  );
}
