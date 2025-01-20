import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import ManageApplicationTable from "./ManageApplicationTable";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageApplication = () => {
  const axiosSecure = UseAxiosSecure();
  const [getApplication, setGetApplication] = useState(null);
  const { data: applications, refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const result = await axiosSecure.get("/applications");
      return result.data;
    },
  });

  const handleSubmitFeedback = async (e, applicationId) => {
    const form = e.target;
    const feedback = form.feedback.value;
    await axiosSecure
      .patch(`/applicationFeedback/${applicationId}`, { feedback })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          document.getElementById("my_modal_1").close();
          Swal.fire({
            title: "successful",
            text: "Your feedback is posted",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Name</th>
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>Applicant Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications &&
              applications.map((application, index) => (
                <ManageApplicationTable
                  key={application._id}
                  application={application}
                  index={index}
                  setGetApplication={setGetApplication}
                  refetch={refetch}
                ></ManageApplicationTable>
              ))}
          </tbody>
        </table>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {getApplication?.universityName}
            </h3>
            <div className="divider"></div>
            <p>
              <strong>Degree: </strong>
              {getApplication?.degree}
            </p>
            <p>
              <strong>Scholarship Category: </strong>
              {getApplication?.scholarshipCategory}
            </p>
            <p>
              <strong>Applicant Name: </strong>
              {getApplication?.applicantName}
            </p>
            <div className="modal-action justify-start">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-[#93c5fd] text-black">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box p-6">
            <h3 className="font-bold text-lg">Feedback Form</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitFeedback(e, getApplication?._id);
              }}
            >
              <textarea
                className="w-full p-2 my-4"
                name="feedback"
                placeholder="enter your feedback..."
              ></textarea>
              <input type="submit" className="btn bg-blue-300" name="" id="" />
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ManageApplication;
