
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
    <div className="p-4 col-span-12 md:col-span-6 lg:col-span-4 rounded-md bg-white shadow-md flex flex-col justify-center items-center">
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
      <p className="md:text-lg font-semibold">{university_name}</p>
      <p className="text-center px-8">{comment}</p>
      <button onClick={()=>handleSubmitDelete(_id)} className="btn bg-blue-300">Delete</button>
    </div>
  );
};

export default ManageReviewCard;