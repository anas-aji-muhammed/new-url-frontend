import React from "react";
import { IoAnalytics } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineContentCopy, MdEdit } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

function LinkListItemComponent() {
  return (
    <div className="w-full flex flex-row bg-white p-8 justify-between mb-3">
      <div className="flex flex-row overflow-hidden transition-width duration-300 ease">
        <img
          src="https://img.logoipsum.com/296.svg"
          style={{ width: "28px", height: "36px", objectFit: "contain" }}
          alt="Logo"
        />
        <div className="flex flex-col pl-4 gap-2">
          <h1 className="text-lg font-bold">Anas Aji Muhammed</h1>
          <p className="text-base font-medium">https://bit.ly/3RkhxEj</p>
          <p className="text-base font-medium">
            https://portfolio-omega-seven-38.vercel.app/
          </p>
          <div className="flex pt-4 space-x-4">
            <div className="flex items-center space-x-2">
              <IoAnalytics />
              <p>Impressions</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegCalendarAlt />
              <p>Sep 15, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <button className="flex items-center space-x-2 border border-gray-300 p-2 rounded">
          <MdOutlineContentCopy />
          <span className="text-xs font-semibold">Copy</span>
        </button>

        <button className="flex items-center space-x-2 border border-gray-300 p-2 rounded">
          <MdEdit />
          {/* <span>Edit</span> */}
        </button>
        <button className="flex items-center space-x-2 border border-gray-300 p-2 rounded">
          <SlOptions />
          {/* <span>Options</span> */}
        </button>
      </div>
    </div>
  );
}

export default LinkListItemComponent;
