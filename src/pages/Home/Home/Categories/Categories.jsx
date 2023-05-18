import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const categoriesList = [
    {
        name: 'Category 1',
        subCategories: ['Subcategory 1-1', 'Subcategory 1-2', 'Subcategory 1-3'],
    },
    {
        name: 'Category 2',
        subCategories: ['Subcategory 2-1', 'Subcategory 2-2', 'Subcategory 2-3'],
    },
    {
        name: 'Category 3',
        subCategories: ['Subcategory 3-1', 'Subcategory 3-2', 'Subcategory 3-3'],
    },
];




const Categories = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedTabIndex(index);
    }
    return (
        <div className=' mt-10 flex items-center bg-gradient-to-br from-purple-200 to-indigo-200'>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <Tabs
                    selectedIndex={selectedTabIndex}
                    onSelect={handleTabSelect}
                    className="bg-gray-100 rounded-lg"
                >
                    <TabList className="flex">
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
                            <div className='flex'>
                                {category.subCategories.map((subCategory, subIndex) => (

                                    <div key={subIndex} className="card w-full bg-base-100 shadow-xl mx-2" >
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
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;