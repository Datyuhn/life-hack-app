import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TipCard.css";

const TipCard = ({ id, srcImage }) => {
  const posts = JSON.parse(sessionStorage.getItem("posts"));
  const [classNameIcon, setClassNameIcon] = useState("bi bi-heart");
  var post = posts.find((po) => po.id === id);

  const toggleIcon = () => {
    if (post && post.isFavourite) {
      setClassNameIcon("bi bi-heart-fill");
    } else {
      setClassNameIcon("bi bi-heart");
    }
  };

  useEffect(() => {
    toggleIcon();
  }, []);

  const updatePosts = (_post) => {
    const posts = JSON.parse(sessionStorage.getItem("posts"));
    _post.isFavourite = !_post.isFavourite;
    const updatedPosts = posts.map((p) => (p.id === _post.id ? _post : p));
    sessionStorage.setItem("posts", JSON.stringify(updatedPosts));
    toggleIcon();
  };

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
          <div
            className="btn btn-outline-warning"
            onClick={() => {
              updatePosts(post);
            }}
          >
            <i className={classNameIcon}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
