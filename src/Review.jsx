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
import HomeIcon from './images/svgIcons/Home';
import BookIcon from './images/svgIcons/BookIcon';
import StarIcon from './images/svgIcons/StarIcon';
import NotificationIcon from './images/svgIcons/NotificationIcon';
import { sideList } from './Books';
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

const search = require('../src/images/search.png');
// const starImg = require('../src/images/search.png');

const remoteJob = require('./images/remote.png');
const movie1 = require('./images/stephen.png');
const soldout = require('./images/soldout.png')
const likes = require('./images/likes.png');
const unlike = require('./images/unlike.png');
const menu =require('./images/icons-menu.png');

class Review extends Component {
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


    
// const sideList = (
//   <div className={classes.list}>
//     <List>
//       {['TimeLine', 'My Books', 'Accout', 'Review'].map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
      
//     </List>
//   </div>
// );
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
        <h1 id="book-title">Add Book Review</h1>
        <div style={{height:'100%'}} className="main fullHeight">
          <div className="book-section review-sec">

          <div className="cardSection pos">
              <div  className="cards card-outline">
                <img  className="card-item" src={soldout} alt="sold-mage" />
                <div  className="desc card-item">
                  <h3  className="card-title lg" >Pet Sematary</h3>
                  <p>Jason Fried</p>
                  <h3><img src={likes} alt="fav-image" /><span> 5.49</span></h3>
                  <p>2,464 reviews</p>
                </div>
              </div>
          </div>


          <div className="item-des">
            <p>Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, it all seems too good to be true: physician father, beautiful wife, charming little daughter, adorable infant son -- and now an idyllic home....</p>
            <h3 className="item-footer">
            Full Synopsis
            </h3>
            <hr/>
            <h3 style={{marginTop:'10px', padding:'10px',textAlign:'left'}}>TAP TO ADD RATING</h3>
            <div style={{margin:20,alignSelf:'center',margin:'auto'}}>
            <img class src={likes} className="rating" alt="ratings" />
            <img src={likes} className="rating" alt="ratings" />
            <img src={likes} className="rating" alt="ratings" />
            <img src={likes} className="rating" alt="ratings" />
            <img src={unlike} className="rating" alt="ratings" />
            </div>
          </div> 
          <div style={{marginBottom:50}}>
            <button style={{width:'60%', marginTop:'30px'}} id="button">NEXT</button>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(Review);
