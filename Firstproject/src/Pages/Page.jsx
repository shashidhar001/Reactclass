import React from 'react'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import Maincomponent from '../components/Maincomponent'
import Navcomponent from '../components/Navcomponent'
import Heading from '../components/heading'
function Page() {
  return (
    <div>
    <Heading/>
    <Navcomponent/>
    <div style={{display:"flex"}}>
    <Aside/>
    <Maincomponent/>
    </div>
    <Footer/> 
    </div>
  )
}

export default Page
