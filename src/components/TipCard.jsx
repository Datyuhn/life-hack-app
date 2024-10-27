import React from "react";
import { Link } from "react-router-dom";
import "../styles/TipCard.css";

const TipCard = ({ id, srcImage, title, categoryType, isFavourite }) => {
  console.log("> img ", srcImage);
  return (
    <div className="card tip-card" id={id}>
      <img
        className="card-img-top tip-card-img"
        src={srcImage}
        alt={srcImage}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="card-title">{title}</h6>
        <div className="d-flex justify-content-between">
          <Link
            className="btn btn-primary col-9"
            to={`/${categoryType}/${id}`}
          >
            Xem chi tiết
          </Link>
          <div className="btn btn-outline-warning">
            {isFavourite ? (
              <i class="bi bi-heart-fill"></i>
            ) : (
              <i class="bi bi-heart"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
