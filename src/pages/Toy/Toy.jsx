

const Toy = ({toy}) => {
    console.log('category', toy)
    const { image, Subcategory, displayName, toyName, price, quantity } = toy;
    return (
        <div >
            <h2></h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-96" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name: {toyName}</h2>
                <div className="grid grid-cols-2">
                    <p>Sub Category: {Subcategory}</p>
                    <p>Seller Name: {displayName}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Toy;