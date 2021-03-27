import React from "react";
import { withRouter } from "react-router-dom";

import CategoryList from "../CategoryList/CategoryList"
import "./Categories.css";

const categoriesList = [
  "Capsules",
  "Cores",
  "Dragons",
  "History",
  "Info",
  "Land Pads",
  "Launches",
  "Launch Pads",
  "Missions",
  "Payloads",
  "Rockets",
  "Roadster",
  "Ships",
];

function Categories() {

  return (
    <div className="category__wrap">
      <h2 className="category__header">Categories</h2>
      <div className="categoryList__wrap">
        {categoriesList.map((item, key) => (
          <CategoryList key={key + item} item={item}  />
        ))}
      </div>
    </div>
  );
}

export default withRouter(Categories);
