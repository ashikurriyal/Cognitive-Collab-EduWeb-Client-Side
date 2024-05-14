import Home from "../Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                
            }
        ]
    },
]);

export default router;