import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://dream-bloom-scholarships.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;