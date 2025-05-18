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
      {
        reviews == 0 ? <p className="text-xl text-center py-10">No review available</p>
        : <div className="grid grid-cols-12 my-8 md:my-20 gap-4">
        {reviews &&
          reviews.map((review) => (
            <div
          key={review._id}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-br from-[#00eeff] to-[#0099ff] hover:scale-[1.03] transition-transform duration-300 shadow-xl h-full">
            <div className="bg-white rounded-2xl h-full p-6 flex flex-col items-center text-center relative z-10 overflow-hidden">

              {/* Decorative Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#00eeff] opacity-20 rounded-full blur-2xl z-0"></div>

              <img
                src={review.userImage}
                className="relative z-10 rounded-full shadow-md border-4 border-white w-16 h-16 md:w-24 md:h-24 object-cover mb-4"
                alt={`${review.userName}'s profile`}
              />

              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="z-10 mb-2"
              />

              <p className="font-semibold text-lg text-gray-800 z-10">{review.userName}</p>
              <p className="text-sm text-gray-500 z-10 mb-2">{review.date}</p>

              <p className="text-gray-600 leading-relaxed italic px-4 line-clamp-4 z-10">
                “{review.comment}”
              </p>

              {/* Bottom polish gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-0 rounded-b-2xl"></div>
            </div>
          </div>
            </div>

          ))}
      </div>
      }
    </div>
  );
};

export default Review;
