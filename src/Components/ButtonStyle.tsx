import React from 'react'
type buttonProps = {
    btnStyle : React.CSSProperties
}
const ButtonStyle = (props:buttonProps) => {
  return (
    <div style={props.btnStyle}>ButtonStyle</div>
  )
}

export default ButtonStyle