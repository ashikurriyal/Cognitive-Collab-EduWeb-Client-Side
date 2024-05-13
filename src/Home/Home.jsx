import Banner from "./Banner/Banner";
import FeaturedSection from "./Featured Section/FeaturedSection";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
        </div>
    );
};

export default Home;