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
import ScholarShipDetails from "../Pages/AllScholarShip/ScholarShipDetails/ScholarShipDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Dashboard/Payment/Payment";
import UserProfile from "../Dashboard/UserDashboard/UserProfile/UserProfile";
import UserApplication from "../Dashboard/UserDashboard/UserApplication/UserApplication";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,

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
                path: "/scholarship/:id",
                element: <PrivateRoute><ScholarShipDetails></ScholarShipDetails></PrivateRoute>
            },

            {
                path: "/payment",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
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
      errorElement: <ErrorPage></ErrorPage>,

      children: [
        {
            path: "adminProfile",
            element: <AdminProfile></AdminProfile>
        },

        {
            path: "userProfile",
            element: <UserProfile></UserProfile>  
        },

        {
            path: "userApplications",
            element: <UserApplication></UserApplication>
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