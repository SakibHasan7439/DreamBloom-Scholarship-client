import { FaFacebook, FaGithub } from "react-icons/fa6";
import background from "../../assets/background.jpg";
import user from "../../assets/user.jpg";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div style={{backgroundImage:`url(${background})`}} className="w-full lg:h-screen bg-contain pt-8">
            <div className="max-w-4xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-md shadow-red-400 mx-auto h-[500px] bg-[#00000090] w-full">
                <div>
                    <h1 className="text-red-500 font-playfair text-2xl md:text-4xl">Sakib Hasan</h1>
                    <p className="text-[#ab4704]">Junior Frontend web developer</p>
                    <p className="text-white">I am a junior frontend web developer with solid foundation in building responsive, user-friendly web applications.
                    I am continuously learning and expanding my skills to stay updated with the latest web development trends. My goal is to create intuitive, visually appealing, and accessible websites while collaborating effectively in team environments.
                    </p>
                    <div className="text-white flex justify-center gap-3 text-xl md:text-3xl">
                        <FaFacebook className="hover:text-red-600 cursor-pointer transition duration-200 hover:-translate-x-2"></FaFacebook>
                        <IoLogoLinkedin className="hover:text-red-600 cursor-pointer transition duration-200 hover:-translate-x-2"></IoLogoLinkedin>
                        <Link className="pt-0 pl-0" to={"https://github.com/SakibHasan7439"} target="_blank">
                            <FaGithub className="hover:text-red-600 pt-0 cursor-pointer transition duration-200 hover:-translate-x-2"></FaGithub>
                        </Link>
                    </div>
                </div>
                <img src={user} className="object-cover md:w-[40%] md:h-[80%] w-[200px] h-[200px]" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;