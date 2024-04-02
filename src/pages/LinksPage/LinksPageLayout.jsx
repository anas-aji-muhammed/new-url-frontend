import React from "react";
import { Outlet } from "react-router-dom";

function LinksPageLayout() {
  return (
    <div className="flex mt-24 justify-center items-center m-auto max-w-screen-xl ">
      <Outlet />
    </div>
  );
}

export default LinksPageLayout;
