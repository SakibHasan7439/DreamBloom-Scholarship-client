import { useEffect, useState } from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import ScholarshipCard from "./ScholarshipCard";


const AllScholarShip = () => {
    const axiosPublic = UseAxiosPublic();
    const [scholarships, setScholarships] = useState([]);

    useEffect(() =>{
        const fetchAllData = async() =>{
            await axiosPublic.get('/scholarships')
            .then(res =>{
                setScholarships(res.data);
            })
        }
        fetchAllData();
    }, [axiosPublic]);

    console.log(scholarships);

    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-12 gap-4 mt-8">
            {
                scholarships.map(scholarship => <ScholarshipCard 
                    key={scholarship._id}
                    scholarship={scholarship}
                    ></ScholarshipCard>)
            }
            </div>
        </div>
    );
};

export default AllScholarShip;