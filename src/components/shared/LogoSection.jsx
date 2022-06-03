import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { SiShopware } from "react-icons/si"
import { MdOutlineCancel } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import DashboardContext from '../../contexts/DashboardContext'
const LogoSection = () => {
    const {setIsActiveMenu} = useContext(DashboardContext);
  return (
    <div className="flex justify-between items-center">
        <Link to="/" 
            onClick={() =>{}}
            className="items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware className=""/>
            <span>Dashboard</span>
        </Link>
        <TooltipComponent content="Menu" position="BottomCenter">
            <button
                type="button"
                onClick={() => {setIsActiveMenu(false)}}
                style={{}}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
            >
                <MdOutlineCancel />
            </button>
        </TooltipComponent>
    </div>
  )
}

export default LogoSection