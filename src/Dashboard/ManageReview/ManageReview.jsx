import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import ManageReviewCard from "./ManageReviewCard";

const ManageReview = () => {
    const axiosSecure = UseAxiosSecure();

    const {data: reviews = [], refetch} = useQuery({
        queryKey: ['allReviews'],
        queryFn: async() =>{
            const res = await axiosSecure.get('review')
            return res.data;
        }
    });

    return (
        <div className="grid grid-cols-12 gap-4">
            {
                reviews.map(review =><ManageReviewCard
                key={review._id}
                review={review}
                refetch={refetch}></ManageReviewCard>)
            }
        </div>
    );
};

export default ManageReview;