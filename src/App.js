import React, { Component } from 'react';
import './App.css';
import Slides1, {Slides2} from './Slides';
import Submittion from './Submittion';
import Carousel from './Carousel';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Slides2/> */}
        {/* <Submittion/> */}
        <Carousel/>
      </div>
    );
  }
}

export default App;
