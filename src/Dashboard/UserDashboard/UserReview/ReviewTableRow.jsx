import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ReviewTableRow = ({ review, index, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const { university_name, date, comment, _id } = review;

  const handleSubmitDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
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
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{university_name}</td>
      <td>{comment}</td>
      <td>{date}</td>
      <td className="flex items-center gap-4 text-xl">
        <button
          onClick={() => handleSubmitDelete(_id)}
          className="p-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
        >
          <AiFillDelete></AiFillDelete>
        </button>
        <Link to={`/dashboard/UpdateUserReview/${_id}`}>
            <FaEdit></FaEdit>
        </Link>
      </td>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </tr>
  );
};

export default ReviewTableRow;
