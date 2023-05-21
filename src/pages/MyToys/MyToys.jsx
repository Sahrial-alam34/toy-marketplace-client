

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";




const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [cars, setCars] = useState([])
    const [activeTab, setActiveTab] = useState("");
    useTitle('My Toys')

    const handleTabClick = (tabName) => {

        setActiveTab(tabName);
    };

    // useEffect(() => {
    //     fetch(`http://localhost:5000/sorted/${activeTab}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCars(data)
    //         })
    // }, [activeTab])
    useEffect(() => {
        fetch(`http://localhost:5000/sorted/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                const result = data.filter((car) => car?.postedBy === user?.email)
                setCars(result)
            })
    }, [activeTab])

    useEffect(() => {
        fetch(`http://localhost:5000/myallCars/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                //console.log('mycar', data)
                setCars(data)
            })

    }, [user])




    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //console.log('confirm')

                fetch(`http://localhost:5000/myCars/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )

                            const remaining = cars.filter(cof => cof._id !== _id)
                            setCars(remaining);

                        }
                    })
            }
        })
    }


    return (
        <div className="my-container flex flex-col">
            <div className="flex">
                <h2 className="text-center text-3xl font-extrabold mb-5 lg:mr-64"> Total Car Added {cars.length}</h2>
                <h2 className="text-center text-3xl font-extrabold mb-5">Sorted By Price</h2>
            </div>
            <div className="text-center w-100 m-auto">
                <div className="flex justify-evenly items-center">
                    <div className='bg-gray-500'>
                        <div
                            onClick={() => handleTabClick("ascending")}
                            className={`tab  tab2 text-white car ${activeTab == "ascending" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Ascending
                        </div>
                        <div
                            onClick={() => handleTabClick("descending")}
                            className={`tab  tab2 text-white bus ${activeTab == "descending" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Descending
                        </div>

                    </div>

                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Car Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Image
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>

                            {
                                cars.map((car, index) => (

                                    <tr key={car._id}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {car.toyName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            <div className="avatar">
                                                <div className="rounded w-24 h-24">
                                                    {
                                                        car.image && <img src={car.image} alt="hello" />
                                                    }
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {car.Subcategory}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {car.price}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {car.quantity}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {car.description}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <Link to={`/updatedCar/${car._id}`}
                                                className="text-green-500 hover:text-green-700"


                                            >
                                                Edit
                                            </Link>

                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                                onClick={() => handleDelete(car._id)}
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToys;