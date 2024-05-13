import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./route/root.jsx";
import Fullstack from "./components/home-page/courses/full-stack.jsx";
import Applied from "./components/home-page/courses/applied-ai.jsx";
import Robotic from "./components/home-page/courses/robotic.jsx";
import CyberSecurity from "./components/home-page/courses/cyber-security.jsx";
import PromptEngineering from "./components/home-page/courses/prompt-engineering.jsx";
import Gen from "./components/home-page/courses/gen-ai.jsx";
import Abouts from "./components/home-page/about.jsx";
import Contact from "./components/home-page/contact.jsx";
import Joinnow from "./components/home-page/joinnow.jsx";
import Robotics from "./components/home-page/robotics.jsx";
import Privacy from "./components/home-page/privacy.jsx";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "fullstack",
        element: <Fullstack />,
      },
      {
        path: "applied-ai",
        element: <Applied />,
      },
      {
        path: "robotics",
        element: <Robotic />,
      },
      {
        path: "promptengineering",
        element: <PromptEngineering />,
      },
      {
        path: "cybersecurity",
        element: <CyberSecurity />,
      },
      {
        path: "gen",
        element: <Gen />,
      },
      {
        path: "about",
        element: <Abouts />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "joinnow",
        element: <Joinnow />,
      },
      {
        path: "robot",
        element: <Robotics />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
    ],
  },
]);

const data = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Route} />
);
