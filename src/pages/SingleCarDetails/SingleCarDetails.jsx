
import { Link, useLoaderData } from "react-router-dom";

import { toast } from 'react-hot-toast';

const SingleCarDetails = () => {
    //  const { id } = useParams()
    const car = useLoaderData();



    // const [carInfo, setCarInfo] = useState({})
    const { image, Subcategory, displayName, toyName, price, quantity, postedBy,description } = car;


    const handleBuy = () => {


        return toast.success('Save to Cart!!!')
    }
    return (


        <div className="my-container">
            <div >
                <h1 className="text-center font-bold text-2xl mb-5">{toyName} Details</h1>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-1/2 "><img className="h-96 w-full" src={image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl md:text-3xl font-medium mt-5 mb-3">Toy Name: {toyName}</h2>
                        <p className="text-green-600">Seller Name: {displayName}</p>
                        <p className="text-green-600">Seller Email: {postedBy}</p>
                        <p>Sub Category: {Subcategory}</p>
                       
                        <div className="grid grid-cols-2">

                            <p>Price: {price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Price: {price}</p>
                        </div>
                        <p>Details: {description}</p>

                        <div className="flex justify-between">

                            <button onClick={handleBuy} className="text-center py bg-green-400 text-green-700 p-3 rounded-lg font-semibold mt-4 hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out">Buy Now</button>

                            <Link to={`/`} className="">
                                <button className="text-center w-full bg-green-400 text-green-700 p-3 rounded-lg font-semibold mt-4 hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out">Go to Home</button>
                            </Link>

                        </div>


                    </div>
                </div>


            </div>
        </div>

    );
};

export default SingleCarDetails;