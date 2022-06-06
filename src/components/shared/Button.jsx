import React from 'react'
import PropTypes from "prop-types"

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  const btnStyle = {
    backgroundColor: bgColor,
    color,
    borderRadius, 
  };

  return (    
    <button
      type="button"
      style={btnStyle}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}
Button.defaultProps = {
  color:"white",
  bgColor:"blue",
  text:"Button",
  borderRadius:"10px",
  size:"md"
}
Button.propTypes = {
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default Button