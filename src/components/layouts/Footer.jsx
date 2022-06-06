import React, {useContext} from 'react'
import DashboardContext from '../../contexts/DashboardContext'


const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { currentColor } = useContext(DashboardContext)
  return (
    <div className="mt-24 border-t-1 border-color"
      style={{
        backgroundColor: currentColor
      }}
    >
      <p className="text-white text-center py-10">
        © {currentYear} All rights reserved.
      </p>
    </div>
  )
}

export default Footer