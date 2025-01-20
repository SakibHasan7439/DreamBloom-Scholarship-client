import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import ScholarshipTableRow from "./ScholarshipTableRow";
import ScholarshipEditModal from "./ScholarshipEditModal";
import { useState } from "react";

const ManageScholarShip = () => {
    const axiosSecure = UseAxiosSecure();
    const [scholarshipInfo, setScholarshipInfo] = useState({});
    const {data:scholarships, refetch} = useQuery({
        queryKey: ['scholarship'],
        queryFn: async()=>{
            const res = await axiosSecure.get('scholarships');
            return res.data;
        }
    })

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>Subject Category</th>
              <th>Degree</th>
              <th>Application Fees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                scholarships && scholarships.map((scholarship, index) =><ScholarshipTableRow key={scholarship._id}
                scholarship={scholarship}
                index={index}
                refetch={refetch}
                setScholarshipInfo={setScholarshipInfo}
                ></ScholarshipTableRow>)
            }
          </tbody>
        </table>
            {
                <ScholarshipEditModal
                scholarshipInfo={scholarshipInfo}
                refetch={refetch}
            ></ScholarshipEditModal>
            }
      </div> 
    </div>
  );
};

export default ManageScholarShip;
