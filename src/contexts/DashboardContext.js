import { createContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const intialState = {
        cart: false,
        chat: false,
        notification: false,
        userProfile: false
    };
    const [isActiveMenu, setIsActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(intialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const handleClick = (clicked) => {
        setIsClicked({...intialState, [clicked]: true})
    };
    const handleCloseSidebar = () => {
        if(isActiveMenu && screenSize <= 900) {
            setIsActiveMenu(false)
        }
    }
    return <DashboardContext.Provider value={{
        isActiveMenu,
        isClicked,
        screenSize, 
        setScreenSize,
        setIsActiveMenu,
        handleClick,
        handleCloseSidebar,
    }}>
        { children }
    </DashboardContext.Provider>
}

export default DashboardContext;