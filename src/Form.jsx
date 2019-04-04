import React, { Component } from 'react'
import "circular-std";
import BolbIcon from './images/svgIcons/BolbIcon';
import InputComponent from './InputComponent';
import HomeIcon from './images/svgIcons/Home';
import BookIcon from './images/svgIcons/BookIcon';
import StarIcon from './images/svgIcons/StarIcon';
import NotificationIcon from './images/svgIcons/NotificationIcon';
import {Link} from 'react-router-dom';
import { sideItems } from './Submittion';

 const iconSize={
  height:25,
  width:25,
}
const visibility =require('./images/password.png');
class Form extends Component {

constructor(props){
  super(props)
this.state={
  vissible:false,
}
}

togglePassword = () => {
 
  this.setState(state => ({ vissible: !this.state.vissible }));
 
};

  render() {
    return (
      <div id="finvite">
        {sideItems}
        <div style={{paddingTop:25}} className="main fullHeight">
          <div className="wrapper">
            <div id="Skyball" />
            <div id="skyball2" />
            <div className='bulbSection'>
              <BolbIcon height="70" width="70" color="#fff" />
            </div>
            <div style={{ display: 'block' }}>
              <h1 style={{ fontSize: 30 }} id="header">Welcome!</h1>
              <p style={{ marginBottom: 10 }} className="description">Create your account to get started.<br /> After that,
you can share books and make friends.</p>
            </div>
            <div className='formSection'>
             <InputComponent name="Email" type="email" key="email"
             labelStyle={{top:-15}}
              label="Email" placeholder="email@bluebic.com"/>
              <InputComponent type={this.state.vissible ? 'password':'text'} onIconClick={this.togglePassword} Icon={<img src={visibility} />} name="password" 
              label="Password"key="password" placeholder="Enter Password"
              />

    <InputComponent  type={this.state.vissible ? 'password':'text'} onIconClick={this.togglePassword} Icon={<img src={visibility}/>} name="password" 
              label="Type Password Again" key="confirmpassword"  placeholder="Re-Type Password"
              />

              <button style={{width:'100%',padding:'1em', marginTop:20,marginLeft:10}} id="button"><Link to="/mybooks" style={{textDecoration:'none',color:'#fff'}} >Sign Up</Link></button>
              <p id="info">Already have an account? Login   </p>
            </div>

          

          </div>
        </div>
      </div>
    )
  }
}

export default Form
