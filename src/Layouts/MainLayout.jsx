import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => { 
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-300px)]">
                <Outlet></Outlet>   
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;