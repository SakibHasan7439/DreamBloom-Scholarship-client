import { useEffect, useState } from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import ScholarshipCard from "./ScholarshipCard";

const AllScholarShip = () => {
    const axiosPublic = UseAxiosPublic();
    const [scholarships, setScholarships] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        const fetchAllData = async() =>{
            await axiosPublic.get(`/scholarships?search=${search}`)
            .then(res =>{
                setScholarships(res.data);
            })
        }
        fetchAllData();
    }, [axiosPublic, search]);
    
    console.log(scholarships);

    return (
        <div className="max-w-7xl w-full mx-auto">  
            <input onKeyUp={(e)=>setSearch(e.target.value)} type="text" name="search" placeholder="Search by university name" className="rounded-md my-8 border-2 w-full mx-4 md:w-[50%] md:mx-auto p-3 border-black" />
            <input type="submit" value="Search" className="bg-blue-300 px-5 py-[14px] rounded-md" />

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