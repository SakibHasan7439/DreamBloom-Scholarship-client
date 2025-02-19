import Lottie from "lottie-react";
import registerLottie from "../../assets/registerLottie.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { useState } from "react";


const Login = () => {
    const { signinUser, googleSign } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic();
    const from = location.state?.from?.pathName || "/";

    const [credentials, setCredentials] = useState({
      email: '',
      password: ''
    })

    const handleCredentialFill = (role) =>{
      if(role === 'Moderator'){
        setCredentials({
          email: 'sakib.dev@gmail.com ',
          password: '12345T$'
        })
      }else if(role === 'Admin'){
        setCredentials({
          email: 'jhonkermahbub@gmail.com',
          password: '12345T$'
        })
      }
    }

    console.log(credentials);

    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signinUser(email, password)
        .then(() =>{
            toast.success("successfully logged in");
            navigate(from, {replace: true});
        })    

        .catch(error =>{
            toast.error(error.message);
        })
    } 

    const handleGoogleSign = () =>{
        googleSign()
        .then((result) =>{
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            };

            axiosPublic.post("/users", userInfo)
            .then(() =>{
                toast.success("successfully registered");
                navigate("/");
            })
        })
        .catch((error) =>{
            toast.error(error.message);
        })
    }

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <form onSubmit={handleSignIn} className="card-body p-4 lg:p-16 w-1/2">
          <div className="w-[90%] mx-auto mb-6">
            <button onClick={handleGoogleSign} className="btn w-full bg-[#93c5fd]">
              Signin with Google
            </button>
          </div>
          <p className="text-center">Or</p>
          <div className="flex items-center gap-4 flex-col justify-center md:flex-row">
            <button 
              onClick={() => handleCredentialFill('Admin')} 
              className="bg-[#93c5fd] px-4 py-2 rounded-md">Admin Credential
            </button>

            <button 
              onClick={() => handleCredentialFill('Moderator')} className="bg-[#93c5fd] px-4 py-2 rounded-md">Moderator Credential
            </button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e)=>
                setCredentials({...credentials, email: e.target.value})
              }
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e)=>
                setCredentials({...credentials, password: e.target.value})
              }
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#93c5fd] hover:bg-[#4a88cf]">
              Login
            </button>
          </div>
          <p className="text-center">
            New to this website ?{" "}
            <Link to={"/register"} className="text-[#4a88cf]">
              Register now
            </Link>
          </p>
        </form>
        <div className="w-1/2">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
