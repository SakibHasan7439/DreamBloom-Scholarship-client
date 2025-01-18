/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useEffect, useState } from "react";

const ScholarShipDetails = () => {
  const { id } = useParams();
  const axiosSecure = UseAxiosSecure();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      await axiosSecure.get(`/scholarship/${id}`).then((res) => {
        setDetails(res.data);
      });
    };
    getDetails();
  }, [id]);

  const {
    applicationDeadline,
    applicationFees,
    degree,
    image,
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
  } = details;

  const scholarshipInfo = {
    universityName: universityName,
    scholarshipCategory: scholarshipCategory,
    subjectCategory: subjectCategory,
    applicationFees: applicationFees,
    id: id
  };

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="min-h-screen bg-[#93c4fd33] p-6">
        <div className="w-4xl mb-8 md:mb-16 mx-auto bg-white rounded-lg overflow-hidden">
          <div className="relative">
            <img className="w-full h-64 object-cover" src={image} alt="" />
            <div className="absolute bottom-0 bg-black opacity-80 text-white p-4 w-full">
              <h1 className="text-2xl font-bold">{scholarshipName}</h1>
              <p className="text-sm">
                Offered by: {universityName}, {universityCountry},
                {universityCity}
              </p>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                University Details
              </h2>
              <ul className="mt-2 text-gray-600">
                <li>
                  <strong>World Rank:</strong> {universityWorldRank}
                </li>
                <li>
                  <strong>Degree:</strong> {degree}
                </li>
                <li>
                  <strong>City:</strong> {universityCity}
                </li>
                <li>
                  <strong>Country:</strong> {universityCountry}
                </li>
              </ul>
            </div>
            <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Fees & Charges
            </h2>
            <ul className="mt-2 text-gray-600">
              <li>
                <strong>Application Fees:</strong> ${applicationFees}
              </li>
              <li>
                <strong>Tuition Fees:</strong> ${tuitionFees}
              </li>
              <li>
                <strong>Service Charge:</strong> ${serviceCharge}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Scholarship Details
            </h2>
            <ul className="mt-2 text-gray-600">
              <li>
                <strong>Category:</strong> {scholarshipCategory}
              </li>
              <li>
                <strong>Application Deadline:</strong> {applicationDeadline}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Additional Information
            </h2>
            <ul className="mt-2 text-gray-600">
              <li>
                <strong>Subject Category:</strong> {subjectCategory}
              </li>
              <li>
                <strong>Post Date:</strong> {postDate}
              </li>
            </ul>
          </div>
          <div className="text-center">
            {
              universityName &&
              scholarshipCategory &&
              subjectCategory &&
                <Link to={"/payment"} state={scholarshipInfo} className="px-4 font-semibold hover:bg-[#4376b0] py-2 rounded-lg md:px-6 md:py-3 bg-[#93c4fd] shadow-md shadow-black hover:text-white transition-all">Apply Now</Link>
            }
          </div>
          </div>
        </div>
        <div>
            <h2 className="text-center text-2xl">Review section</h2>
            {/* TODO: NEED TO IMPLEMENT REVIEW SECTION HERE */}

            
        </div>
      </div>
    </div>
  );
};

export default ScholarShipDetails;
