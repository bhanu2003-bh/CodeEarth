import UserContext from "./UserContext";
import { useState } from "react";


function UserContextProvider ({children}){

    const [data, setdata] = useState("");
    const [dark,setdark] = useState(true);
    const [lang,setlang] = useState('cpp');
    const  [run_inputs,setrun_inputs] = useState(["42","-042","1337c0d3","0-1","words and 987"]);
    const [run_outputs,setrun_outputs]  = useState(['Hello World','Hello World','Hello World','Hello World',0]);
    const [finalcolotest,setfinalcolotest] = useState(['white','white','white','white','white']);
    const [testcase,settestcase] = useState(['TestCase 1','TestCase 2','TestCase 3','TestCase 4','TestCase 5']);
    const counter = 0;
    const [Problem,setProblem]  = useState({
        number : 1,
        name : "String to Integer (atoi)",
        level : "Medium",
        description : `Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
        
        The algorithm for myAtoi(string s) is as follows:
        
        Whitespace: Ignore any leading whitespace (" ").
        Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
        Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
        Rounding: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
        Return the integer as the final result.`,
        
        example : [
            {
                Input : 's = "42"',
                Output : "42"
                
            },
            {
                Input : '"s =  -042"',
                Output : "-42"
            },
            {
              Input : ' s = "1337c0d3"',
              Output : "1337"
            }
            ,
            {
              Input : 's = "0-1"',
              Output : '0'
            },
            {
                Input : '"words and 987"',
                Output : '0'
            }
        ],
        Constraints : [
        "0 <= s.length <= 200", 
        "s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'",
        ],
        
        topics : [
        "String"
        ]
        ,
        Accepted : 0,
        Submissions : 0,
        Acceptance_Rate : 0,
        
        
        }
    );
    return(
    <UserContext.Provider value={{data,setdata,dark,setdark,lang,setlang,
    run_inputs,run_outputs,Problem,counter,setfinalcolotest,finalcolotest
    ,testcase,settestcase,setProblem,setrun_inputs,setrun_outputs
    }}>
        {children}
    </UserContext.Provider>

    )


}

export default UserContextProvider;