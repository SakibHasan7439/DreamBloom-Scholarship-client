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
import UpdateApplication from "../Dashboard/UserDashboard/UserApplication/UpdateApplication";
import UserReview from "../Dashboard/UserDashboard/UserReview/UserReview";
import UpdateUserReview from "../Dashboard/UserDashboard/UserReview/UpdateUserReview";
import ModeratorProfile from "../Dashboard/ModeratorProfile/ModeratorProfile";

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
            path: "dashboard",
            element: <h1>hello</h1>
        },

        {
            path: "adminProfile",
            element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
        },

        {
            path: "moderatorProfile",
            element: <PrivateRoute><ModeratorProfile></ModeratorProfile></PrivateRoute>
        },

        {
            path: "userProfile",
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>  
        },

        {
            path: "userApplications",
            element: <PrivateRoute><UserApplication></UserApplication></PrivateRoute>
        },

        {
            path: "userReviews",
            element: <PrivateRoute><UserReview></UserReview></PrivateRoute>
        },

        {
            path: "UpdateUserReview/:id",
            element: <UpdateUserReview></UpdateUserReview>,
            loader: ({params})=>fetch(`https://dream-bloom-scholarships.vercel.app/review/${params.id}`)
        },

        {
            path: "updateApplication/:id",
            element: <UpdateApplication></UpdateApplication>,
            loader: ({params})=> fetch(`https://dream-bloom-scholarships.vercel.app/applications/${params.id}`)
        },

        {
            path: "addScholarShip",
            element: <PrivateRoute><AddScholarShip></AddScholarShip></PrivateRoute>
        },

        {
            path: "manageApplication",
            element: <PrivateRoute><ManageApplication></ManageApplication></PrivateRoute>
        },

        {
            path: "manageScholarShip",
            element: <PrivateRoute><ManageScholarShip></ManageScholarShip></PrivateRoute>
        },

        {
            path: "manageReview",
            element: <PrivateRoute><ManageReview></ManageReview></PrivateRoute>
        },

        {
            path: "manageUsers",
            element: <PrivateRoute><ManageUser></ManageUser></PrivateRoute>
        },

      ]
    }
])

export default Routes;