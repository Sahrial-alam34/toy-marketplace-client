// import { useEffect } from "react";

import { Link, useLoaderData} from "react-router-dom";

const SingleCarDetails = () => {
    //  const { id } = useParams()
     const car = useLoaderData();

     
    // const [carInfo, setCarInfo] = useState({})
    const { image, Subcategory, displayName, toyName, price, quantity } = car;

    // useEffect(() => {
    //     fetch(`/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setCarInfo(data))
    // }, [id])
    return (

       
        <div>
            <div >
                <h2></h2>
                <div className="card lg:card-side bg-base-100 shadow-xl">
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
                        
                <Link to={`/`} className="card-actions justify-end">
                    <button className="btn btn-primary">Go to Home</button>
                </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default SingleCarDetails;