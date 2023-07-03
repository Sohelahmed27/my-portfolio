import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: "/",
      element:<Home></Home>,

    },
  {
    path: "/about",
    element:<AboutMe></AboutMe>
  },
  {
    path: "/skill",
    element:<Skills></Skills>,
  },
  {
    path: "/projects",
    element:<Projects></Projects>
  },
  {
    path: "/contact",
    element:<Contact></Contact>
  }
]
  },
]);

export default router;