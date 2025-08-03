import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from "../../Utility/addTodb";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [Wishlist, setWishlist] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log( storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, [])

    useEffect(() => {
        const storedWishlist = getStoredWishlist();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id));
        const wishBookList = allBooks.filter(book => storedWishlistInt.includes(book.bookId));
        setWishlist(wishBookList);

    },[])
  return (
    <div>
      <h3 className=" text-3xl my-8">Listed Books</h3>

      <Tabs>
        <TabList className="text-emerald-900 font-semibold">
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I read: {readList.length}</h2>
          <h2>
            {
                readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </h2>
        </TabPanel>


        <TabPanel>
          <h2>Books i wish to read: {Wishlist.length}</h2>
          <h2>
            {
                Wishlist.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
