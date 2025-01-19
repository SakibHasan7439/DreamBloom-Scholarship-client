import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import ReviewCard from './ReviewCard';

// eslint-disable-next-line react/prop-types
const ScholarshipReviews = ({scholarshipName}) => {
    const axiosPublic = UseAxiosPublic();
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        const getScholarReviews = async() =>{
            await axiosPublic.get(`/scholarshipReviews/${scholarshipName}`)
            .then(res =>{
                setReviews(res.data);
            })
        }
        getScholarReviews();
    },[axiosPublic, scholarshipName]);

    return (
        <div>
            {
                reviews.length < 1 ? <p className='text-center my-8'>
                    No review yet</p>
                    :
                <Swiper slidesPerView={4}
                            breakpoints={{
                            350: {
                                slidesPerView: 1
                            },

                            414: {
                                slidesPerView: 1
                            },

                            640:{
                                slidesPerView: 2
                            },

                            1024: {
                                slidesPerView: 3, // For larger devices
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
                                    reviews.map((review) =><SwiperSlide 
                                    key={review._id}>
                                        <ReviewCard review={review}></ReviewCard>
                                    </SwiperSlide>)
                                    
                                }
                            </div>
                </Swiper>
            }
        </div>
    );
};

export default ScholarshipReviews;