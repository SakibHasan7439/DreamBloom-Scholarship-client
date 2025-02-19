import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
  const { comment, rating, userName, userImage, date } = review;
  console.log(review);
  return (
    <div className="p-4 rounded-md bg-white shadow-md h-[338px] flex flex-col justify-center items-center">
      <img
        src={userImage}
        className="rounded-full mx-auto w-10 h-10 md:w-28 md:h-28 my-6"
        alt=""
      />
      <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      <p>
        <strong>{userName}</strong>
      </p>
      <p>{date}</p>
      <p className="text-center px-8">{comment}</p>
    </div>
  );
};

export default ReviewCard;
