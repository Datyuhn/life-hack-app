import React from 'react';
import TipCard from './TipCard';

const FavouritePage = () => {
  return (
    <div className="container">
      <h2 className="my-4">Bài viết yêu thích</h2>
      <div className="row">
        {/* Render các bài viết yêu thích */}
        <div className="col-md-4">
          <TipCard title="Bài viết yêu thích 1" description="Mô tả về bài viết yêu thích 1." />
        </div>
        <div className="col-md-4">
          <TipCard title="Bài viết yêu thích 2" description="Mô tả về bài viết yêu thích 2." />
        </div>
        <div className="col-md-4">
          <TipCard title="Bài viết yêu thích 3" description="Mô tả về bài viết yêu thích 3." />
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
