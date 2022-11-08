import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Service from "../Components/Pages/Service/Service";
import ServicesCardDetails from "../Components/Pages/Service/ServicesCardDetails";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
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
            loader: ()=> { 
                return fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services`)}
        },
        {
            path:'/service/:id',
            loader:({params})=> fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services/${params.id}`),
           
            element:<ServicesCardDetails></ServicesCardDetails>
        }
    ]
}
])
export default routes