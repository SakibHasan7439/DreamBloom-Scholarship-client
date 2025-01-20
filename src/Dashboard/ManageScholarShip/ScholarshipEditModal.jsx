import axios from "axios";
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

  const axiosSecure = UseAxiosSecure();

  const handleScholarshipUpdate = async (e) => { 
    const form = e.target;
    console.log(form.universityName.value);
    const image = form.image.files[0];


      const formData = new FormData()
      formData.append('image', image)
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      )

      const scholarshipInfo = {
        scholarshipName: form.scholarshipName.value,
        universityName: form.universityName.value,
        image: data.data.display_url,
        universityCountry: form.universityCountry.value,
        universityCity: form.universityCity.value,
        subjectCategory: form.subjectCategory.value,
        scholarshipCategory: form.scholarshipCategory.value,
        tuitionFees: form.tuitionFees.value,
        applicationFees: parseFloat(form.applicationFees.value),
        universityWorldRank: form.universityWorldRank.value,
        applicationDeadline: form.applicationDeadline.value,
        serviceCharge: parseFloat(form.serviceCharge.value),
        degree: form.degree.value,
      };

      const scholarshipResponse = await axiosSecure.patch(`/updateScholarships/${_id}`,
        scholarshipInfo
      );
      if (scholarshipResponse.data.modifiedCount > 0) {
        document.getElementById("my_modal_5").close();
        refetch();
        Swal.fire({
          title: "Successful",
          text: "Data Updated Successful",
          icon: "success",
        });
      }

  };

  const onFunctionSubmit = (e) =>{
    e.preventDefault();
    handleScholarshipUpdate(e, _id);
  }
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={onFunctionSubmit}>

            <div className="p-4">
              <label>ScholarShip Name</label>
              <input
                type="text"
                placeholder="Type here"
                name="scholarshipName"
                defaultValue={scholarshipName}
                className="input input-bordered w-full block mb-4"
              />
            </div>

            <div className="p-4">
              <label>University Name</label>
              <input
                type="text"
                defaultValue={universityName}
                name="universityName"
                placeholder="Type here"
                className="input input-bordered w-full block"
              />
            </div>

            <div className="p-4">
              <label>ScholarShip Image</label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>

            <div className="p-4">
              <label>University Country</label>
              <input
                type="text"
                placeholder="Type here"
                defaultValue={universityCountry}
                name="universityCountry"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>University City</label>
              <input
                type="text"
                defaultValue={universityCity}
                name="universityCity"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>University World Rank</label>
              <input
                type="text"
                defaultValue={universityWorldRank}
                name="universityWorldRank"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Subject Category</label>
              <select
                value={subjectCategory}
                name="subjectCategory"
                className="select select-bordered w-full"
              >
                <option disabled>
                  Choose a Subject
                </option>
                <option value={"Agriculture"}>Agriculture</option>
                <option value={"Engineering"}>Engineering</option>
                <option value={"Doctor"}>Doctor</option>
              </select>
            </div>

            <div className="p-4">
              <label>Scholarship category</label>
              <select
                name="scholarshipCategory"
                value={scholarshipCategory}
                className="select select-bordered w-full"
              >
                <option disabled>
                  Choose a ScholarShip
                </option>
                <option value={"Full Funded"}>Full Funded</option>
                <option value={"Partial"}>Partial</option>
                <option value={"Self Funded"}>Self Funded</option>
              </select>
            </div>

            <div className="p-4">
              <label>Degree </label>
              <select
                value={degree}
                name="degree"
                className="select select-bordered w-full"
              >
                <option disabled>
                  Choose a Degree
                </option>
                <option value={"Diploma"}>Diploma</option>
                <option value={"Bachelor"}>Bachelor</option>
                <option value={"Masters"}>Masters</option>
              </select>
            </div>

            <div className="p-4">
              <label>Tuition fees</label>
              <input
                type="text"
                defaultValue={tuitionFees}
                name="tuitionFees"
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Application fees</label>
              <input
                type="number"
                defaultValue={applicationFees}
                name="applicationFees"
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Application Deadline</label>
              <input
                type="date"
                defaultValue={applicationDeadline}
                name="applicationDeadline"
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className=" p-4">
              <label>Service charge</label>
              <input
                type="number"
                defaultValue={serviceCharge}
                name="serviceCharge"
                placeholder="Type here"
                className="input input-bordered block w-full"
              />
            </div>

            <div className="p-4">
              <label>Scholarship post date</label>
              <input
                type="date"
                defaultValue={postDate}
                name="postDate"
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
