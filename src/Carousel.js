import React, { Component } from 'react'
import AutoRotatingCarousel from './AutoRotatingCarousel'
import Slide from './Slide';
import Slides1, { Slides2 } from './Slides';
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

class Carousel extends Component {
  constructor(props){
      super(props)
      this.state={
          open:true,
      }
  }
  render() {
    return (
      <div>
<div style={{ position: 'relative', width: '100%', height: 500 }}>
  {/* <Button onClick={() => this.setState({ open: true })}>Open carousel</Button> */}
  <AutoRotatingCarousel
   label='View Task'
mobile={true}
    open={this.state.open}
    // onClose={() => this.setState({ open: false })}
    // onStart={() => this.setState({ open: false })}

  >
    <Slides1/>
    <Slides2/>
    <Slides1/>
  </AutoRotatingCarousel>
</div>
      </div>
    )
  }
}

export default Carousel
