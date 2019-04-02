import React from 'react'

const BookIcon = ({height,width}) => {
  return (
    <svg width={width+10} height={height} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.04 3V9" stroke="#384F7D" stroke-miterlimit="10"/>
    <path d="M25.0667 3H28.8267V19H1.25342V3H5.01342" stroke="#384F7D" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M17.5468 1C16.1618 1 15.0401 1.895 15.0401 3C15.0401 1.895 13.9184 1 12.5334 1H5.01343V15H12.5334C13.9184 15 15.0401 15.895 15.0401 17C15.0401 15.895 16.1618 15 17.5468 15H25.0668V1H17.5468Z" stroke="#384F7D" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
        
  )
}

export default BookIcon
