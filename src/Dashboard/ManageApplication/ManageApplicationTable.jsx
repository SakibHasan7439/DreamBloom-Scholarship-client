import reject from "../../assets/reject.png";
import feedback from "../../assets/feedback.png";
import details from "../../assets/detail.png";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const ManageApplicationTable = ({application, index, setGetApplication, refetch}) => {
    const axiosSecure = UseAxiosSecure();
    const {applicantName, scholarshipName, universityName, phoneNumber, status, _id} = application

    const handleSubmitStatusChange = async(id, newStatus) =>{
        await axiosSecure.patch(`/applicationStatus/${id}`, {status:newStatus})
        .then(res =>{
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    title: "Role changed",
                    text: `Role changed to ${status}`,
                    icon: "success"
                });
            }
        })
    }

    const handleSubmitReject = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                await axiosSecure.patch(`/applicationRejectStatus/${id}`, {status: "Rejected"})
                .then(res =>{
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Role changed",
                            text: `Role changed to ${status}`,
                            icon: "success"
                        });
                    }
                })
                .catch(error =>{
                    toast.error(error.message);
                })
            }
        });
    }

  return (
    <tr key={_id}>
      <th>{index + 1}</th>
      <td>{applicantName}</td>
      <td>{scholarshipName}</td>
      <td>{universityName}</td>
      <td>{phoneNumber}</td>
      <td>
        {
            status === "Rejected" ? <p className="text-red-500 text-center">Rejected</p>
            : <select onChange={(e)=>handleSubmitStatusChange(_id, e.target.value)}
            value={status}
            className="select w-full max-w-xs"
          >
            <option>pending</option>
            <option>processing</option>
            <option>completed</option>
          </select>
        }
      </td>
      <td className="flex items-center gap-6">
        <button onClick={()=>{
            setGetApplication(application),
            document.getElementById('my_modal_5').showModal()}}>
          <img
            className="w-8 tooltip-top"
            data-tip="view Details"
            src={details}
            alt=""
          />
        </button>
        <button onClick={()=>{
            setGetApplication(application);
            document.getElementById('my_modal_1').showModal()}}>
          <img
            className="w-8 tooltip tooltip-top"
            data-tip="Edit"
            src={feedback}
            alt=""
          />
        </button>
        <button disabled={status === "Rejected"} onClick={()=>handleSubmitReject(_id)}>
          <img className="w-8" src={reject} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default ManageApplicationTable;
