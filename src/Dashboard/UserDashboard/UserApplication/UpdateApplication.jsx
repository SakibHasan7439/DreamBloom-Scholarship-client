import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
/* eslint-disable react/prop-types */
const UpdateApplication = () => {
  const application = useLoaderData();
  const {
    address,
    degree,
    gender,
    hscResult,
    phoneNumber,
    scholarshipCategory,
    sscResult,
    subjectCategory,
    universityName,
    _id,
  } = application;

  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
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
      const applicantInfo = {
        address: data.address,
        degree: data.degree,
        gender: data.gender,
        sscResult: data.sscResult,
        hscResult: data.hscResult,
        image: res.data.data.display_url,
        phoneNumber: data.phoneNumber,
      };
      const applicationUpdateResponse = await axiosSecure.patch(`/application/${_id}`, applicantInfo);
      if(applicationUpdateResponse.data.modifiedCount > 0) {
          reset();
          Swal.fire({
              title: "Successful",
              text: "Data updated Successful",
              icon: "success"
            });
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Application Form
        </h2>

        {/* Applicant's Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Applicant&apos;s Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            defaultValue={phoneNumber}
            {...register("phoneNumber")}
            placeholder="Enter phone number"
            className="input input-bordered w-full"
          />
        </div>

        {/* Applicant Photo */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="photo">
            Applicant Photo
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>

        {/* Applicant Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Applicant Address
          </label>
          <textarea
            id="address"
            {...register("address")}
            defaultValue={address}
            placeholder="Enter village, district, country"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Applicant Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="gender">
            Applicant Gender
          </label>
          <select
            defaultValue={gender}
            {...register("gender")}
            id="gender"
            className="select select-bordered w-full"
          >
            <option disabled>
              Select gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Applicant Applying Degree */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="degree">
            Applying Degree
          </label>
          <select
            {...register("degree")}
            defaultValue={degree}
            id="degree"
            className="select select-bordered w-full"
          >
            <option disabled>
              Select degree
            </option>
            <option>Diploma</option>
            <option>Bachelor</option>
            <option>Masters</option>
          </select>
        </div>

        {/* SSC Result */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="ssc">
            SSC Result
          </label>
          <input
            type="text"
            id="ssc"
            defaultValue={sscResult}
            {...register("sscResult")}
            placeholder="Enter SSC result"
            className="input input-bordered w-full"
          />
        </div>

        {/* HSC Result */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="hsc">
            HSC Result
          </label>
          <input
            type="text"
            id="hsc"
            defaultValue={hscResult}
            {...register("hscResult")}
            placeholder="Enter HSC result"
            className="input input-bordered w-full"
          />
        </div>

        {/* Study Gap */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="gap">
            Study Gap (if any)
          </label>
          <select
            defaultValue={"default"}
            {...register("studyGap")}
            id="gap"
            className="select select-bordered w-full"
          >
            <option disabled value={"default"}>
              Select gap duration
            </option>
            <option>1 Year</option>
            <option>2 Years</option>
            <option>3+ Years</option>
          </select>
        </div>

        {/* University Name (Read-only) */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="university"
          >
            Subject Category
          </label>
          <input
            type="text"
            id="university"
            {...register("subjectCategory")}
            value={`${subjectCategory}`}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="university"
          >
            University Name
          </label>
          <input
            type="text"
            id="university"
            {...register("universityName")}
            value={`${universityName}`}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="university"
          >
            Scholarship Category
          </label>
          <input
            type="text"
            id="university"
            {...register("scholarshipCategory")}
            value={`${scholarshipCategory}`}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateApplication;
