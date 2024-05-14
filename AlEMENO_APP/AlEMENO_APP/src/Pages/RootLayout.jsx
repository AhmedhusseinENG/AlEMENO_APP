import React from "react";
import { Outlet } from "react-router-dom"; 
import Header from "../Components/Header.jsx";
function RootLayout() {
  return (
    <div className="root-layout">  
    <Header/>
        <Outlet /> 
     
    </div>
  );
}

export default RootLayout;