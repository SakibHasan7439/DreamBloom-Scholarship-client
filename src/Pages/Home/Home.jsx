import ScholarshipCard from "../AllScholarShip/ScholarshipCard";
import Banner from "./Banner";
import FAQ from "./FAQ/FAQ";
import Review from "./Review/Review";
import ScholarshipStats from "./ScholarShipStates/ScholarShipStates";
import TopScholarShip from "./TopScholarShip";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <ScholarshipStats></ScholarshipStats>   
            <TopScholarShip></TopScholarShip>
            <WhyChooseUs></WhyChooseUs>
            <ScholarshipCard></ScholarshipCard>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;