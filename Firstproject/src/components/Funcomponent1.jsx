import React from 'react'

const funcomponent1 = ({name, age}) => {
  return (
    <div style={{height:"100px", width:"100%", textAlign:"center", backgroundColor:"cyan", justifyContent:"center", alignItems:"center", boxShadow:"0px 0px 10px black", margin:"10px"}}>
      <h1>Funcomponent one</h1>
      <h1>{name} {age}</h1>
      
    </div>
  )
}

export default funcomponent1
