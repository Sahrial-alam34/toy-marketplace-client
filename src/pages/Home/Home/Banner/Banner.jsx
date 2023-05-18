import Marquee from "react-fast-marquee";
import img1 from '../../../../assets/images/banner/banner1.jpg';
import img2 from '../../../../assets/images/banner/banner2.jpg';
import img3 from '../../../../assets/images/banner/banner3.jpg';
import img4 from '../../../../assets/images/banner/banner4.jpg';
const Banner = () => {
    return (
        <div>
            <div className="flex">
                <div className='mb-3'>
                    <button className="btn btn-error">Latest</button>
                </div>
                <Marquee className="text-red-500">
                    Toy Truck is now available!!. Toy Bus is now available!!. Toy Car is now available!!. Toy Truck is now available!!.
                </Marquee>
            </div>
            <div className="carousel w-full h-full lg:h-[600px]">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-[1220px] flex items-center
             left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Make Kids Happy to Buy This Car</h2>
                            <p>There are many variations of cars of  available, Choice your best one and make happy to your kids</p>
                            <div>
                                <button className='btn btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-success'>Latest Cars</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-[1220px] flex items-center
             left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Make Kids Happy to Buy This Car</h2>
                            <p>There are many variations of cars of  available, Choice your best one and make happy to your kids</p>
                            <div>
                                <button className='btn btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-success'>Latest Cars</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-[1220px] flex items-center
             left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Make Kids Happy to Buy This Car</h2>
                            <p>There are many variations of cars of  available, Choice your best one and make happy to your kids</p>
                            <div>
                                <button className='btn btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-success'>Latest Cars</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-[1220px] flex items-center
             left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Make Kids Happy to Buy This Car</h2>
                            <p>There are many variations of cars of  available, Choice your best one and make happy to your kids</p>
                            <div>
                                <button className='btn btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-success'>Latest Cars</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;