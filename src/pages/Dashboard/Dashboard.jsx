import React from "react";
import DashboardDrawer from "../../components/DashboardDrawer";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex flex-row w-full z-20">
      <div className="">
        <DashboardDrawer />
      </div>
      <div className="flex-1 ">
        <div className="bg-white h-16"></div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
