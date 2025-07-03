import React from "react";
import './App.css'
function App(){
  let style1={height:"10px",width:"20px",backgroundColor:"white"}
  return(
    <>
    <h1 style={{height:"5px",width:"1px",border:"",backgroundColor:"aqua"}}>Anything</h1>
    <p style={{height:"5px",width:"1px",border:"",backgroundColor:"aqua"}}>Everything </p>
    <p style={style1}>Lorem ipsum dolor sit amet consectetur </p>
    
    </>
  );
}
export default App;