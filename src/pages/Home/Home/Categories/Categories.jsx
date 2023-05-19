import { useEffect, useState } from 'react';
import CarDetails from '../CarDetails/CarDetails';


// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





const Categories = () => {


    const handleTabClick = (tabName) => {
       
        setActiveTab(tabName);
    };

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/allCars/${activeTab}`)
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
                    <div className="tabs d-flex justify-content-center align-items-center">
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

                <div className="grid lg:grid-cols-2 mt-5 ">

                    {toys?.map((toy) => (
                        <CarDetails
                            key={toy._id}
                            toy={toy}>

                        </CarDetails>
                    ))}
                </div>





            </div>
        </div>
    );
};

export default Categories;