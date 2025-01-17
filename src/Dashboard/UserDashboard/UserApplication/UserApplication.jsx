import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UserApplication = () => {
    const axiosSecure = UseAxiosSecure();
    const {data: applications = [], refetch} = useQuery({
        queryKey: ['applications'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/applications')
            return res.data;
        }
    })

    const handleSubmitDelete = async(id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
                await axiosSecure.delete(`/applications/${id}`)
                .then((res)=>{
                    if(res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                }) 
            }
        });
    }

  return (
    <div className="max-w-7xl w-full mx-auto">
      <h1 className="text-xl md:text-3xl text-center my-8">
        My applied Application
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>University Name</th>
              <th>Address</th>
              <th>Application Feedback</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th>status</th>
              <th>Action</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {
                applications.map((application, index) =><tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.universityName}</td>
                <td>United state</td>
                <td>{}</td>
                <td>{application.subjectCategory}</td>
                <td>{application.degree}</td>
                <td>{}</td>
                <td>{application.status}</td>
                <td className="flex items-center gap-4 text-xl">
                    <button onClick={()=>handleSubmitDelete(application._id)} className="p-2 rounded-md bg-red-500 hover:bg-red-600 text-white">
                        <AiFillDelete></AiFillDelete>
                    </button>
                    <Link><FaEdit></FaEdit></Link>
                    <button className="btn">Details</button>
                </td>
                <td><button className="bg-[#93c5fd] px-5 py-2 rounded-md">Add review</button></td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserApplication;
