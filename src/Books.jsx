import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';
import HomeIcon from './images/svgIcons/Home';
import BookIcon from './images/svgIcons/BookIcon';
import StarIcon from './images/svgIcons/StarIcon';
import NotificationIcon from './images/svgIcons/NotificationIcon';


const styles = {
  paper:{
    background: 'linear-gradient(315deg, rgba(255, 255, 255, 0.61) 3.5%, rgba(121, 171, 252, 0.61) 93.61%, rgba(96, 108, 255, 0.61) 147.83%),'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

};
export  const sideList = (
  <div style={{width:250}}>
 
    <List>
      <Link to="/" className="link" >
      <ListItem button >
      <ListItemIcon>
        <HomeIcon height={25} width={25}/>
      </ListItemIcon>
      <ListItemText >Home</ListItemText >
      </ListItem>
      </Link>
    </List>

    <List>
    <Link  className="link" to="/mybooks">
      <ListItem button >
      <ListItemIcon>
        <BookIcon height={25} width={25}/>
      </ListItemIcon>
      <ListItemText >My Books</ListItemText >
      </ListItem>
      </Link >
    </List>

    <List>
    <Link  className="link" to="/signup">
      <ListItem button >
      <ListItemIcon>
      <img src={require('./images/user.png')} height={25} width={25} />
      </ListItemIcon>
      <ListItemText >Account</ListItemText >
      </ListItem>
      </Link >
    </List>

      
    <List>
    <Link  className="link" to="/invite">
      <ListItem button >
      <ListItemIcon>
      <img src={require('./images/invitation.png')} height={25} width={25} />
      </ListItemIcon>
      <ListItemText >Invite</ListItemText >
      </ListItem>
      </Link >
    </List>

    <List>
    <Link  className="link" to="/review">
      <ListItem button >
      <ListItemIcon>
        <StarIcon height={25} width={25}/>
      </ListItemIcon>
      <ListItemText >Review</ListItemText >
      </ListItem>
      </Link >
    </List>

    <List>
      <ListItem button >
      <ListItemIcon>
        <NotificationIcon height={25} width={25}/>
      </ListItemIcon>
      <ListItemText >NotificationIcon</ListItemText >
      </ListItem>
    </List>
    

  </div>
);


const search = require('../src/images/search.png');
// const starImg = require('../src/images/search.png');

const remoteJob = require('./images/remote.png');
const movie1 = require('./images/stephen.png');
const movie2 = require('./images/movie-king.png')
const likes = require('./images/likes.png');
const unlike = require('./images/unlike.png');
const menu =require('./images/icons-menu.png');

class Books extends Component {
  constructor(props){
    super(props)
    this.state={
      SidebarVisibility:false,
    }
  }

  toggleDrawer = () => {
    this.setState(state => ({ SidebarVisibility: !this.state.SidebarVisibility }));
  };
 
  render() {
    const {classes} = this.props

    return (
      <div>
         <Drawer  open={this.state.SidebarVisibility} onClose={this.toggleDrawer}>
          <div
          className='drawer'
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
        <div className="cloudNav" />
        <div className="menu">
        <Button onClick={()=>this.toggleDrawer(true)}>
          <img  src={menu} height="20px" width="20px" alt="menu" />
        </Button>
        </div>
        <h1 id="book-title">My Book List</h1>
        <div className="searchbox" >
        
          <img id="searchIcon" src={search} alt="search" />
          <input id="bookSearchInput" placeholder="Search Books" />
        </div>
        <div className="main fullHeight">
          <div className="book-section">
            <p id="mybooksheader">BOOKS REVIEWED BY YOU</p>
            <div className="cardSection">
              <div className="cards">
                <img  className="card-item" src={remoteJob} alt="remoteJob-image" />
                <div  className="desc card-item">
                <h3 id="card-title">Not Remote: Full Time<br/> Required</h3>
                  <p>Jason Fried</p>
                  <img src={likes} alt="fav-image" />
                  <img src={likes} alt="fav-image" />
                  <img src={likes} alt="fav-image" />
                  <img src={likes} alt="fav-image" />
                  <img src={likes} alt="fav-image" />
                </div>
              </div>
              <div className="cards">
                <img  className="card-item" src={movie1} alt="movie-image" />
                <div  className="desc card-item">
                <h3 id="card-title">Full time: Remote Not<br/> Required</h3>
                  <p>Henri Charriere</p>
                  <img src={likes} alt="fav-image" />
                  <img src={likes} alt="fav-image" />
                  <img src={likes} alt="fav-image" />
                  <img src={unlike} alt="unfav-image" />
                  <img src={unlike} alt="unfav-image" />
                </div>
              </div>
              <div className="cards">
                <img src={movie2} alt="movie-image2" />
                <div  className="desc card-item">
                <h3 id="card-title">The Dark Tower<br/>The Gun Slinger</h3>
                  <p>Stephen Kings</p>
                  <img src={likes} alt="fav-image" />
                  <img src={likes} alt="fav-image" />
                  <img src={unlike} alt="fav-image" />
                  <img src={unlike} alt="unfav-image" />
                  <img src={unlike} alt="unfav-image" />
                </div>
                <div>

                </div>
              </div>
            </div>
            <div style={{marginBottom:50}}>
              <button style={{width:'70%', marginTop:'5%'}} id="button">
              Add Book Review
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Books)
