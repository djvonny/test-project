import React from "react";
import Header from "./header";

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DashboardLayout;
