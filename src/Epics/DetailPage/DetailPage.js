import React from "react";

import { useApiHandler } from "../../Hooks/ApiHooks";
import Capsules from "../../Components/Capsules/Capsules";
import "./DetailPage.css";
import Info from "../../Components/Info/Info";

function customScreen(type, data) {
  switch (type.toLowerCase()) {
    case "capsules":
      return data.map((each) => (
        <Capsules
          heading={each.capsule_serial}
          status={each.status}
          launch={each.original_launch}
          landings={each.landings}
          missions={each.missions}
        />
      ));
    case "cores":
      return data.map((each) => (
        <Capsules
          heading={each.core_serial}
          status={each.status}
          launch={each.original_launch}
          landings={each.rtls_landings}
          missions={each.missions}
          waterLanding={each.water_landing}
          details={each.details}
        />
      ));

      case "info":
        return (
          <Info
            name={data.name}
            founder={data.founder}
            founded={data.founded}
            employees={data.employees}
            vehicles={data.vehicles}
            headquarters={data.headquarters}
            summary={data.summary}
          />)
        
    default:
    // code block
  }
}

function DetailPage(props) {
  const data = useApiHandler(props.match.params.type);
  const type = props.match.params.type;
  if (!data) return <div>Loading....</div>;
  return (
    <div className="detailpage__main">
      <h1>{type.toUpperCase()}</h1>
      <div className="detailpage__wrap">{customScreen(type, data)}</div>
    </div>
  );
}

export default DetailPage;
