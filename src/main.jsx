import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreatePost } from "./components/CreatePost.jsx";
import { PostContainer } from "./components/PostContainer.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  // Default path
  {
    // This will always render
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
    // in parent component what will render based on their url
    children: [
      { path: "/home", element: <PostContainer /> },
      {
        path: "/home/create-post",
        element: <CreatePost />,
        // action: CreatePostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
