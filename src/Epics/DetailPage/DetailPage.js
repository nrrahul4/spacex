import React from "react";

import { useApiHandler } from "../../Hooks/ApiHooks";
import Capsules from "../../Components/Capsules/Capsules";
import './DetailPage.css'

function customScreen(type, data) {
  switch (type.toLowerCase()) {
    case "capsules":
      return <Capsules data={data} />;
    case "":
      // code block
      break;
    default:
    // code block
  }
}

function DetailPage(props) {
  const data = useApiHandler(props.match.params.type);
  const type = props.match.params.type;
  if (!data) return <div>Loading....</div>;
  return (
    <div>
      <h1>{type.toUpperCase()}</h1>
      <div className="detailpage__wrap">
      {customScreen(type, data)}
      </div>
    </div>
  );
}

export default DetailPage;
