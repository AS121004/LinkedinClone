import Navbar from "./Navbar.jsx";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
};
export default Layout;
