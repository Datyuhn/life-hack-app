import React from "react";
import categories from "../categories";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="my-4 container">
      <h3>Danh mục</h3>
      <ul>
        {categories.map((category) => (
          <li className="list-group-item" key={category.id}>
            <Link
              className="list-group-item"
              to={`/category/${category.categoryType}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
