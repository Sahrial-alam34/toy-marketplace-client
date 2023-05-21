import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";


const CarDetails = ({ toy }) => {

    //console.log('category', toy)
    const { _id, image, Subcategory, displayName, toyName, price, quantity, rating } = toy;
   
    const handleAlert = () => {
        Swal.fire({
            title: 'Alert',
            text: 'You Should Login First?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, go!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('confirm')
                
            }
            else{
                console.log('cancel')
                return <Navigate to='/' replace></Navigate>
            }
        })
    }

    return (
        <div>
            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-96" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name: {toyName}</h2>
                    <p>Sub Category: {Subcategory}</p>
                        <p>Seller Name: {displayName}</p>
                    <div className="grid grid-cols-2">
                      
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Price: {price}</p>
                    </div>

                    <Link to={`/carDetails/${_id}`} className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </Link>
                </div>
            </div> */}
            <div className="rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img className="h-40 w-full" src={image} alt="" />
                    </div>
                    <h5 className="text-2xl md:text-3xl font-medium mt-5 mb-3"> Toy Name: {toyName}</h5>
                    <p className="mt-2">Sub Category: {Subcategory}</p>
                    <p className="mt-2">Seller Name: {displayName}</p>
                    <div className="grid grid-cols-2 mt-2">

                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>

                    </div>
                    <div >
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            className="mt-2"
                        ></Rating>
                        <span className="ml-2">{rating}</span>
                    </div>
                    <Link to={`/carDetails/${_id}`} onClick={handleAlert} className="text-center bg-green-400 text-green-700 py-2 rounded-lg font-semibold mt-4 hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out">
                        <button >View Details</button>
                    </Link>

                </div>
            </div>

            {/* <div className="flex item-center justify-center min-h-screen container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  
                </div>
               
            </div> */}
        </div>
    );
};

export default CarDetails;