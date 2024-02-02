import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Portfolio from "./Portfolio/Portfolio";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      {
        path: "*",
        element: (
          <h2 className="text-center vh-100 m-5">Not Found please try again</h2>
        ),
      },
    ],
  },
]);

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={routers} />
      </>
    );
  }
}
