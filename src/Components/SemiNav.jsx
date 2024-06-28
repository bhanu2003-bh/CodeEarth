import "./SemiNav.css";
import { LANGUAGE_VERSIONS,CODE_SNIPPETS} from "../Piston/LanguageVersion";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

export default function SemiNav() {

    const {lang,data,setdata,setlang} = useContext(UserContext);
   
function handleMe(e){
setlang(e.target.value);
}

function CopyValue(){
  navigator.clipboard.writeText(data);
}

  return (
    <nav className="seminav">
      <a href="#">Statement</a>
      <a href="#">Submissions</a>
      <a href="#">Solution</a>
      <a href="#">Editioral</a>
      <div className="custom-select">
        <select className="languge" onChange={handleMe}>
          {Object.keys(LANGUAGE_VERSIONS).map((items) => (
             <option key={LANGUAGE_VERSIONS[items]} value={items}>{items} {LANGUAGE_VERSIONS[items]}</option>
          ))}
        </select>
      </div>

      <button className="tooltip" style={{"margin-right": "27px"}} onClick={CopyValue}>
        <i className="fa-regular fa-copy"></i>
        <span className="tooltiptext">Copy</span>
      </button>
      <button className="tooltip" onClick={() => setdata(CODE_SNIPPETS[lang])}>
      <i className="fa-solid fa-power-off"></i>
        <span className="tooltiptext">Reset</span>
      </button>
    </nav>
  );
}
