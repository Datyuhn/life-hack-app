/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import categories from "../categories";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Life Hacks
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Danh mục
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      className="dropdown-item"
                      to={`/category/${category.categoryType}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link className="dropdown-item" to="/categories">
                    Xem thêm
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">
                Bài viết yêu thích
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
