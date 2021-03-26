import React from "react";

import './Capsules.css'

function Capsules(props) {
  console.log(props, "props");
  return props.data.map((each) => {
    return (
      <div className="capsule__wrap">
        <div className="capsule__main">
          <h2>{each.capsule_serial}</h2>
          <p>Status: {each.status}</p>
          <p>Launch: {each.original_launch ? each.original_launch : 'no launch'}</p>
          <span>Landings: {each.landings}</span>
        </div>
        <div>
          <span>Missions:{" "}</span>
          {each.missions.length > 0 ? (
            each.missions.map((mission) => <span>{mission.name}, </span>)
          ) : (
            <span>No Missions</span>
          )}
        </div>
      </div>
    );
  });
}

export default Capsules;
