import { useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [search, setSearchText] = useState("");
    useTitle('All Toys')
    useEffect(() => {
        fetch("http://localhost:5000/allCars")
            .then(res => res.json())
            .then(data => {
                //console.log('data', data)
                setToys(data)
            })
    }, [])

    // useEffect(()=>{

    // },[])

    const handleSearch = () => {
        fetch(`http://localhost:5000/getCarsByName/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log('src data', data)
                setToys(data)
            })
    }


    return (
        <div className="my-container ">
            <div className="flex items-center justify-around">
                <div className="flex space-x-1">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <button onClick={handleSearch} className="px-4 text-white bg-purple-600 rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex item-center justify-center min-h-screen container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {toys?.map((toy) => (
                        <Toy
                            key={toy._id}
                            toy={toy}>

                        </Toy>
                    ))}
                </div>

            </div>
{/* 
            <div className="grid lg:grid-cols-2 mt-5">



            </div> */}
        </div>
    );
};

export default AllToys;