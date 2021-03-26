import React from "react";
import { useHistory } from "react-router-dom";

import "./CategoryList.css";

const CategoryList = ({ key, item }) => {
  let history = useHistory();

  return (
    <div>
      <p
        key={key + item}
        className="categoryList__each"
        onClick={() => history.push(`/dashboard/${item.toLowerCase()}`)}
      >
        {item}
      </p>
    </div>
  );
};

export default CategoryList;
