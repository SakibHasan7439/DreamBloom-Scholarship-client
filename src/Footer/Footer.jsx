import { Link } from "react-router-dom";
import logo from "../assets/websiteLogo.png"
const Footer = () => {
  return (
    <footer className="footer bg-blue-300 text-base-content p-10">
      <aside>
        <img className="w-24 h-24" src={logo} alt="" />
        <p>
          DreamBloom Scholarship
          <br />
          Providing reliable tech since 2025
        </p>
      </aside>
      <nav className="flex flex-col md:flex-row pt-10 md:pt-16 gap-5 text-xl font-semibold justify-center items-center ">
        <h6 className="footer-title"></h6>
        <Link to={"/"} className="link link-hover">Home</Link>
        <Link to={"/allScholarships"} className="link link-hover">All Scholarship</Link>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
    </footer>
  );
};

export default Footer;
