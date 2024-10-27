import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { posts } from "../posts";

const TipDetail = () => {
  const { postId } = useParams();
  const post = posts.find((po) => po.id == postId);

  return (
    <div className="container pt-5">
      {post ? (
        <>
          <h3>{post.title}</h3>
          <div className="pt-3">
            <p>
              <b>Author: {post.author}</b>
            </p>
            <p>
              <i>Author: {post.createdDate}</i>
            </p>
          </div>
          <img
            className="mx-auto d-block col-8 p-3"
            src={post.imageSource}
            alt={post.imageSource}
          />
          <p
            className=""
            style={{ whiteSpace: "pre-wrap", textAlign: "justify" }}
          >
            {post.content}
          </p>
        </>
      ) : (
        <h3>Không tìm thấy bài viết</h3>
      )}
      <Link className="btn btn-primary mb-3" to={`/category/${post.categoryType}`}>
          Quay lại
      </Link>
    </div>
  );
};

export default TipDetail;
