import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Gallery from "./Gallery/Gallery";



const Home = () => {
    return (
        <div className="my-container">
            <Banner></Banner>
            <Gallery>
               
            </Gallery>
            <Categories></Categories>
        </div>
    );
};

export default Home;