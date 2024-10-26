import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import CategoryPage from "./components/CategoryPage";
import TipDetail from "./components/TipDetail";
import FavouritePage from "./components/FavouritePage";
import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryType" element={<CategoryPage />} />
          <Route path="/:categoryType/:postId" element={<TipDetail />} />
          <Route path="/favourites" element={<FavouritePage />} />
          <Route path="/categories" element={<CategoryList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
