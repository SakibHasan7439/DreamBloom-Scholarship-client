import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
  const { comment, rating, userName, userImage, date } = review;

  return (
    <div className="group relative p-[2px] rounded-2xl bg-gradient-to-tr from-[#00eeff] to-[#0099ff] transition-transform duration-300 hover:scale-[1.03] shadow-xl">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center h-full relative z-10 overflow-hidden">
        {/* Decorative Glow Behind Image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#00eeff] opacity-20 rounded-full blur-2xl z-0"></div>

        <img
          src={userImage}
          className="relative z-10 rounded-full shadow-md border-4 border-white w-20 h-20 md:w-24 md:h-24 object-cover -mt-12"
          alt={`${userName}'s avatar`}
        />

        <Rating
          style={{ maxWidth: 140 }}
          value={rating}
          readOnly
          className="my-3 z-10"
        />

        <p className="font-semibold text-lg text-gray-800 z-10">{userName}</p>
        <p className="text-sm text-gray-500 mb-2 z-10">{date}</p>
        <p className="text-center text-gray-600 italic leading-relaxed line-clamp-4 z-10 px-2">
          “{comment}”
        </p>

        {/* Subtle gradient at bottom for polish */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-0 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
