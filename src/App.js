import React, { Component } from 'react';
import './App.css';
import Slides1, {Slides2} from './Slides';
import Submittion from './Submittion';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Slides2/> */}

        <Submittion/>
      </div>
    );
  }
}

export default App;
