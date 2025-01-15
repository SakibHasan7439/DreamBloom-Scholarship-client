import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorLottieData from "../../assets/Animation - 1734836901959.json"

const ErrorPage = () => {
    return (
        <div>
            <div>
            <Lottie className="w-full h-[700px]" animationData={errorLottieData}></Lottie>
            <Link to={"/"} className="bg-[#ffc800] font-bold px-4 py-2 rounded-md absolute
             lg:top-[67%] top-1/2 left-1/2">Go Home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;