import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-container">
<div className='loader'>
    <Loader
    type="Puff"
    color="#00BFFF"
    height="50"
    width="50"
 />
 </div>
</div>
      </div>
    )
  }
}

export default Spinner
