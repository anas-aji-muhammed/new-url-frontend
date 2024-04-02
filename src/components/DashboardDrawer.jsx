// import React from "react";
import { NavLink } from "react-router-dom";
import React, { useContext, createContext, useState } from "react";
import { FaLink } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

const SidebarContext = createContext();

export default function DashboardDrawer() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="fixed h-full top-0 left-0 border-r shadow-sm  bg-white">
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className="logo-wrapper"
            style={{
              width: expanded ? "128px" : "28px",
              height: "36px",
              overflow: "hidden",
              transition: "width 0.3s ease",
            }}
          >
            <img
              src={
                expanded
                  ? "https://img.logoipsum.com/297.svg"
                  : "https://img.logoipsum.com/296.svg"
              }
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="Logo"
            />
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 w-fit right-0 "
          >
            {expanded ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </button>
        </div>
   
          {/* <button
      onClick={() => setExpanded((curr) => !curr)}
      className="absolute top-16 right-0 transform -translate-y-1/2 -translate-x-1/2 p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 z-10 transition-transform duration-300"
    >
      {expanded ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </button> */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 flex flex-col">
            <SidebarItem
              icon={<FaLink size="18"/>}
              text={"Links"}
              alert={"links"}
              to={"/links"}
            />
            <SidebarItem
              icon={<TbDeviceAnalytics size="18" />}
              text={"Analytics"}
              alert={"analytics"}
              to={"/analytics"}
            />
          </ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
export function SidebarItem({ icon, text, to, alert }) {
  const { expanded } = useContext(SidebarContext);
  // Style function using isActive for dynamic styling
  const activeLinkStyle = ({ isActive }) => ({
    borderLeft: isActive ? "4px solid blue" : "none",
    paddingLeft: isActive ? "1rem" : "1.25rem",
  });
  const getNavLinkClass = ({ isActive }) =>
    `transition-colors group ${
      isActive
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
        : "hover:bg-indigo-50 text-gray-600"
    }`;
  return (
    <NavLink to={to} style={activeLinkStyle} className={getNavLinkClass}>
      <li
        className={`
          relative flex items-center py-2 px-1 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
      `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {/* {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )} */}

        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </li>
    </NavLink>
  );
}
