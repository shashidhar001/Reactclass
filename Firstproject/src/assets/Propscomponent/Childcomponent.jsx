import React from 'react'

const Childcomponent = (props) => {
  return (
    <div style={{backgroundColor:`${props.bgcolor}`, height:"100px", width:"200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px", padding:"2px" }}>
       <h2 style={{color:`${props.color}`}}>{props.name}{props.city}</h2>
      
    </div>
  )
}

export default Childcomponent
