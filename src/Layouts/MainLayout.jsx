import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-300px)]">
                <Outlet></Outlet>   
            </div>
        </div>
    );
};

export default MainLayout;