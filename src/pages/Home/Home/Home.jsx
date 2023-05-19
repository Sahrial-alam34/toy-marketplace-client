import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Facility from "./Facility/Facility";
import Gallery from "./Gallery/Gallery";



const Home = () => {
    return (
        <div className="my-container">
            <Banner></Banner>
            <Gallery>
               
            </Gallery>
            <Categories></Categories>
            <Facility></Facility>
        </div>
    );
};

export default Home;