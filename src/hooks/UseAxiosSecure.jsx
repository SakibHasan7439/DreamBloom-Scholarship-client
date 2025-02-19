import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
    // baseURL: 'https://dream-bloom-scholarships.vercel.app'
    baseURL: 'https://dream-bloom-scholarships.vercel.app'
})
const UseAxiosSecure = () => {
    const {signOutUser} = UseAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async(error) =>{
        if(error === 401 || error === 403){
            await signOutUser();
            return navigate("/signin");
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default UseAxiosSecure;