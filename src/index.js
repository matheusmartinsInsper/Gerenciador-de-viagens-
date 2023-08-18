import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'



const router =createBrowserRouter([
  {
   path: '/',
   element: <App />,
  },
  {
    path: '/dashboard/:id',
    element: <Home />
  },
  {
    path: '/signin',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
