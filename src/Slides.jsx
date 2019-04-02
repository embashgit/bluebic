import React, { Component } from 'react'
const bookImg = require('../src/images/flipbook.png');
const starImg = require('../src/images/star.png');

class Slides1 extends Component {
  render() {
    return (
      <div>
          <div className="main slides">
      <div className="wrapper">
        <div className="base-shape">
          <img id="flibbook" src={bookImg} />
        </div>
        <div style={{display:'block'}}>
          <h1 id="header">Read Books</h1>
          <p className="description">Create your account to get started.
            <br/> After that,
you can share books and make friends.</p>
          <p className="bottom-text">Skip Intro</p>
        </div>
     
       
      </div>
        </div>
      </div>
    )
  }
}


export class Slides2 extends Component {
  render() {
    return (
      <div>
          <div className="main slides">
      <div className="wrapper">
        <div className="base-shape star">
          <img id="flibbook" src={starImg} />
        </div>
        <div style={{display:'block'}}>
          <h1 id="header">Review Them</h1>
          <p className="description">Create your account to get started.
            <br/> After that,
you can share books and make friends.</p>
        </div>
       
          <p className="bottom-text">Skip Intro</p>
        
      </div>
        </div>
      </div>
    )
  }
}



export default Slides1
