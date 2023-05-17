import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";



const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:min-h-[calc(100vh-341px)]'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;