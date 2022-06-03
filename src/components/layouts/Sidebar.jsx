import React, { useContext } from 'react'
import { LogoSection, MenuSection } from "../../components"
import DashboardContext from '../../contexts/DashboardContext';
const Sidebar = () => {
  const {isActiveMenu} = useContext(DashboardContext);
  
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