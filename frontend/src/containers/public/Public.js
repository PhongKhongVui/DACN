import React from "react";
import { Outlet } from "react-router-dom";
import { Player, Sidebar } from "../../components";

const Public = () => {
  return (
    <div style={{ backgroundImage: 'url(../../assets/logo-light.svg)' }} className="w-full min-h-screen flex flex-col bg-[#CED9D9] ">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] min-h-screen flex-none border border-blue-100">
          <Sidebar />
        </div>

        <div className="flex-auto border border-red-600">
          <Outlet />
        </div>
      </div>

        <div className="flex-none h-[90px]">
            <Player />
        </div>

    </div>
  );
};

export default Public;
