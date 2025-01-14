import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-64 h-screen p-4 bg-[#93c5fd] text-black">
                {
                    isAdmin ? <ul className="flex flex-col gap-4">
                        <li><NavLink to={"adminProfile"}>Admin Profile</NavLink></li>
                        <li><NavLink to={"addScholarShip"}>Add ScholarShip</NavLink></li>
                        <li><NavLink to={"manageScholarShip"}>Manage Scholarship</NavLink></li>
                        <li><NavLink to={"manageApplication"}>Manage Applied Application</NavLink></li>
                        <li><NavLink to={"manageUsers"}>Manage Users</NavLink></li>
                        <li><NavLink to={"manageReview"}>Manage Review</NavLink></li>
                    </ul>
                    
                    : <ul className="flex flex-col gap-4">
                        <li><NavLink to={"/myProfile"}>My Profile</NavLink></li>
                        <li><NavLink to={"/myApplication"}>My Application</NavLink></li>
                        <li><NavLink to={"/myReview"}>My Review</NavLink></li>
                    </ul>
                }
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;