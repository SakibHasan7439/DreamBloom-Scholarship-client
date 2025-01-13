import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://final-project-server-gray.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;