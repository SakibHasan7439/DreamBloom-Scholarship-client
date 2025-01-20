import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import useRole from "../../hooks/useRole";
import UseAuth from "../../hooks/UseAuth";

const ModeratorProfile = () => {
  const axiosSecure = UseAxiosSecure();
  const {user} = UseAuth();
  const role = useRole();
  const { data: statistics = {} } = useQuery({
    queryKey: ["adminModeratorStatistic"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminModeratorStatistic");
      return res.data;
    },
  });

  return (
    <div>
        <div className="flex mb-8 justify-center flex-col items-center">
            <img src={user?.photoURL} className="rounded-full h-24 w-24" alt="" />
            <h2 className="text-2xl md:text-3xl font-semibold">{role[0]}</h2>
            <h3 className="text-xl md:text-2xl">{user?.displayName}</h3>
        </div>
      <div className="stats stats-vertical lg:ml-28 mb-6 place-content-center gap-6 lg:stats-horizontal shadow">
        <div className="stat bg-orange-400 text-white gap-4 p-6">
          <div className="stat-title text-white font-semibold">Total Scholarship</div>
          <div className="stat-value text-center">{statistics?.totalScholarship}</div>
        </div>

        <div className="stat bg-blue-300 text-center font-semibold">
          <div className="stat-title">Total Application</div>
          <div className="stat-value">{statistics?.totalApplication}</div>
        </div>

        <div className="stat bg-blue-300 font-semibold text-center">
          <div className="stat-title">Total Review</div>
          <div className="stat-value">{statistics.totalReview}</div>
        </div>
      </div>
    </div>
  );
};

export default ModeratorProfile;