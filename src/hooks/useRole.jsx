import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useRole = () => {
    const {user, loading} = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const {data: role, isLoading: roleLoading} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/role/${user.email}`);
            return res.data;
        }
    })
    return [role, roleLoading];
};

export default useRole;