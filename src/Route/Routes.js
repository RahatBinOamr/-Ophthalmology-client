import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            
        }
    ]
}
])
export default routes