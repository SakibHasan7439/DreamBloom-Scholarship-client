/* eslint-disable react/prop-types */
import details from "../../assets/detail.png";
import edit from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const ScholarshipTableRow = ({ scholarship, index, refetch, setScholarshipInfo }) => {
  const axiosSecure = UseAxiosSecure();
  const {
    scholarshipName,
    universityName,
    subjectCategory,
    degree,
    applicationFees,
    _id,
  } = scholarship;

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
            await axiosSecure.delete(`/deleteScholarship/${id}`).then((res) => {
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
    <tr>
      <th>{index + 1}</th>
      <td>{scholarshipName}</td>
      <td>{universityName}</td>
      <td>{subjectCategory}</td>
      <td>{degree}</td>
      <td>${applicationFees}</td>
      <td className="flex items-center gap-6">
        <Link to={`/scholarship/${_id}`}>
          <img
            className="w-8 tooltip-top"
            data-tip="view Details"
            src={details}
            alt=""
          />
        </Link>
        <button onClick={() => {
            document.getElementById("my_modal_5").showModal(),
            setScholarshipInfo(scholarship)}}
            >
          <img
            className="w-8 tooltip tooltip-top"
            data-tip="Edit"
            src={edit}
            alt=""
          />
        </button>
        <button onClick={()=>handleSubmitDelete(_id)}>
          <img className="w-8" src={deleteIcon} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default ScholarshipTableRow;
