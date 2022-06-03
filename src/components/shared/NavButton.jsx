import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import PropTypes from "prop-types"


const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={customFunc}
            style={{color}}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"    
        >
            <span style={{background: dotColor}}
                className="absolute text-xl inline-flex rounded-full h-2 w-2 right-2 top-2"    
            />
            {icon} 
        </button>
    </TooltipComponent>
  )
}

NavButton.propTypes = {
  title: PropTypes.string.isRequired, 
  customFunc: PropTypes.func.isRequired, 
  icon: PropTypes.any, 
  color: PropTypes.string, 
  dotColor: PropTypes.string,
}
export default NavButton