import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Home from "../Components/Pages/Home/Home";
import Visitor from "../Components/Pages/Home/Visit/Visitor";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Login/Register";

import Service from "../Components/Pages/Service/Service";
import ServicesCardDetails from "../Components/Pages/Service/ServicesCardDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Service></Service>,
            // loader: fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services`)
            
        },
       
        {
            path:'/service/:id',
            loader:({params})=> fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services/${params.id}`),
           
            element:<PrivateRoute><ServicesCardDetails></ServicesCardDetails></PrivateRoute>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/visitor',
            element:<Visitor></Visitor>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
       
    ]
}
])
export default routes