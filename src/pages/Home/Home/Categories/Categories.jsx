import { useEffect, useState } from 'react';
import CarDetails from '../CarDetails/CarDetails';


// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





const Categories = () => {


    const handleTabClick = (tabName) => {

        setActiveTab(tabName);
    };

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("car");
    useEffect(() => {
        fetch(`https://assignment11-toy-marketplace-react-tailwind-server.vercel.app/ allCars/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])
    return (
        <div className='mt-10'>
            <h1 className="text-center font-semibold text-5xl mb-5">Top Category</h1>
            <div className="lg:max-w-7xl mx-auto px-4 py-8">

                <div className="text-center w-100 m-auto">
                    <div className="flex justify-evenly items-center">
                        <div className='bg-gray-500'>
                            <div
                                onClick={() => handleTabClick("car")}
                                className={`tab  tab2 text-white car ${activeTab == "car" ? " bg-primary text-white" : ""
                                    }`}
                            >
                                Car
                            </div>
                            <div
                                onClick={() => handleTabClick("bus")}
                                className={`tab  tab2 text-white bus ${activeTab == "bus" ? " bg-primary text-white" : ""
                                    }`}
                            >
                                Bus
                            </div>
                            <div
                                onClick={() => handleTabClick("truck")}
                                className={`tab  tab2 text-white truck ${activeTab == "truck" ? " bg-primary text-white" : ""
                                    }`}
                            >
                                Truck
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="grid lg:grid-cols-2 mt-5 ">

                    {toys?.map((toy) => (
                        <CarDetails
                            key={toy._id}
                            toy={toy}>

                        </CarDetails>
                    ))}
                </div> */}
                <div className="flex item-center justify-center min-h-screen container mx-auto ">

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {toys?.map((toy) => (
                            <CarDetails
                                key={toy._id}
                                toy={toy}>

                            </CarDetails>
                        ))}
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Categories;