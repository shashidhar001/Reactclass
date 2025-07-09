import React from 'react'
import Childcomponent from './Childcomponent'
const Parentcomponent = () => {
     
  return (
    <div>
      <>
      <Childcomponent bgcolor="blue" textcolor="black" name="My name is ajay" city=" i'm in banglore"  />
      <Childcomponent bgcolor="yellow" textcolor="blue" name="My name is raman" city=" i'm in mysore"  />
      <Childcomponent bgcolor="cyan" textcolor="black" name="My name is shravan" city=" i'm in tumkur"  />
      </>
    </div>
  )
}

export default Parentcomponent
