
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

/* eslint-disable react/prop-types */
const ManageReviewCard = ({ review, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const { university_name, comment, rating, userName, userImage, date, _id } = review;
  
  const handleSubmitDelete = (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/review/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
            }
         });
        }
      });
  }

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 relative group p-[2px] rounded-2xl bg-gradient-to-br from-[#00eeff] to-[#0099ff] hover:scale-[1.03] transition-transform duration-300 shadow-xl h-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#00eeff] opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="bg-white rounded-2xl h-full p-6 flex flex-col items-center text-center relative z-10 overflow-hidden">
        <img
              src={userImage}
              className="relative z-10 rounded-full shadow-md border-4 border-white w-16 h-16 md:w-24 md:h-24 object-cover mb-4"
              alt={`${userName}'s profile`}
          />
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <p>
            <strong className="font-semibold text-lg text-gray-800 z-10">{userName}</strong>
          </p>
          <p>{date}</p>
          <p className="font-semibold text-lg text-gray-800 z-10">{university_name}</p>
          <p className="text-gray-600 leading-relaxed italic px-4 line-clamp-4 z-10 mb-6">{comment}</p>
          <button onClick={()=>handleSubmitDelete(_id)} className="h-[34px] text-sm px-4 rounded-md bg-blue-300">Delete</button>
      </div>
    </div>
  );
};

export default ManageReviewCard;