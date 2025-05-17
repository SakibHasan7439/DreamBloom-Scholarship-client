import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
  const { comment, rating, userName, userImage, date } = review;

  return (
    <div className="relative group p-[2px] rounded-xl bg-gradient-to-tr from-[#00eeff] to-[#0099ff] transition-transform transform hover:scale-105 shadow-lg">
      <div className="bg-white rounded-xl p-6 flex flex-col justify-start items-center h-full">
        <img
          src={userImage}
          className="rounded-full shadow-lg border-4 border-white w-16 h-16 md:w-24 md:h-24 -mt-10 object-cover"
          alt={`${userName}'s avatar`}
        />
        <Rating
          style={{ maxWidth: 140 }}
          value={rating}
          readOnly
          className="my-2"
        />
        <p className="font-semibold text-lg text-gray-800">{userName}</p>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <p className="text-center text-gray-700 italic leading-relaxed line-clamp-4">
          “{comment}”
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
