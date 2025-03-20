import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";


const Layout = () => {
  return (
    <div className="layoutBody">
      <Sidebar />
      <div className="mainContent">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
