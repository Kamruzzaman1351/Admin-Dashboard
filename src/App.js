import "./App.css"
import React, { useEffect, useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SettingsIconButton, Sidebar, Footer, Navbar, ThemeSettings } from "./components"
import { Dashboard, Calendar, ColorPicker, Customers, Editor, Employees, Kanban, Orders, Area, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked } from "./pages"
import DashboardContext from "./contexts/DashboardContext"


function App() {
  const {isActiveMenu, setIsActiveMenu, screenSize, setScreenSize, showSetting, setCurrentMode, 
    setCurrentColor, currentMode} = useContext(DashboardContext)
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize)
  }, []);
  useEffect(() => {
    if(screenSize <= 900) {
      setIsActiveMenu(false);
    } else {
      setIsActiveMenu(true);
    }
  }, [screenSize])
  useEffect(() => {
    setCurrentMode(localStorage.getItem("themeColor")) 
    setCurrentColor(localStorage.getItem("currentColor"))
    
  },[])
  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <SettingsIconButton />
            {isActiveMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                {/* SideBar Goes Here */}
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                {/* SideBar Goes Here */}
                <Sidebar />
              </div>
            )}
            <div className= { 
              `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
              ${isActiveMenu ? "md:ml-72 " : "flex-2"}`}>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                {/* NavBar GOes Here */}
                <Navbar />
              </div>            
              <div>
                {showSetting && <ThemeSettings />}
                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  {/* Pages  */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* APPs  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* Charts  */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
              <Footer />
              
            </div>
          </div>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App