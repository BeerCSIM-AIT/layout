import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
