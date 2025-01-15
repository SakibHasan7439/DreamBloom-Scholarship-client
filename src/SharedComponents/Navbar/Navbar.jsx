import { Link, NavLink } from "react-router-dom";
import websiteLogo from "../../assets/websiteLogo.png";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  const handleSignOut = () =>{
    signOutUser()
    .then(() =>{
        toast.success("successfully signout");
    })
    .catch((error) =>{
        toast.error(error.message);
    })
  }

  return (
    <div className="bg-[#93c5fd] sticky top-0 z-50">
      <div className="navbar p-4 max-w-7xl w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/allScholarship"}>All Scholarship</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>User Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-12 md:w-16" src={websiteLogo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-4 menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/allScholarships"}>All Scholarship</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>User Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleSignOut} className="btn">Logout</button>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
