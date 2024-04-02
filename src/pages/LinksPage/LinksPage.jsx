import React from "react";
import LinkListItemComponent from "../../components/LinkListItemComponent";
import { Link } from "react-router-dom";


function LinksPage() {
  return (
    <div className="flex mt-24 justify-center items-center m-auto max-w-screen-xl ">
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-row justify-between w-full mb-2">
        <h1 className="text-3xl font-bold	">Links</h1>
        <Link className="bg-indigo-800 text-indigo-100 pl-4  pt-2 pr-4 pb-2 font-semibold " to={"create"}>
            Create
            </Link>
        </div>
        
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
       <LinkListItemComponent/>
    </div>
    </div>
  );
}

export default LinksPage;
