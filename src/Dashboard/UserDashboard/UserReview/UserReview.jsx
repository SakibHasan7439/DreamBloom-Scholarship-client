import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import ReviewTableRow from "./ReviewTableRow";
import UseAuth from "../../../hooks/UseAuth";

const UserReview = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const {data: reviews, refetch} = useQuery({
        queryKey: ['review'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/userReviews/${user?.email}`)
            return res.data;
        }
    })
    console.log(reviews);
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl my-8">My Reviews</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>University Name</th>
                <th>Review Comment</th>
                <th>Review Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                reviews && reviews.map((review, index) => <ReviewTableRow 
                key={review._id}
                review={review}
                index={index}
                refetch={refetch}
            ></ReviewTableRow>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
