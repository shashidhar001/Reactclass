import React from 'react'

function Funcomponen4() {
  return (
    <div style={{width:"100%",height:"150px", textAlign:"center" ,backgroundColor:"cadetblue",boxShadow:"0px 0px 10px black", margin:"10px", display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
      <h1>Funcomponent 4</h1>
      <SubFunComp1/>
    </div>
  )
}
function SubFunComp1(){
    return(
        <div style={{width:"90%",height:"40px", textAlign:"center" ,backgroundColor:"orange",boxShadow:"1px 1px 10px black",display:"flex",alignItems:"center", justifyContent:"center" }}>
            <h1>Footer Fun sub component</h1>
        </div>
    );
}

export default Funcomponen4
