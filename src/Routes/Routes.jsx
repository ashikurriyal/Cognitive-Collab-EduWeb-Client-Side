import Home from "../Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import PrivateRoutes from "./PrivateRoutes";
import Assignments from "../Pages/Assignments/Assignments";
import ViewAssignment from "../Pages/ViewAssignment/ViewAssignment";


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
                path: '/assignments',
                element: <Assignments></Assignments>,
                loader: () => fetch('http://localhost:5300/assignments')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/createassignments',
                element: <PrivateRoutes><CreateAssignments></CreateAssignments></PrivateRoutes>,
            },
            {
                path: '/viewAssignment',
                element: <PrivateRoutes><ViewAssignment></ViewAssignment></PrivateRoutes>

            }
        ]
    },
]);

export default router;