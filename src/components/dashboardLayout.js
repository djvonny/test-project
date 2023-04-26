import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./navbar";
import Header from "./header";

function DashboardLayout({ children }) {
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
