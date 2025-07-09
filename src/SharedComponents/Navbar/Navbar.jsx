import { Link, NavLink } from "react-router-dom";
import websiteLogo from "../../assets/websiteLogo.png";
import UseAuth from "../../hooks/UseAuth";
import useRole from "../../hooks/useRole";

import { useState } from "react";
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Mock data - replace with your actual hooks
  const { user, signOutUser } = UseAuth();
  const role = useRole();

  if(!role[0]){
    <li>Loading...</li>
  } 

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("successfully signout");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/allScholarships", label: "All Scholarships" },
    { to: "/aboutUs", label: "About Us" }
  ];

  const getDashboardLink = () => {
    if (role[0] === "Moderator") return "/dashboard/moderatorProfile";
    if (role[0] === "Admin") return "/dashboard/adminProfile";
    if (role[0] === "user") return "/dashboard/userProfile";
    return "#";
  };


  return (
    <nav className="bg-[#93c5fd] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={websiteLogo} className="w-10 h-10" alt="" />
              <span className="text-white font-bold text-xl hidden sm:block">
                ScholarHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md"
                >
                  {link.label}
                </NavLink>
              ))}
              
              {role[0] && (
                <NavLink
                  to={getDashboardLink()}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md"
                >
                  Dashboard
                </NavLink>
              )}
            </div>
          </div>

          {/* Right side - User section */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleUserDropdown}
                    className="flex items-center space-x-3 text-white hover:bg-white/10 rounded-lg px-3 py-2 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium hidden lg:block">
                      {user.displayName}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* User Dropdown */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {user.displayName}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {role[0]} Account
                        </p>
                      </div>
                      <Link
                        to={getDashboardLink()}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#5395e0] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#4a7bc8] transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 text-white/90 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </NavLink>
              ))}
              
              {role[0] && (
                <NavLink
                  to={getDashboardLink()}
                  className="block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 text-white/90 hover:bg-white/10 hover:text-white"
                >
                  Dashboard
                </NavLink>
              )}
            </div>

            {/* Mobile user section */}
            <div className="pt-4 pb-3 border-t border-white/20">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center px-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium text-sm">
                        {user.displayName}
                      </p>
                      <p className="text-white/70 text-xs capitalize">
                        {role[0]} Account
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-3 py-2 text-white/90 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="px-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-[#5395e0] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#4a7bc8] transition-colors duration-200"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
