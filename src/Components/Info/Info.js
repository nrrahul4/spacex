import React from "react";

export default function Info(props) {
  return (
    <div style={{textAlign: "center"}}>
      <h2>{props.name}</h2>
      <h4>Founder: {props.founder}</h4>
      <p>Founded on: {props.founded}</p>
      <p>No of employees: {props.employees}</p>
      <p>Vehicles: {props.vehicles}</p>
      <p>
        Headquarters:{" "}
        {props.headquarters.address +
          "," +
          props.headquarters.city +
          "," +
          props.headquarters.state}
        `
      </p>
      <p>{props.summary}</p>
    </div>
  );
}
