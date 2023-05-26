
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const CarEdit = () => {
    useTitle('Edit A Car')
    const handleUpdateCar= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;
      
        
        
        const updatedCar = {name, quantity, price, category, description, }
        console.log(updatedCar)
        //https://i.ibb.co/9bv7B6g/Mehmet-G-rs.jpg

        //send data to the server
        fetch(`https://assignment11-toy-marketplace-react-tailwind-server.vercel.app/ updatedACar/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Car Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })
        
    }
    const car = useLoaderData();
    const { _id, toyName,Subcategory,price,quantity,description} = car
    return (
        <div className="my-container bg-gray-200 p-24">
        <h2 className="text-3xl font-extrabold">Update a Car</h2>
        <form onSubmit={handleUpdateCar}>
      
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Car Category</span>
                    </label>
                    <label className="input-group">
                        
                        
                        <input type="text" name="category" placeholder="Car Category" className="input input-bordered w-full" defaultValue={Subcategory} disabled/>
                    </label>
                </div>
          
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Car Name </span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" placeholder="Car Name" className="input input-bordered w-full" defaultValue={toyName} disabled />
                    </label>
                </div>
            </div>
            
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        
                        
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price}/>
                    </label>
                </div>
          
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" defaultValue={quantity} />
                    </label>
                </div>
            </div>
         
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        
                        
                        <input type="text" name="description" placeholder="Quantity" className="input input-bordered w-full" defaultValue={description}/>
                    </label>
                </div>
            </div>
            
            <input type="submit" value="Update Car" className="btn btn-block"/>
        </form>
    </div>
    );
};

export default CarEdit;