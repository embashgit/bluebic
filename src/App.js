import React, { Component } from 'react';
import "circular-std";
import './App.css';
import './styles/Form.css';
import Slides1, {Slides2} from './Slides';
import Submittion from './Submittion';
import Carousel from './Carousel';
import Form from './Form';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Slides2/> */}
        {/* <Submittion/> */}
        <Carousel/>
        {/* <Form/> */}
      </div>
    );
  }
}

export default App;
