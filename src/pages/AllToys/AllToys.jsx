import { useEffect, useState } from "react";
import Toy from "../Toy/Toy";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allCars")
            .then(res => res.json())
            .then(data => {
                console.log('data',data)
                setToys(data)
            })
    },[])
  

    return (


        <div className="my-container grid lg:grid-cols-2 mt-5">
            
            {toys?.map((toy) => (
                            <Toy
                            key={toy._id}
                             toy={toy}>
                               
                             </Toy>
                        ))}
        
        </div>
    );
};

export default AllToys;