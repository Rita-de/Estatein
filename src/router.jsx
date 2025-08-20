import { createBrowserRouter } from "react-router-dom";
import { PropertyD } from "./screens/PropertyD";
import { lazy } from "react";

const Home = lazy(() => import("./screens/Homepage"))
const About = lazy(() => import("./screens/Aboutpage"))
const Property= lazy(() => import("./screens/Property"))
const Service = lazy(() => import("./screens/Servicepage"))
const Contact = lazy(() => import("./screens/Contactpage"))
const Book= lazy(() => import("./Components/Boooking/BookingPage"))



const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
  },
  {
    path: "/about",
    Component:About,
  },
  {
  path: "/prop",
    Component:Property,
  },
    {
  path: "/Dprop", 
  Component: PropertyD
  },
  {
   path:"/service",
   Component:Service
  },
   {
   path:"/contact",
   Component:Contact
   },
     {
   path:"/book",
   Component:Book
   },
]);

export default router;
