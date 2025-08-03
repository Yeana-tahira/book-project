import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addtoStoredReadList, addtoStoredWishlist } from "../../Utility/addTodb";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();

  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  console.log(book);
  const { bookId: currentBookId, tags, bookName, image, author, category, review, publisher, yearOfPublishing, totalPage, rating } = book;

  const handleMarkAsRead = (id) => {
    addtoStoredReadList(id);

  }

  const handleWishList = (id)=> {
    addtoStoredWishlist(id);
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-8 lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg bg-gray-300 p-6 shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold py-1">{bookName}</h1>
            <h4 className="py-1">By : {author} </h4>
            <div className="divider"></div>
            <h4>{category}</h4>
            <div className="divider"></div>
            <p className="py-1"> <span className=" font-bold">Review :</span> {review}</p>
            <div className='flex gap-2 py-4 '>
                <span className="font-bold pr-3">Tag</span>
                {
                    tags.map((tag, index) => <button key={index} className="btn btn-xs text-green-800 bg-gray-300 rounded-2xl">#{tag}</button>)
                }
            </div>
            <div className="divider"></div>

            <div className="grid grid-cols-2 ">
              <div className="py-2">
                <p className="py-2">Number of Pages :</p>
                <p className="py-2">Publisher :</p>
                <p className="py-2">Year of Publishing :</p>
                <p className="py-2">Rating :</p>
              </div>

              <div className="py-2 font-bold">
                <h4 className="py-2">{totalPage}</h4>
                <h4 className="py-2">{publisher}</h4>
                <h4 className="py-2">{yearOfPublishing}</h4>
                <h4 className="py-2">{rating}</h4>
              </div>
            </div>

            <div className="flex gap-4 py-4">
              <button onClick={ ()=> handleMarkAsRead(bookId)} className="btn border border-gray-300 ">Read</button>
              <button onClick={()=> handleWishList(bookId)} className="btn btn-primary ">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
