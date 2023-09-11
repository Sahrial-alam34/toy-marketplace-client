import { useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [search, setSearchText] = useState("");
    // const [allData, setAllData] = useState(false)
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);


    useTitle('All Toys')
    useEffect(() => {
        fetch(`https://assignment11-toy-marketplace-react-tailwind-server.vercel.app/allCars?limit=${limit}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                //console.log('data', data)
                setToys(data)
            })
    }, [limit, page])

    // useEffect(()=>{

    // },[])

    const handleSearch = () => {
        fetch(`https://assignment11-toy-marketplace-react-tailwind-server.vercel.app/getCarsByName/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log('src data', data)
                setToys(data)
            })
    }

    //     useEffect(() => {
    //         fetch("https://assignment11-toy-marketplace-react-tailwind-server.vercel.app/allTotalCars")
    //             .then(res => res.json())
    //             .then(data => {
    //                 //console.log('data', data)
    //                 setToys(data)
    //             })
    //     }, [allData])
    // const handleAllData = (allData) =>{

    //     setAllData(allData);



    // }


    return (
        <div className="my-container ">
            {
                <h2 className="text-3xl text-center font-extrabold mb-20">Total Cars: {toys.length}</h2>

            }
            <div className="flex items-center justify-around">

                <div className="flex space-x-1 mb-5">
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
            <div className=" flex justify-center btn-group mt-5">


                <button className="btn btn-success" onClick={() => {
                    page === 1 ? setPage(1) : setPage(page - 1)
                }}
                    disabled={page === 1}
                >«</button>
                <button className="btn btn-success">{page}</button>
                <button className="btn btn-success" onClick={() => {
                    page === Math.round(1000 / limit) ? setPage(Math.round(1000 / limit)) : setPage(page + 1)
                }}
                    disabled={page === Math.round(1000 / limit)}
                >«</button>

                <select className="select select-primary max-w-sm ml-5 " value={limit} onChange={e=>setLimit(e.target.value)}>
                    
                    
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>


            </div>
            {/* 
            <div className="grid lg:grid-cols-2 mt-5">

            

            </div> */}
            {/* <div className="text-center">
                <button onClick={()=>handleAllData(!allData)} className="text-center py bg-green-400 text-green-700 p-3 rounded-lg font-semibold mt-4 hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out">See More</button>
            </div> */}

        </div>
    );
};

export default AllToys;