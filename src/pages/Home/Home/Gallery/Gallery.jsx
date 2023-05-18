
import Marquee from "react-fast-marquee";
import car1 from '../../../../assets/gallery/car1.jpg'
import car2 from '../../../../assets/gallery/car2.jpg'
import car3 from '../../../../assets/gallery/car3.jpg'
import car4 from '../../../../assets/gallery/car4.jpg'
import car5 from '../../../../assets/gallery/car5.jpg'
import car6 from '../../../../assets/gallery/car6.jpg'
import car7 from '../../../../assets/gallery/car7.jpg'
import car8 from '../../../../assets/gallery/car8.jpg'
const Gallery = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center font-semibold text-5xl mb-5">Toy Cars Gallery</h1>
            <Marquee>

                <div className="card  w-96 ">
                    <img className="h-[200px] w-[400px]" src={car1} alt="" />
                </div>
                <div className="card w-96 ">
                    <img className="h-[200px] w-[400px]" src={car2} alt="" />
                </div>
                <div className="card w-96 ">
                    <img className="h-[200px] w-[400px]" src={car3} alt="" />
                </div>
                <div className="card w-96 ">
                    <img className="h-[200px] w-[400px]" src={car4} alt="" />
                </div>
                <div className="card w-96 ">
                    <img className="h-[200px] w-[400px]" src={car5} alt="" />
                </div>
                <div className="card w-96 ">
                    <img className="h-[200px] w-[400px]" src={car6} alt="" />
                </div>
                <div className="card w-96 ">
                    <img className="h-[200px] w-[400px]" src={car7} alt="" />
                </div>
                <div className="card w-96 ">
                    <img className="h-[200px] w-[400px]" src={car8} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Gallery;