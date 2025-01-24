import { createRoot } from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import CountryDetail from "./components/CountryDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement :<div>not found</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <div>hello</div>,
      },
      {
        path: "/:country",
        element: <CountryDetail></CountryDetail>,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
