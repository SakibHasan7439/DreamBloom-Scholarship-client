/* eslint-disable react/prop-types */
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "./Slider";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider1.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
            <Slider 
            image={slider1}
            text={"Find your dream University with Scholarship"}
            subText={"There are thousands of universities in the world who are well known about there education and scholarship, we can help you get them easily"}></Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider 
                image={slider2}
                text={"Looking for scholarship"}
                subText={"Walk with us and we will make your journey easier and help you with what you want to achieve. Join us now!"}>
            </Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider 
                image={slider3}
                text={"Lets find your dream together"}
                subText={"We will help you finding the best universities with full funded scholarship, join us and make your dream comes to reality"}>
            </Slider>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
