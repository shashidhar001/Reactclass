import React from 'react'

function Funcomponent2() {
  return (
    <div style={{width:"50%",height:"300px", textAlign:"center" ,backgroundColor:"yellow",boxShadow:"0px 0px 10px black", margin:"10px" }}>
      <h1>Funcomponent 2</h1>

      <div style={{display:"flex"}}>
      <SubFunComp1/>
      <SubFunComp2/>
      </div>
    </div>
  )
}
function SubFunComp1(){
    return(
<div style={{width:"50%",height:"200px", textAlign:"center" ,backgroundColor:"blue",boxShadow:"0px 0px 10px black", margin:"5px"}}>
    <h3>Fun component 1</h3>
</div>
    );
}
function SubFunComp2(){
    return(
<div style={{width:"50%",height:"200px", textAlign:"center" ,backgroundColor:"blue",boxShadow:"0px 0px 10px black", margin:"5px"}}>
    <h3>Fun component 2</h3>
</div>
    );
}
export default Funcomponent2
