import { useEffect, useState } from "react";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const UserProfile = () => {
  const { user } = UseAuth();
  const [statistics, setStatistics] = useState({});
  const axiosSecure = UseAxiosSecure();
  useEffect(()=>{
    const getStatistic = async() =>{
        await axiosSecure.get(`/userStatistic/${user?.email}`)
        .then(res =>{
            setStatistics(res.data);
        })
    }

    getStatistic();
  }, [axiosSecure, user?.email])
  console.log(statistics);

  return (
    <div className="p-4">
      <div className="rounded-lg p-4 bg-[#93c5fd] max-w-3xl w-full mx-auto">
        <img
          src={user.photoURL}
          className="rounded-full mb-6 w-16 h-16 md:w-24 md:h-24 mx-auto"
          alt=""
        />
        <div className="text-center text-xl font-semibold mb-6">
          <h2>{user?.displayName}</h2>
          <h2>{user?.email}</h2>
        </div>
        <div className="stats shadow text-center flex flex-col md:flex-row items-center justify-center">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Applications</div>
            <div className="stat-value">{statistics.userApplications}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value">{statistics.userReview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
