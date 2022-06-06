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
    const [showSetting, setShowSetting] = useState(false);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const handleClick = (clicked) => {
        setIsClicked({...intialState, [clicked]: true})
    };
    const handleClickClose = (clicked) => {
        setIsClicked({...intialState, [clicked]: false})
    };
    const handleCloseSidebar = () => {
        if(isActiveMenu && screenSize <= 900) {
            setIsActiveMenu(false)
        }
    }
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeColor", e.target.value)
        setShowSetting(false)
    }
    const setColor = (value) => {
        setCurrentColor(value);
        localStorage.setItem("currentColor", value)
        setShowSetting(false)
    }



    return <DashboardContext.Provider value={{
        isActiveMenu,
        isClicked,
        screenSize,
        showSetting,
        currentColor,
        currentMode,
        setMode, 
        setColor,
        setCurrentMode, 
        setCurrentColor, 
        setShowSetting, 
        setScreenSize,
        setIsActiveMenu,
        handleClick,
        handleCloseSidebar,
        handleClickClose,
    }}>
        { children }
    </DashboardContext.Provider>
}

export default DashboardContext;