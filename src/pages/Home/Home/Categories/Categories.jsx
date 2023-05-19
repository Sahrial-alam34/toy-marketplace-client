import { useEffect, useState } from 'react';
import CarDetails from '../CarDetails/CarDetails';

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





const Categories = () => {
    // const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    // const handleTabSelect = (index) => {
    //     setSelectedTabIndex(index);
    // }

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("remote");
    useEffect(() => {
        fetch("http://localhost:5000/allCars")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    },[])
    return (
        <div className='mt-10'>
            <h1 className="text-center font-semibold text-5xl mb-5">Top Category</h1>
            <div className="lg:max-w-7xl mx-auto px-4 py-8">
                    
                        <div className="text-center w-100 m-auto">
                            <div className="tabs d-flex justify-content-center align-items-center">
                                <div
                                    onClick={() => handleTabClick("remote")}
                                    className={`btn  btn-primary remote ${activeTab == "remote" ? " bg-danger text-white" : ""
                                        }`}
                                >
                                    Remote
                                </div>
                                <button
                                    onClick={() => handleTabClick("offline")}
                                    className={`btn  btn-secondary Offline ${activeTab == "offline" ? " bg-danger text-white" : ""
                                        }`}
                                >
                                    Offline
                                </button>
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
                

               
        
                
                        {/* <Tabs
                    selectedIndex={selectedTabIndex}
                    onSelect={handleTabSelect}
                    className="bg-gradient-to-br from-gray-400 to-indigo-200 rounded-lg"
                >
                    <TabList className="lg:flex">
                        {categoriesList.map((category, index) => (
                            <Tab
                                key={index}
                                className={`py-2 px-4 ${selectedTabIndex === index ? 'bg-white' : 'bg-gray-200'
                                    } rounded-l-lg cursor-pointer`}
                            >
                                {category.name}
                            </Tab>
                        ))}
                    </TabList>

                    {categoriesList.map((category, index) => (
                        <TabPanel key={index} className="p-4">
                            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                            <div className='lg:flex'>
                                {category.subCategories.map((subCategory, subIndex) => (

                                    <div key={subIndex} className="card w-full bg-base-100 shadow-xl my-2 lg:mx-2" >
                                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                Shoes!
                                                <div className="badge badge-secondary">NEW</div>
                                            </h2>
                                            <p>{subCategory}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Fashion</div>
                                                <div className="badge badge-outline">Products</div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs> */}
            </div>
        </div>
    );
};

export default Categories;