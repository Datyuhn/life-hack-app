import React, { useEffect, useState } from "react";
import TipCard from "./TipCard";
import { posts as defaultPosts } from "../posts";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const savedPosts = JSON.parse(sessionStorage.getItem("posts"));

  useEffect(() => {
    if (savedPosts) {
      setPosts(savedPosts);
    } else {
      sessionStorage.setItem("posts", JSON.stringify(defaultPosts));
      setPosts(defaultPosts);
    }
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
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

        {/* About Section */}
        <div className="text-center mt-5" id="about">
          <h3>About Me, The Food Man</h3>
          <img
            src="/w3images/chef.jpg"
            alt="Me"
            className="img-fluid"
            style={{ maxWidth: "800px", margin: "auto" }}
          />
          <div className="mt-4">
            <h4>
              <b>I am Who I Am!</b>
            </h4>
            <h6>
              <i>With Passion For Real, Good Food</i>
            </h6>
            <p>
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
