import React, { Component } from 'react'
import Headingcomponent from './Headingcomponent'
import Navcomponent from './Navcomponent'
import Aside from './Aside'
import Maincomponent1 from './Maincomponent1'
import Footercomponent from './Footercomponent'
export default class Page extends Component {
  render() {
    return (
      <div >
        <Headingcomponent/>
        <Navcomponent/>
        <div style={{display:"flex"}}>
        <Aside/>
        <Maincomponent1/>
        </div>
        <Footercomponent/>
      </div>
    )
  }
}
