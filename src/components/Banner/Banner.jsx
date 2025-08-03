import React from "react";
import bannerImg from '../../assets/Books.jpg';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-300 min-h-4/5 mt-10 rounded-3xl py-26">
        <div className="hero-content flex-col lg:flex-row px-3">
          
          <div className="pr-8 pl-6">
            <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
            
            <button className="btn btn-primary mt-7 bg-green-500 border border-0">View The List</button>
          </div>

          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
