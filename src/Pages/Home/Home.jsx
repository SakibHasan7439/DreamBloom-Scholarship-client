import Banner from "./Banner";
import FAQ from "./FAQ/FAQ";
import Review from "./Review/Review";
import TopScholarShip from "./TopScholarShip";

const Home = () => {
    return (
        <div>
            <Banner></Banner>    
            <TopScholarShip></TopScholarShip>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;