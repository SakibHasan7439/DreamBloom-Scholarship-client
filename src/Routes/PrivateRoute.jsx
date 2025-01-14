import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { Hourglass } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex h-screen flex-col items-center justify-center"><Hourglass
    visible={true}
    height="80"
    width="80"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={["#306cce", "#72a1ed"]}
  /></div>
  }

  if(user) {
    return children;
  }

  return <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
