import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import AddScholarShip from "../Dashboard/AddScholarShip/AddScholarShip";
import ManageApplication from "../Dashboard/ManageApplication/ManageApplication";
import ManageScholarShip from "../Dashboard/ManageScholarShip/ManageScholarShip";
import ManageReview from "../Dashboard/ManageReview/ManageReview";
import ManageUser from "../Dashboard/ManageUser/ManageUser";
import AllScholarShip from "../Pages/AllScholarShip/AllScholarShip";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        //incomplete...
        errorElement: <h2>No page found</h2>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/allScholarships",
                element: <AllScholarShip></AllScholarShip>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },

    // VIP admin route
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    //incomplete...
      errorElement: <h2>page not found</h2>,

      children: [
        {
            path: "adminProfile",
            element: <AdminProfile></AdminProfile>
        },

        {
            path: "addScholarShip",
            element: <AddScholarShip></AddScholarShip>
        },

        {
            path: "manageApplication",
            element: <ManageApplication></ManageApplication>
        },

        {
            path: "manageScholarShip",
            element: <ManageScholarShip></ManageScholarShip>
        },

        {
            path: "manageReview",
            element: <ManageReview></ManageReview>
        },

        {
            path: "manageUsers",
            element: <ManageUser></ManageUser>
        },

      ]
    }
])

export default Routes;