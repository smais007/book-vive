import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WhishlistBooks from "../components/WhishlistBooks/WhishlistBooks";
import PagesToRead from "../pages/PagesToRead";
import Filter from "../components/Filter/Filter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const req = await fetch("/books.json");

          const res = await req.json();

          return res;
        },
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: async () => {
              const req = await fetch("/books.json");

              const res = await req.json();

              return res;
            },
          },
          {
            path: "w-books",
            element: <WhishlistBooks></WhishlistBooks>,
            loader: async () => {
              const req = await fetch("/books.json");

              const res = await req.json();

              return res;
            },
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: async () => {
          const req = await fetch("/books.json");

          const res = await req.json();

          return res;
        },
      },
      {
        path: "/:id",
        element: <BookDetails></BookDetails>,
        loader: async () => {
          const req = await fetch("/books.json");

          const res = await req.json();

          return res;
        },
      },
    ],
  },
]);
