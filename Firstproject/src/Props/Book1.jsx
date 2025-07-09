import React, { Component } from 'react'
import Book2 from './Book2'

export default class Book1 extends Component {
    style={ border: "2px solid black", color: "green" }
  render() {
    return (

        <Book2 imageurl="../images/bg-cars.jpg" Bookname="Car Book" Author="John Doe" style={this.style} />

    )
  }
}
