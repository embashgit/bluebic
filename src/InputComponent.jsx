import React, { Children } from 'react'

const InputComponent=({label,labelStyle,type,name,placeholder,key,style,Icon})=>{
    
  return (
    <div className="formControl" key={key}>
      <label style={labelStyle} htmlFor={label}>{label}</label>
      <div id="inputLine"></div>
      <input style={style} id="textField" placeholder={placeholder} name={name} type={type}  />
      {Icon ? <span id="passwordIcon">{Icon}</span>:''}
    </div>
  )
}

export default InputComponent
