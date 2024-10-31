import React from "react";
import { Link } from "react-router-dom";
import "../styles/TipCard.css";

const TipCard = ({ id, srcImage }) => {
  const posts = JSON.parse(sessionStorage.getItem("posts"))
  let post = posts.find(po => po.id === id)

  const toggleFavourite = () => {
    post.isFavourite = !post.isFavourite
  }
  
  return (
    <div className="card tip-card" id={id}>
      <img
        className="card-img-top tip-card-img"
        src={srcImage}
        alt={srcImage}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="card-title">{post.title}</h6>
        <div className="d-flex justify-content-between">
          <Link
            className="btn btn-primary col-9"
            to={`/${post.categoryType}/${id}`}
          >
            Xem chi tiết
          </Link>
          <div className="btn btn-outline-warning">
            {post.isFavourite ? (
              <i className="bi bi-heart-fill" onClick={toggleFavourite}></i>
            ) : (
              <i className="bi bi-heart" onClick={toggleFavourite}></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
