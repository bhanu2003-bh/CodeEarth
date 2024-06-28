import UserContext from "./UserContext";
import { useState } from "react";


function UserContextProvider ({children}){

    const [data, setdata] = useState("");
    const [dark,setdark] = useState(true);
    const [lang,setlang] = useState('cpp');
    const run_inputs = ["42","-042","1337c0d3","0-1","words and 987"];
    const run_outputs  = [42,-42,1337,0,0];
    return(
    <UserContext.Provider value={{data,setdata,dark,setdark,lang,setlang,run_inputs,run_outputs}}>
        {children}
    </UserContext.Provider>

    )


}

export default UserContextProvider;