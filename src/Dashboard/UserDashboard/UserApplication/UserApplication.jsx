import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UserApplicationTableRow from "./UserApplicationTableRow";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { format } from "date-fns";

const UserApplication = () => {
  const {user} = UseAuth();
  const [applicationInfo, setApplicationInfo] = useState(null);
  const axiosSecure = UseAxiosSecure();
  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userApplications/${user?.email}`);
      return res.data;
    },
  });

  const handleSubmitReview = async(e) =>{
    e.preventDefault();
    document.getElementById("my_modal_1").close();
    const form = e.target;
    const rating = form.rating.value;
    const comment = form.comment.value;
    
    const reviewInfo = {
        rating,
        comment,
        userName: user?.displayName,
        userImage: user?.photoURL,
        userEmail: user?.email,
        date: format(new Date(), 'P'),
        university_id: applicationInfo.scholarshipId,
        university_name: applicationInfo.universityName,
        scholarshipName: applicationInfo.scholarshipName
    };
    console.log(reviewInfo);
    await axiosSecure.post('/review', reviewInfo)
    .then(res =>{
        if(res.data.insertedId){
            Swal.fire({
                title: "review successful",
                text: "Thanks for your valuable review",
                icon: "success"
            });
        }
        form.reset();
    })
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
                applications.map((application, index) => <UserApplicationTableRow
                    key={application._id}
                    application={application}
                    index={index}
                    refetch={refetch}
                    setApplicationInfo={setApplicationInfo}>
                </UserApplicationTableRow>)
            }
          </tbody>
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-blue-300">
          <h3 className="font-bold text-lg text-center mb-6">Give Your valuable review</h3>
            <div> 
            <form onSubmit={handleSubmitReview}>
                    <label htmlFor="ratingNumber">
                        Give us a rating in 5
                        <input name="rating" className="block" type="number" max={5} required />
                    </label>
                    <label htmlFor="comment">Write a comment</label>
                    <textarea name="comment" className="h-[100px] p-2 border-2 outline-none w-full"></textarea>
                    <input type="submit" className="bg-white text-black btn"/>
                </form>
            </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserApplication;
