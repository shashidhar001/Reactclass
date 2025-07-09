import React, { Component } from 'react'

export default class Book2 extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageurl} alt="no image" style={{height:"300px", width:"300px"}} />
        <div style={{ height:"100px",color:this.props.style.color, border:this.props.style.border}}>
        <h1>The book name is {this.props.bookname}</h1>
        <p>The author of the book is {this.props.author}</p>
        </div>
      </div>
    )
  }
}
