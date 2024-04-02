import React from "react";
import LinkListItemComponent from "../../components/LinkListItemComponent";
import LinkStatsComponent from "./coponents/LinkStatsComponent";
import QrCodeComponent from "../../components/QrCodeComponent";
import LinkEngagementLocationsComponent from "../../components/LinkEngagementLocationsComponent";
import EngagementsBarGraph from "../../components/EngagementsBarGraph";
import { useNavigate } from 'react-router-dom';

function LinkDetailsPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Moves one step back in the history stack
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <button onClick={goBack} className="px-2 py-2 text-indigo-500 bg-white rounded-md w-fit">Back</button>
      <div className="md:col-span-3">
        <LinkListItemComponent />
      </div>
      <div className="flex md:flex-row flex-col justify-between md:col-span-3 gap-4">
        <div className="flex-1">
          <LinkStatsComponent data={{ title: "Engagements", value: 200 }} />
        </div>
        <div className="flex-1">
          <LinkStatsComponent data={{ title: "Last 7 Days", value: 200 }} />
        </div>
        <div className="flex-1">
          <LinkStatsComponent data={{ title: "Weekly Change", value: "70%" }} />
        </div>
      </div>
      <div className="md:col-span-3">
        <QrCodeComponent></QrCodeComponent>
      </div>
      <div className="md:col-span-3">
        <EngagementsBarGraph />
      </div>
      <div className="md:col-span-3">
        <LinkEngagementLocationsComponent />
      </div>
    </div>
  );
}

export default LinkDetailsPage;
