import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ cart, cartCount }) => {
  return (
    <div>
      <div className="layout-header">
        <Navbar cart={cart} cartCount={cartCount} />
        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
