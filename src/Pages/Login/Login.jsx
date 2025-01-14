import Lottie from "lottie-react";
import registerLottie from "../../assets/registerLottie.json";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="max-w-7xl w-full mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <form className="card-body p-4 lg:p-16 w-1/2">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoURL</span>
                </label>
                <input
                    type="photoUrl"
                    placeholder="Enter your photo"
                    className="input input-bordered"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                    </a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#93c5fd] hover:bg-[#4a88cf]">Login</button>
                </div>
            <p className="text-center">New to this website ? <Link to={"/register"} className="text-[#4a88cf]">Register now</Link></p>
            </form>
            <div className="w-1/2">
                <Lottie animationData={registerLottie}></Lottie>
            </div>
        </div>
    </div>
  );
};

export default Login;
