import React from "react";

import "./Capsules.css";

function Capsules(props) {
  return (
    <div className="capsule__mainwrap">
    <div className="capsule__wrap">
      <div className="capsule__main">
        <h2>{props.heading}</h2>
        <p>Status: {props.status}</p>
        <p>
          Launch: {props.original_launch ? props.original_launch : "no launch"}
        </p>
        <span>Landings: {props.landings}</span>
      </div>
      <div>
        <span>Missions: </span>
        {props.missions.length > 0 ? (
          props.missions.map((mission) => <span>{mission.name}, </span>)
        ) : (
          <span>No Missions</span>
        )}
        <p>Water Landing: {props.waterLanding? "Yes": "No"}</p>
      </div>
      
    </div>
    <p>{props.details}</p>
    </div>
  );
}

export default Capsules;
