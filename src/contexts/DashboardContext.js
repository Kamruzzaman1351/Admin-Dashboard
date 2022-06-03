import { createContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [isActiveMenu, setIsActiveMenu] = useState(true)

    return <DashboardContext.Provider value={{
        isActiveMenu,
        setIsActiveMenu,
    }}>
        { children }
    </DashboardContext.Provider>
}

export default DashboardContext;