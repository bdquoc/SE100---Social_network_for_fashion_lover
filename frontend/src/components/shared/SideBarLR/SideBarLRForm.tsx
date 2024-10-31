import React from "react";
import { Grid2, Paper } from "@mui/material";
import SideBar from "../../sideBar/SideBar";
import SideBar_Right from "../../sideBar/SideBarRight/SideBarRight";

interface ExploreCenterPage {
  children?: React.ReactNode; // Khai báo kiểu cho children
}

const ExplorePage: React.FC<ExploreCenterPage> = ({ children }) => {
  return (
    <Grid2 container sx={{ height: "100vh", overflowY: "auto" }}>
      <Grid2
        size={2.5}
        sx={{ display: "inline-block", justifyContent: "flex-start" }}
      >
        <Paper>
          <SideBar />
        </Paper>
      </Grid2>
      <Grid2
        size={7}
        sx={{ display: "inline-block", justifyContent: "center" }}
      >
        <Paper>{children}</Paper>
      </Grid2>
      <Grid2
        size={2.5}
        sx={{ display: "inline-block", justifyContent: "flex-end" }}
      >
        <Paper>
          <SideBar_Right />
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default ExplorePage;
