import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../posts";

const TipDetail = () => {
  const { postId } = useParams();
  const post = posts.find((po) => po.id == postId);

  return (
    <div className="container pt-5">
      {post ? (
        <>
          <h3>{post.title}</h3>
          {/* <img src={post.imageSource} alt={post.imageSource} /> */}
          <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
        </>
      ) : (
        <h3>Không tìm thấy</h3>
      )}
    </div>
  );
};

export default TipDetail;
