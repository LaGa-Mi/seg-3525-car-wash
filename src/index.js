import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/styles.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import Main from './components/Main';
import About from './components/About';
import OurExperts from './components/OurExperts'
import Services from './components/Services'
import BookNow from './components/BookNow'
import Career from './components/Career'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "OurExperts",
    element: <OurExperts/>,
  },
  {
    path: "Services",
    element: <Services/>,
  },
  {
    path: "BookNow",
    element: <BookNow/>,
  },
    {
    path: "BookNow/Login",
    element: <BookNow Login={true}/>, // Special case, allows to open book now page with login screen
  },
  {
    path: "BookNow/SignUp",
    element: <BookNow SignUp={true}/>, // Special case, allows to open book now page with sign up screen
  },
  {
    path: "Career",
    element: <Career/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);