import React from 'react'
import Funcomponent1 from '../components/funcomponent1'
import Funcomponent2 from '../components/Funcomponent2'
import Funcomponent3 from '../components/Funcomponent3'
import Funcomponen4 from '../components/Funcomponen4'
function Page1() {
  return (
    <div>
      <Funcomponent1 name="shashidhar" age="22"/>
      <div style={{display:"flex"}}>
     <Funcomponent2/>
     <Funcomponent3/>
     </div>
     <Funcomponen4/>
     
    </div>
  )
}

export default Page1
