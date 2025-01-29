import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/layout/home/Home";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
