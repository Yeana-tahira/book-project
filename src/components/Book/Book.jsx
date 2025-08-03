import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category} = book;
    return (
        <Link to = {`/books/${bookId}`}>
          <div>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure className='bg-gray-200 rounded-lg py-8'>
    <img className='h-[166px] '
      src={image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <div className='flex gap-2 justify-center'>
      {
      tags.map((tag, index) => <button key={index} className="btn btn-xs text-green-800 bg-green-300">{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>by: {author}</p>
     <div className="divider divider-accent">...</div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};

export default Book;