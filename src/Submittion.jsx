import React, { Component } from 'react'
import HomeIcon from './images/svgIcons/Home';
import BookIcon from './images/svgIcons/BookIcon';
import StarIcon from './images/svgIcons/StarIcon';
import NotificationIcon from './images/svgIcons/NotificationIcon';


const markImg = require('../src/images/mark.png');
export const iconSize={
    height:25,
    width:25,
}
class Submittion extends Component {
  render() {
    return (
      <div>
          <div className="main">
            <div className="wrapper submit">
            <div id="navbar">
            <ul>
                <li id="Timeline">
                <HomeIcon height={iconSize.height} width={iconSize.width}/>
                <p id="timelinelabel" className='label'>Timeline</p>
                </li>
                <li id="books">
                <BookIcon height={iconSize.height} width={iconSize.width}/>
                <p  id="booklabel" className='label'>My Books</p>
                </li>
                <li id="reviews">
                <StarIcon height={iconSize.height} width={iconSize.width}/>
                <p id="revewlabel" className='label'>Add Reviews</p>
                </li>
                <li id="notifications">
                <NotificationIcon height={iconSize.height} width={iconSize.width}/>
                <p id="notlabel" className='label'>Notifications</p>
                </li>
            </ul>

            </div>
            <div className="base-mark-circle">
          <img id="mark" src={markImg} />
        </div>
        <div style={{display:'block'}}>
          <h1 id="header">Thank you!</h1>
          <p style={{color: 'rgba(56, 79, 125, 0.8)'}} className="description">You have submitted your first book <br/>review.
Now it’s time to make some friends.</p>
        <div className="button-section">
            <button id="button">
                Add Friends
            </button>
        </div>
        <div className="wish-item-section">
            <h3 id="interested-items">YOU MAY ALSO BE INTERESED IN:</h3>
            <div className="wish-item">
                <div className="itemSection">
                    <div id="img1" className="backImage">
                    <img id="rail" src={require('./images/rail.png')}/>
                    </div>
                    <p><strong>The Wastelands</strong></p>
                    <p>Stephen King</p>
                </div>
                <div className="itemSection">
                <div id="img2" className="backImage">
                <img id="dish" src={require('./images/dish.png')}/>
                </div>
                <p><strong>Eat Awesome</strong></p>
                <p>Paul Jarvis</p>
                </div>
                <div className="itemSection">
                <div id="img3" className="backImage">
                <img id="scar" src={require('./images/scar.png')}/>
                </div>
                <p><strong>Scar Tissue</strong></p>
                <p>Anthony Kiedis</p>
                </div>
            </div>
        </div>
        </div>
            </div>
          </div>

      </div>
    )
  }
}

export default Submittion
