import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import NotFountPage from "./pages/NotFountPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/fav",
        element: <FavouritesPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/fav/:id",
        element: <FavouriteDetailPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFountPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
