import { Link } from "react-router-dom";


const Toy = ({ toy }) => {
    //console.log('category', toy)
    const { _id, image, Subcategory, displayName, toyName, price, quantity } = toy;
    return (
        //     <div >
        //         <h2></h2>

        //     <div className="card lg:card-side bg-base-100 shadow-xl">
        //         <figure><img className="h-96" src={image} alt="Album" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Toy Name: {toyName}</h2>
        //             <p>Sub Category: {Subcategory}</p>
        //                 <p>Seller Name: {displayName}</p>
        //             <div className="grid grid-cols-2">

        //                 <p>Price: {price}</p>
        //                 <p>Quantity: {quantity}</p>
        //                 <p>Price: {price}</p>
        //             </div>

        //             <Link to={`/carDetails/${_id}`} className="card-actions justify-end">
        //                 <button className="btn btn-primary">Listen</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

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
                    <p>Price: {price}</p>
                </div>
                <Link to={`/carDetails/${_id}`} className="text-center bg-green-400 text-green-700 py-2 rounded-lg font-semibold mt-4 hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out">
                    <button >View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default Toy;