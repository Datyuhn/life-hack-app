import React from "react";
import TipCard from "./TipCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import categories from "../categories";
import { posts } from "../posts";

const CategoryPage = () => {
  const { categoryType } = useParams();
  const category = categories.find((cat) => cat.categoryType === categoryType);
  const postList = posts.filter(
    (po) => po.categoryType === category.categoryType
  );

  return (
    <div className="container">
      {category ? (
        <>
          <h2 className="my-4">{category.name} - Các mẹo và thủ thuật</h2>
          {posts.length > 0 ? (
            <div>
              {postList.map((post) => {
                return (
                  <div className="col-md-3">
                    <TipCard
                      id={post.id}
                      srcImage={post.imageSource}
                      title={post.title}
                      categoryType={post.categoryType}
                      content={post.content}
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
