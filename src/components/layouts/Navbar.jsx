import React, { useContext } from 'react'
import DashboardContext from '../../contexts/DashboardContext'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {NavButton} from "../"
import avatar from "../assets/imgs/avatar.jpg";
const Navbar = () => {
  const {isActiveMenu, setIsActiveMenu} = useContext(DashboardContext);
  const handleActiveMenu = () => setIsActiveMenu(!isActiveMenu)
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton 
        title="Menu" 
        customFunc={handleActiveMenu} 
        color="blue" 
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton 
          title="Cart" 
          customFunc={() => handleClick("cart")} 
          color="blue" 
          icon={<FiShoppingCart />}
        />
        <NavButton 
          title="Chat" 
          customFunc={() => handleClick("chat")} 
          color="blue" 
          icon={<BsChatLeft />}
          dotColor="#03C9D7" 
        />
        <NavButton 
          title="Notification" 
          customFunc={() => handleClick("notification")} 
          color="blue" 
          icon={<RiNotification3Line />}
          dotColor="rgb(254, 201, 15)" 
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Kamruzzaman
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default Navbar