import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

/* eslint-disable react/prop-types */
const UserApplicationTableRow = ({application, index, 
    refetch, setApplicationInfo}) => {
  const axiosSecure = UseAxiosSecure();
  const {universityName, subjectCategory, degree, status, scholarshipId} = application;
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
          await axiosSecure.delete(`/applications/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    };
  
  return (
    <>
        <tr>
        <th>{index + 1}</th>
        <td>{universityName}</td>
        <td>United state</td>
        <td>{application?.feedback}</td>
        <td>{subjectCategory}</td>
        <td>{degree}</td>
        <td>{}</td>
        <td>{status}</td>
        <td className="flex items-center gap-4 text-xl">
            <button
            onClick={() => handleSubmitDelete(application._id)}
            className="p-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
            >
            <AiFillDelete></AiFillDelete>
            </button>
            {status === "pending" ? (
            <Link to={`/dashboard/updateApplication/${application._id}`}>
                <FaEdit></FaEdit>
            </Link>
            ) : (
            <FaEdit
                onClick={() =>
                toast.error("Can not Edit the application is processing")
                }
            ></FaEdit>
            )}
            <button className="btn">
            <Link to={`/scholarship/${scholarshipId}`}>Details</Link>
            </button>
        </td>
        <td>
            <button
            onClick={() =>{
              setApplicationInfo(application);
              document.getElementById("my_modal_1").showModal()
            }}
            className="bg-[#93c5fd] px-5 py-2 rounded-md"
            >
            Add review
            </button>
        </td>
        </tr>
    </>
  );
};

export default UserApplicationTableRow;
