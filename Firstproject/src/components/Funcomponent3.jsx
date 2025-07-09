import React from 'react'

function Funcomponent3() {
  return (
    <div style={{width:"50%",height:"300px", textAlign:"center" ,backgroundColor:"gray",boxShadow:"0px 0px 10px black", margin:"10px" }}>
      <h1>Funcomponent 3</h1>
        <Funcomponent1/>
      <div style={{display:"flex"}}>
        <Subfuncomp3/>
        <Subfuncomp4/>
      </div>
    </div>
  )
}
function Funcomponent1(){
    return(
        <div style={{width:"100%",height:"50px", textAlign:"center" ,backgroundColor:"yellow",boxShadow:"0px 0px 10px black", margin:"5px"}}>
            <h1>Funcomponent 1</h1>
        </div>
    );
}
function Subfuncomp3(){
    return(
<div style={{width:"50%",height:"150px", textAlign:"center" ,backgroundColor:"orange",boxShadow:"0px 0px 10px black", margin:"5px"}}>
    <h3>Fun component 1</h3>
</div>
    );
}
function Subfuncomp4(){
    return(
<div style={{width:"50%",height:"150px", textAlign:"center" ,backgroundColor:"orange",boxShadow:"0px 0px 10px black", margin:"5px"}}>
    <h3>Fun component 1</h3>
</div>
    );
}
export default Funcomponent3
