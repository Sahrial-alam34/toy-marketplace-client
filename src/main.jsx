import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProviders from './providers/AuthProviders';
import AllToys from './pages/AllToys/AllToys';
import Blogs from './pages/Blogs/Blogs';
import AddAToy from './pages/AddAToy/AddAToy';
import MyToys from './pages/MyToys/MyToys';
import PrivateRoute from './routes/PrivateRoute';
import SingleCarDetails from './pages/SingleCarDetails/SingleCarDetails';
import CarEdit from './pages/CarEdit/CarEdit';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>
      },
      {
        path:'/carDetails/:id',
        element:<PrivateRoute><SingleCarDetails></SingleCarDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://assignment11-toy-marketplace-react-tailwind-server.vercel.app/carDetails/${params.id}`)
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/addAToy',
        element:<AddAToy></AddAToy>
      },
      {
        path:'/myToys',
        element: 
          <MyToys></MyToys>
        
      },
      {
        path:'/updatedCar/:id',
        element:<CarEdit></CarEdit>,
        loader: ({params})=>fetch(`https://assignment11-toy-marketplace-react-tailwind-server.vercel.app/updatedCars/${params.id}`)
      },
  

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Toaster></Toaster>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
