import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const Dashboard = () => {
    const [role, roleLoading] = useRole();
    if(roleLoading) {
        <h2>Loading</h2>
    }

    return (
        <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-64 h-screen fixed left-0 z-40 p-4 bg-[#93c5fd] text-black">
                {
                    role === "Admin" ? <ul className="flex flex-col gap-4">
                        <li><NavLink to={"/dashboard/adminProfile"}>Admin Profile</NavLink></li>
                        <li><NavLink to={"/dashboard/addScholarShip"}>Add ScholarShip</NavLink></li>
                        <li><NavLink to={"/dashboard/manageScholarShip"}>Manage Scholarship</NavLink></li>
                        <li><NavLink to={"/dashboard/manageApplication"}>Manage Applied Application</NavLink></li>
                        <li><NavLink to={"/dashboard/manageUsers"}>Manage Users</NavLink></li>
                        <li><NavLink to={"/dashboard/manageReview"}>Manage Review</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/allScholarship"}>Manage Review</NavLink></li>
                    </ul>

                    : role === "Moderator" ?  <ul className="flex flex-col gap-4">
                        <li><NavLink to={"/dashboard/moderatorProfile"}>Moderator Profile</NavLink></li>
                        <li><NavLink to={"/dashboard/addScholarShip"}>Add ScholarShip</NavLink></li>
                        <li><NavLink to={"/dashboard/manageScholarShip"}>Manage Scholarship</NavLink></li>
                        <li><NavLink to={"/dashboard/manageApplication"}>Manage Applied Application</NavLink></li>
                        <li><NavLink to={"/dashboard/manageReview"}>Manage Review</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/allScholarship"}>Manage Review</NavLink></li>
                    </ul>
                    : <ul>
                        <li><NavLink to={"/dashboard/userProfile"}>My Profile</NavLink></li>
                        <li><NavLink to={"/dashboard/userApplications"}>My Application</NavLink></li>
                        <li><NavLink to={"/dashboard/myReview"}>My Review</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/allScholarship"}>Manage Review</NavLink></li>
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