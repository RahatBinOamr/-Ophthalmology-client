import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Home from "../Components/Pages/Home/Home";
import Update from "../Components/Pages/Home/Visit/Update";
import Visitor from "../Components/Pages/Home/Visit/Visitor";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Login/Register";
import AddService from "../Components/Pages/section/AddService";
import MyService from "../Components/Pages/Service/MyService";

import Service from "../Components/Pages/Service/Service";
import ServicesCard from "../Components/Pages/Service/ServicesCard";
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
           
            
        },
        {
            path:'/service',
            element:<ServicesCard></ServicesCard>
        },
       
        {
            path:'/service/:id',
            loader:({params})=> fetch(`https://dentatist-server.vercel.app/services/${params.id}`),
           
            element:<PrivateRoute><ServicesCardDetails></ServicesCardDetails></PrivateRoute>
        },
        {
            path:'/update/:id',
            loader: ({params})=>{
                return fetch(`https://dentatist-server.vercel.app/visitors/${params.id}`)
            },
            element:<Update></Update>
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
            element:<PrivateRoute><Visitor></Visitor></PrivateRoute>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
       
        {
            path:'/addService',
            element:<AddService></AddService>
        },
        {
            path:'/my',
            element:<MyService></MyService>
        }
       
    ]
}
])
export default routes