import { useEffect, useState } from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import ScholarshipCard from "../AllScholarShip/ScholarshipCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TopScholarShip = () => {
    const axiosPublic = UseAxiosPublic();
    const [topScholarShips, setTopScholarShips] = useState([]);

    useEffect(() =>{
        const fetchTopScholarships = async() =>{
            await axiosPublic.get('/topScholarships')
            .then(res =>{
                setTopScholarShips(res.data);
            })
        }
        fetchTopScholarships();
    }, [axiosPublic]);

    console.log(topScholarShips);

    return (
        <div className="max-w-7xl w-full mx-auto my-8 md:my-20">
            <SectionTitle text={"Top ScholarShips"}></SectionTitle> 
            <div className="mb-8">
                    <Swiper slidesPerView={4}
                        breakpoints={{
                        350: {
                            slidesPerView: 1
                        },

                        414: {
                            slidesPerView: 2
                        },

                        640:{
                            slidesPerView: 3
                        },

                        1024: {
                            slidesPerView: 4, // For larger devices
                        },
                        }}
                        spaceBetween={20}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div>
                            {
                            topScholarShips.map((scholarship) =><SwiperSlide key={scholarship._id}>
                                <ScholarshipCard
                                key={scholarship._id}
                                scholarship={scholarship}>                      
                            </ScholarshipCard>
                            </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                    
                </div>        
        </div>
    );
};

export default TopScholarShip;