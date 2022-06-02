import React from 'react'
import { LogoSection, MenuSection } from "../../components"

const Sidebar = () => {
  const isActiveMenu = true;
  
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {isActiveMenu && (
        <>
          {/* Logo */}
          <LogoSection />
          {/* Menu */}
          <MenuSection />
        </>
      )}
    </div>
  )
}

export default Sidebar