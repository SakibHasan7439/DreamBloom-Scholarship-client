import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";

const Review = () => {
  const axiosPublic = UseAxiosPublic();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosPublic.get("firstSixReviews").then((data) => {
      setReviews(data.data);
    });
  }, []);
  console.log(reviews);

  return (
    <div className="max-w-7xl w-full mx-auto">
        <SectionTitle
            text={'our clients say'}></SectionTitle>
      <div className="grid grid-cols-12 my-8 md:my-20 gap-4">
        {reviews &&
          reviews.map((review) => (
            <div
              key={review._id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className=" p-4 rounded-md bg-white h-[338px]  shadow-md flex flex-col justify-center items-center">
                <img
                  src={review.userImage}
                  className="rounded-full mx-auto w-10 h-10 md:w-28 md:h-28 my-6"
                  alt=""
                />
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>
                  <strong>{review.userName}</strong>
                </p>
                <p>{review.date}</p>
                <p className="text-center px-8">{review.comment}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Review;
