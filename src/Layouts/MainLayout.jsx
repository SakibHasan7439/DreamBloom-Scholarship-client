import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
              <div className="bg-blue-300 p-2">
                <Navbar></Navbar>
              </div>
              <Outlet></Outlet>         
        </div>
    );
};

export default MainLayout;