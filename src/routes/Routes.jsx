import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WhishlistBooks from "../components/WhishlistBooks/WhishlistBooks";
import PagesToRead from "../pages/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./books.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "w-books",
            element: <WhishlistBooks></WhishlistBooks>,
          },
        ],
      },
      {
        path:"/pages-to-read",
        element : <PagesToRead></PagesToRead>
      },
      {
        path: "/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("./books.json"),
      },
    ],
  },
]);
