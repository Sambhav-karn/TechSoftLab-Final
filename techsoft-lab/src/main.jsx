import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Home from './Home/Home.jsx';
import ContactUs from './Home Pages/ContactUs.jsx';
import AboutUs from './Home Pages/AboutUs.jsx';
import Services from './Home Pages/Services.jsx';

let router = createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout/>,
      children:[  
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/contact-us',
          element:<ContactUs/>
        },
        {
          path:'/about-us',
          element:<AboutUs/>
        },
        {
          path:'/services',
          element:<Services/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
