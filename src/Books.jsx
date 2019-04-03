import React, { Component } from 'react'
const search = require('../src/images/search.png');
// const starImg = require('../src/images/search.png');
class Books extends Component {
  render() {
    return (
      <div>
        <div className="cloudNav" />
        <h1 id="book-title">My Book List</h1>
        <div className="searchbox" >
        <img id="searchIcon" src={search} alt="search"/>
          <input id="bookSearchInput" placeholder="Search Books"/>
        </div>
        <div className="main fullHeight">
          <div className="book-section">
            <h1>books</h1> 
          </div>
        </div>
      </div>
    )
  }
}

export default Books
