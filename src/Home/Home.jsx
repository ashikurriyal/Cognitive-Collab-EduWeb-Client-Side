import Banner from "./Banner/Banner";
import FeaturedSection from "./Featured Section/FeaturedSection";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;