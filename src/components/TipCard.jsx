import React from "react";
import { Link } from "react-router-dom";

const TipCard = ({ id, srcImage, title, categoryType }) => {
  console.log("> img ", srcImage);
  return (
    <div className="border rounded p-3" id={id}>
      {/* <img src={srcImage} alt={srcImage} className="img-fluid" /> */}
      <h3>{title}</h3>
      <Link className="btn btn-primary" to={`/${categoryType}/${id}`}>Xem chi tiết</Link>
    </div>
  );
};

export default TipCard;
