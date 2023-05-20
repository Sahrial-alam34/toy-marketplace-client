
import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import UpdateCarModal from "../UpdateCarModal/UpdateCarModal";



const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [cars, setCars] = useState([])
    const [showModal, setShowModal] = React.useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/myCars/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('mycar', data)
                setCars(data)
            })

    }, [user])
    return (
        <div className="my-container flex flex-col">
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
                                            {/* <a
                                                className="text-green-500 hover:text-green-700"
                                                href="#"
                                            >
                                                Edit
                                            </a> */}
                                            <button
                                                className="text-green-500 hover:text-green-700"
                                                type="button"
                                                onClick={() => setShowModal(true)}
                                            >
                                                Edit
                                            </button>
                                            <UpdateCarModal
                                                show={showModal}
                                                onHide={() => setShowModal(false)}
                                            ></UpdateCarModal>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
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