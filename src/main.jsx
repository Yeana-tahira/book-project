import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root'; 
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';
import { ToastContainer, } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
