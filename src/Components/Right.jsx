import { Editor } from "@monaco-editor/react";
import UserContext from "../Context/UserContext";
import { useContext, useEffect } from "react";
import { CODE_SNIPPETS } from "../Piston/LanguageVersion";
import './Right.css'
export default function Right() {
    
  const {dark,data,setdata,lang,finalcolotest,testcase} = useContext(UserContext);
    
  useEffect(()=>{
    setdata(CODE_SNIPPETS[lang]);
  },[lang])

  return (
    <div>
      <Editor
        height="70vh"
        theme={dark ? "vs-dark" : "vs-light"}
        defaultLanguage="cpp"
        defaultValue = {CODE_SNIPPETS[lang]}
        onChange={(prev) => setdata(prev)}
        language={lang}
        value={data}
      />
      <div className="runtestcase">
        <button className="btn" style={{backgroundColor:finalcolotest[0]}}>{testcase[0]}</button>
        <button className="btn" style={{backgroundColor:finalcolotest[1]}}>{testcase[1]}</button>
        <button className="btn" style={{backgroundColor:finalcolotest[2]}}>{testcase[2]}</button>
        <button className="btn" style={{backgroundColor:finalcolotest[3]}}>{testcase[3]}</button>
        <button className="btn" style={{backgroundColor:finalcolotest[4]}}>{testcase[4]}</button>
      </div>
    </div>
  );
}
