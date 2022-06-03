import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { DashboardProvider } from "./contexts/DashboardContext"

ReactDOM.render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>    
  </React.StrictMode>,
  document.getElementById('root'),
);