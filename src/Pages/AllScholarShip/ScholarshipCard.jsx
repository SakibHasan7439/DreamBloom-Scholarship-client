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
        } = scholarship;

  return (
    <div className="card bg-[#93c4fd2f] rounded-md col-span-12 md:col-span-6 lg:col-span-3">
      <figure>
        <img className="h-[230px] w-full"
          src={image}
          alt="university image"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          {universityName}
          <div className="badge bg-[#93c5fd] p-4">{degree}</div>
        </h2>
        <p>{universityCountry}, {universityCity}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{subjectCategory}</div>
          <div className="badge badge-outline">{scholarshipCategory}</div>
          <p><strong>Application Fee: </strong>${applicationFees}</p>
          <p><strong>Application Deadline: </strong>{applicationDeadline}</p>
          <button className="bg-[#93c5fd] font-semibold px-3 py-2 rounded-lg transition-all hover:bg-[#588fcd]">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
