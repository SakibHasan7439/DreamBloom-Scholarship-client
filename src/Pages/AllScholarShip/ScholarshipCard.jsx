import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ScholarshipCard = ({ scholarship }) => {
    const {
        universityName,
        image,
        scholarshipCategory,
        universityCity,
        universityCountry,
        applicationFees,
        applicationDeadline,
        degree,
        subjectCategory,
        _id
        } = scholarship;

  return (
    <div className="card bg-[#93c4fd2f] h-[400px] md:h-[490px] rounded-md col-span-6 md:col-span-3 lg:col-span-3">
      <figure className="h-[160px] md:h-[210px]">
        <img className="h-[100%] w-full"
          src={image}
          alt="university image"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-[10px] md:text-[13px] leading-5 xl:text-lg">
          {universityName}
          <div className="badge bg-[#93c5fd] p-[10px] lg:p-4">{degree}</div>
        </h2>
        <div className="hidden lg:block">
          <p>{universityCountry}, {universityCity}</p>
        </div>
        <div className="card-actions md:justify-end">
        <div className="block lg:hidden">
          <p>{universityCountry}, {universityCity}</p>
        </div>
          <div className="flex items-center gap-2 justify-start">
            <div className="badge text-[10px] md:text-sm badge-outline">{subjectCategory}</div>
            <div className="badge badge-outline">{scholarshipCategory}</div>
          </div>
          <p><strong>Application Fee: </strong>${applicationFees}</p>
          <p><strong>Application Deadline: </strong>{applicationDeadline}</p>
          <Link to={`/scholarship/${_id}`} className="bg-[#93c5fd] font-semibold px-3 py-2 rounded-lg transition-all hover:bg-[#588fcd]">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
