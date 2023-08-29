import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Detailgalery from './pages/Detailgalery.jsx'
import Addrecipe from './pages/Addrecipe.jsx'
import EditRecipe from './pages/Editrecipe.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter ([
  {
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/galery/:id",
        element:<Detailgalery/>,
      },
      {
        path:"/add",
        element:<Addrecipe/>
      },
      {
        path:"/:id/edit",
        element:<EditRecipe/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
