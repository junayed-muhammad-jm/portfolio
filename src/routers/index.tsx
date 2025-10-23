
import FrontLayout from "@/components/layout/FrontLayout";
import HomePage from "@/pages/home";
import About from "@/pages/home/About";
import Contact from "@/pages/home/Contact";
import CV from "@/pages/home/CV";
import MyImage from "@/pages/home/myImage";
import Project from "@/pages/home/Project";
import Services from "@/pages/home/Service";


import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/project",
        Component: Project
      },
      {
        path: "/service",
        Component: Services
      },
      {
        path: "/contact",
        Component: Contact
      },
    {
        path: "/cv",
        Component: CV
      },
       {
        path: "/my-image",
        Component: MyImage
      },




    ]
  },

]);
export default router;
