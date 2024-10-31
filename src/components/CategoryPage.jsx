import React, { useEffect, useState } from "react";
import TipCard from "./TipCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import categories from "../categories";

const CategoryPage = () => {
  const { categoryType } = useParams();
  const [posts, setPosts] = useState([]);
  const category = categories.find((cat) => cat.categoryType === categoryType);
  const savedPosts = JSON.parse(sessionStorage.getItem("posts"));

  useEffect(() => {
    if (savedPosts) {
      setPosts(() => {
        return savedPosts.filter(
          (po) => po.categoryType === category.categoryType
        );
      });
    }
  }, []);

  return (
    <div className="container">
      {category ? (
        <>
          <h2 className="my-4">{category.name} - Các mẹo và thủ thuật</h2>
          {posts.length > 0 ? (
            <div className="row">
              {posts.map((post) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <TipCard
                      id={post.id}
                      srcImage={post.imageSource}
                      // title={post.title}
                      // categoryType={post.categoryType}
                      // content={post.content}
                      // isFavourite={post.isFavourite}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <h3>Chưa có bài viết nào</h3>
            </>
          )}
        </>
      ) : (
        <>
          <h1>Danh mục không tồn tại</h1>
          <Link to="/">Quay về trang chủ</Link>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
