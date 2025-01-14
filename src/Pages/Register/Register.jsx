import Lottie from "lottie-react";
import registerLottie from "../../assets/registerLottie.json";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import UseAuth from "../../hooks/UseAuth";

const Register = () => {
    const { registerNewUser, googleSign } = UseAuth();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async(value) => {

        const image = value.image[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(value.email, value.password);
        const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);

        const image_url = data.data.display_url;

        registerNewUser(value.email, value.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

  return (
    <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="lg:p-16 md:w-1/2 p-4">
            <div className="w-[90%] mx-auto mb-6">
                <button className="btn w-full bg-[#93c5fd]">Signup with Google</button>
            </div>
            <p className="text-center">Or</p>
            <h3 className="text-center text-xl md:text-2xl font-semibold">Register with email</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="name"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoURL</span>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    {...register("image", { required: true })}
                    placeholder="Enter your photo"
                    className=""
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
                    {...register("email", { required: true })}
                    className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="password"
                    {...register("password", { 
                        required: true, 
                        minLength:6,
                        pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/ 
                    })}
                    className="input input-bordered"
                    required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password must required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">Password must be more then 6 characters long</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">Password must contain at least a uppercase and a special character</span>
                )}
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                    </a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#93c5fd] hover:bg-[#4a88cf]">Register</button>
                </div>
                <p className="text-center">Already have an account ? <Link to={"/login"} className="text-[#4a88cf]">Login now</Link></p>

            </form>
            </div>
            <div className="w-1/2">
                <Lottie animationData={registerLottie}></Lottie>
            </div>
        </div>
    </div>
  );
};

export default Register;
