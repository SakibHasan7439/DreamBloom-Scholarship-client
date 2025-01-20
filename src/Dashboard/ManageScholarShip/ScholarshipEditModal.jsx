import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

/* eslint-disable react/prop-types */
const ScholarshipEditModal = ({ scholarshipInfo, refetch }) => {

        const {applicationDeadline,
            applicationFees,
            degree,
            postDate,
            scholarshipCategory,
            scholarshipName,
            serviceCharge,
            subjectCategory,
            tuitionFees,
            universityCity,
            universityCountry,
            universityName,
            universityWorldRank,
            _id} =  scholarshipInfo;
            console.log(universityName);

  const { register, handleSubmit } = useForm();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => { 
    document.getElementById("my_modal_5").close();
    const imageFile = { image: data.image[0] };
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imageFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );

    if (res.data.success) {
      const scholarshipInfo = {
        scholarshipName: data.scholarshipName,
        universityName: data.universityName,
        image: res.data.data.display_url,
        universityCountry: data.universityCountry,
        universityCity: data.universityCity,
        subjectCategory: data.subjectCategory,
        scholarshipCategory: data.scholarshipCategory,
        tuitionFees: data.tuitionFees,
        applicationFees: parseFloat(data.applicationFees),
        universityWorldRank: data.universityWorldRank,
        applicationDeadline: data.applicationDeadline,
        serviceCharge: parseFloat(data.serviceCharge),
        degree: data.degree,
      };

      const scholarshipResponse = await axiosSecure.patch(`/updateScholarships/${_id}`,
        scholarshipInfo
      );
      if (scholarshipResponse.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Successful",
          text: "Data Updated Successful",
          icon: "success",
        });
      }
    }
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
              <label>ScholarShip Name</label>
              <input
                type="text"
                placeholder="Type here"
                defaultValue={scholarshipName}
                {...register("scholarshipName")}
                className="input input-bordered w-full block mb-4"
              />
            </div>

            <div className="p-4">
              <label>University Name</label>
              <input
                type="text"
                defaultValue={universityName}
                {...register("universityName")}
                placeholder="Type here"
                className="input input-bordered w-full block"
              />
            </div>

            <div className="p-4">
              <label>ScholarShip Image</label>
              <input
                type="file"
                accept="Image/*"
                {...register("image", { required: true })}
                placeholder="Type here"
                className="w-full block"
              />
            </div>

            <div className="p-4">
              <label>University Country</label>
              <input
                type="text"
                placeholder="Type here"
                defaultValue={universityCountry}
                {...register("universityCountry")}
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>University City</label>
              <input
                type="text"
                defaultValue={universityCity}
                {...register("universityCity")}
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>University World Rank</label>
              <input
                type="text"
                defaultValue={universityWorldRank}
                {...register("universityWorldRank")}
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Subject Category</label>
              <select
                defaultValue={subjectCategory}
                {...register("subjectCategory")}
                className="select select-bordered w-full"
              >
                <option disabled>
                  Choose a Subject
                </option>
                <option>Agriculture</option>
                <option>Engineering</option>
                <option>Doctor</option>
              </select>
            </div>

            <div className="p-4">
              <label>Scholarship category</label>
              <select
                {...register("scholarshipCategory")}
                defaultValue={scholarshipCategory}
                className="select select-bordered w-full"
              >
                <option disabled>
                  Choose a ScholarShip
                </option>
                <option>Full Funded</option>
                <option>Partial</option>
                <option>Self Funded</option>
              </select>
            </div>

            <div className="p-4">
              <label>Degree </label>
              <select
                defaultValue={degree}
                {...register("degree")}
                className="select select-bordered w-full"
              >
                <option disabled>
                  Choose a Degree
                </option>
                <option>Diploma</option>
                <option>Bachelor</option>
                <option>Masters</option>
              </select>
            </div>

            <div className="p-4">
              <label>Tuition fees</label>
              <input
                type="text"
                defaultValue={tuitionFees}
                {...register("tuitionFees")}
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Application fees</label>
              <input
                type="number"
                defaultValue={applicationFees}
                {...register("applicationFees")}
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Application Deadline</label>
              <input
                type="date"
                defaultValue={applicationDeadline}
                {...register("applicationDeadline")}
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className=" p-4">
              <label>Service charge</label>
              <input
                type="number"
                defaultValue={serviceCharge}
                {...register("serviceCharge")}
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Scholarship post date</label>
              <input
                type="date"
                defaultValue={postDate}
                {...register("postDate")}
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>
            <div className="w-full p-4">
              <input
                type="submit"
                className="input bg-[#93c5fd] transition cursor-pointer hover:bg-[#386eac] input-bordered block w-full"
              />
            </div>
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
  );
};

export default ScholarshipEditModal;
