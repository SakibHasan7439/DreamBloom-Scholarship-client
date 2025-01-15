import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;

    return (
        <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-64 h-screen fixed left-0 z-40 p-4 bg-[#93c5fd] text-black">
                {
                    isAdmin ? <ul className="flex flex-col gap-4">
                        <li><NavLink to={"/dashboard/adminProfile"}>Admin Profile</NavLink></li>
                        <li><NavLink to={"/dashboard/addScholarShip"}>Add ScholarShip</NavLink></li>
                        <li><NavLink to={"/dashboard/manageScholarShip"}>Manage Scholarship</NavLink></li>
                        <li><NavLink to={"/dashboard/manageApplication"}>Manage Applied Application</NavLink></li>
                        <li><NavLink to={"/dashboard/manageUsers"}>Manage Users</NavLink></li>
                        <li><NavLink to={"/dashboard/manageReview"}>Manage Review</NavLink></li>
                    </ul>

                    : <ul className="flex flex-col gap-4">
                        <li><NavLink to={"/dashboard/myProfile"}>My Profile</NavLink></li>
                        <li><NavLink to={"/dashboard/myApplication"}>My Application</NavLink></li>
                        <li><NavLink to={"/dashboard/myReview"}>My Review</NavLink></li>
                    </ul>
                }
            </div>
            <div className="flex-1 max-w-5xl mt-4 mx-auto w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;