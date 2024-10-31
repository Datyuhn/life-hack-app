import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TipCard from './TipCard';

const FavouritePage = () => {
  const [favouritePosts, setFavouritePosts] = useState([]);
  const savedPosts = JSON.parse(sessionStorage.getItem("posts"));

  useEffect(() => {
    if (savedPosts) {
      setFavouritePosts(() => {
        return savedPosts.filter(
          (po) => po.isFavourite === true
        )
      });
    }
  }, []);

  return (
    <div className="container">
      <>
          <h2 className="my-4">Bài viết yêu thích</h2>
          {favouritePosts.length > 0 ? (
            <div className="row">
              {favouritePosts.map((post) => {
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
    </div>
  );
};

export default FavouritePage;
