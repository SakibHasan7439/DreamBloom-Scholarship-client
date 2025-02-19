import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";
import "../customStyle/style.css";
const Dashboard = () => {
  const [role, roleLoading] = useRole();
  if (roleLoading) {
    <h2>Loading</h2>;
  }

  return (
    <div className="drawer lg:drawer-open">
  {/* Sidebar */}
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>

    <div className="flex-1 max-w-5xl mt-4 mx-auto w-full pt-4">
      <Outlet />
    </div>
  </div>

  {/* Sidebar Drawer */}
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-[#93c5fd] text-base-content min-h-full w-80 p-4">
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
          <li><NavLink to={"/allScholarships"}>All Scholarships</NavLink></li>
        </ul>

        : role === "Moderator" ? <ul className="flex flex-col gap-4">
          <li><NavLink to={"/dashboard/moderatorProfile"}>Moderator Profile</NavLink></li>
          <li><NavLink to={"/dashboard/addScholarShip"}>Add ScholarShip</NavLink></li>
          <li><NavLink to={"/dashboard/manageScholarShip"}>Manage Scholarship</NavLink></li>
          <li><NavLink to={"/dashboard/manageApplication"}>Manage Applied Application</NavLink></li>
          <li><NavLink to={"/dashboard/manageReview"}>Manage Review</NavLink></li>

          <div className="divider"></div>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/allScholarships"}>All Scholarships</NavLink></li>
        </ul>

        : <ul>
          <li><NavLink to={"/dashboard/userProfile"}>My Profile</NavLink></li>
          <li><NavLink to={"/dashboard/userApplications"}>My Application</NavLink></li>
          <li><NavLink to={"/dashboard/userReviews"}>My Review</NavLink></li>
          <div className="divider"></div>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/allScholarships"}>All scholarships</NavLink></li>
        </ul>
      }
    </ul>
  </div>
</div>

  );
};

export default Dashboard;
