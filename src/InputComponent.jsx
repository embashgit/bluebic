import React, { Children } from 'react'
import Button from '@material-ui/core/Button';
const InputComponent=({label,labelStyle,type,name,placeholder,key,style,Icon, onIconClick})=>{
    
  return (
    <div className="formControl" key={key}>
      <label style={labelStyle} htmlFor={label}>{label}</label>
      <div id="inputLine"></div>
      <input style={style} id="textField" placeholder={placeholder}  name={name} type={type}  />
      {Icon ? <Button onClick={()=>onIconClick()} id="passwordIcon">{Icon}</Button>:''}
    </div>
  )
}

export default InputComponent
