import React, {useState} from "react";
import { IoAnalytics } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineContentCopy, MdEdit } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import PropTypes from 'prop-types';

function LinkListItemComponent({data, isDetailsPage, baseUrl}) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const toggleDropdown = () => setIsOptionOpen(!isOptionOpen);
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', // abbreviated month name (e.g., Sep)
      day: '2-digit', // two-digit day
      year: '2-digit' // two-digit year
    }).format(date);
  }

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
          <a className="text-base font-medium" href={`${baseUrl}${data.urlHash}`} target="_blank" rel="noopener noreferrer">{`${baseUrl}${data.urlHash}`}</a>
          <a className="text-base font-medium" href={`${data.originalURL}`} target="_blank" rel="noopener noreferrer">
          {data.originalURL}
          </a>
          <div className="flex pt-4 space-x-4">
            <div className="flex items-center space-x-2">
              <IoAnalytics />
              <p>{data.count} Impressions</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegCalendarAlt />
              <p>{formatDate(data.createdDateTime)}</p>
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
        {
          !isDetailsPage &&
          <div  className="relative inline-block text-left">
          <button className="flex items-center space-x-2 border border-gray-300 p-2 rounded" onClick={toggleDropdown} >
             <SlOptions />
             {/* <span>Options</span> */}
           </button>
           {isOptionOpen && (
           <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
             <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
               {/* <a href="#">Details</a> */}
               <Link to={`/links/${data.urlHash}`}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Details</Link>
   
             </div>
           </div>
         )}
          </div>
        }
       
      </div>
    </div>
  );
}
LinkListItemComponent.propTypes = {
  data: PropTypes.shape({
    urlHash: PropTypes.string,
    originalURL: PropTypes.string,
    count: PropTypes.number,
    id: PropTypes.number,
    createdDateTime: PropTypes.any,
  }),
  isDetailsPage: PropTypes.bool,
  baseUrl: PropTypes.string,


};

export default LinkListItemComponent;
