import React, { useEffect, useState } from "react";
import LinkListItemComponent from "../../components/LinkListItemComponent";
import { Link, Outlet } from "react-router-dom";
import { fetchAllLinks } from "../../services/apiService";

function LinksPage() {
  const [allLinks, setAAllLinks] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const itemsData = await fetchAllLinks();
        setAAllLinks(itemsData.urlData);
      } catch (error) {
        // Handle the error
      }
    };

    getItems();
  }, []);
  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className="flex flex-row justify-between w-full mb-2">
        <h1 className="text-3xl font-bold	">Links</h1>
        <Link
          className="bg-indigo-800 text-indigo-100 pl-4  pt-2 pr-4 pb-2 font-semibold "
          to={"create-link"}
        >
          Create
        </Link>
      </div>
        {
          allLinks.map(
            link => (<LinkListItemComponent key={link.id}  data={link} isDetailsPage={false}/>)
          )
        }
      
    </div>
  );
}

export default LinksPage;
