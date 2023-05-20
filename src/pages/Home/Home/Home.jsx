import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Facility from "./Facility/Facility";
import Gallery from "./Gallery/Gallery";
import Partner from "./Partner/Partner";



const Home = () => {
    return (
        <div className="my-container">
            <Banner></Banner>
            <Gallery>
               
            </Gallery>
            <Categories></Categories>
            <Facility></Facility>
            <Partner></Partner>
        </div>
    );
};

export default Home;