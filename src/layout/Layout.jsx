import React from "react";
import {
    Header, 
    Footer
} from "./";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container-lg pb-48">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
