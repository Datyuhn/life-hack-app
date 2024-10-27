import React from "react";
import TipCard from "./TipCard";

const Homepage = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row text-center mt-4">
          <div className="col-md-3 border rounded">
            <img
              src="/w3images/popsicle.jpg"
              alt="Popsicle"
              className="img-fluid"
            />
            <h3>All I Need Is a Popsicle</h3>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>

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
