// eslint-disable-next-line react/prop-types
const ApplicationForm = ({isHidden, scholarshipInfo}) => {
    const {universityName, 
        scholarshipCategory, 
        subjectCategory, id} = scholarshipInfo;


  return (
    <div className={`${isHidden ? "hidden": "block"} my-10 mx-auto max-w-[512px]`}>
      <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Application Form
        </h2>

        {/* Applicant's Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Applicant&apos;s Phone Number
          </label>
          <input
            type="tel"
            id="phone"
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
            placeholder="Enter village, district, country"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Applicant Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="gender">
            Applicant Gender
          </label>
          <select id="gender" className="select select-bordered w-full">
            <option disabled selected>
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
          <select id="degree" className="select select-bordered w-full">
            <option disabled selected>
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
            placeholder="Enter HSC result"
            className="input input-bordered w-full"
          />
        </div>

        {/* Study Gap */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="gap">
            Study Gap (if any)
          </label>
          <select id="gap" className="select select-bordered w-full">
            <option disabled selected>
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

export default ApplicationForm;
