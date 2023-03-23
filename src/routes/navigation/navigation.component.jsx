import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container mx-auto  min-h-screen">
      {/* navigation */}
      <div
        className="px-6 py-2 mb-4 drop-shadow-md  border-b-[1px] border-b-[#4a4a4a83]
        rounded-b-lg flex justify-between items-center"
      >
        <Link to="/">
          <div className="">
            <span className="text-6xl text-rose-500 font-extrabold ">P</span>
            <span className="text-3xl text-amber-400">sonio.</span>
          </div>
        </Link>
        {/* links container */}
        <Link
          className="px-4 py-2 border rounded-lg bg-rose-400 transition-all duration-300 hover:bg-rose-600 hover:-translate-y-[2px] hover:text-white"
          to="/auth"
        >
          Sign In
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
