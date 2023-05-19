
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import addProduct from '../../assets/Animation/addProduct.json'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        //data.skills = selectedOption;
        console.log(data);
    }
    return (
        <div className="">
            <h1 className="text-center font-semibold text-5xl mb-5">Add A New TOY!!</h1>
            <div className="my-container w-full min-h-screen flex flex-col lg:flex-row items-start">
                <div className="lg:w-3/4 h-full flex flex-col p-10 lg:p-10 justify-between">
                    <div className=" p-10 bg-gradient-to-br from-purple-300 to-indigo-200 rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("image")}
                                    placeholder="Toy image link"
                                    type="url"
                                    defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("toyName")}
                                    placeholder="Enter Toy Name"
                                    defaultValue="Car Toy"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    value={user?.displayName}
                                    {...register("displayName")}
                                    placeholder="your Name"
                                    type="name"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    value={user?.email}
                                    {...register("postedBy")}
                                    placeholder="your email"
                                    type="email"
                                />


                                <select className="text-input pl-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2" {...register("Sub-category")}>
                                    <option value="Track">Track</option>
                                    <option value="Bus">Bus</option>
                                    <option value="Dinky">Dinky</option>
                                    <option value="HotWheel">HotWheel</option>
                                </select>
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    defaultValue="5k"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("rating", { required: true })}
                                    placeholder="Rating"
                                    type="text"
                                    defaultValue="3.5"
                                />

                                <input
                                    className="p-5 text-input h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("quantity", { required: true })}
                                    placeholder="Quantity"
                                    type="number"
                                    defaultValue="3"
                                />


                            </div>
                            <input
                                className="text-input p-5 h-10 w-full text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                {...register("description")}
                                placeholder="Description"
                            />
                            <div className="text-center mb-2">
                                <input className="btn btn-outline btn-secondary" value="Post Job" type="submit" />
                            </div>

                        </form>
                    </div>
                </div>
                <div className="relative lg:w-1/4 h-full py-20 flex flex-col">
                    <Lottie animationData={addProduct} loop={true} />
                </div>
            </div>

        </div>
    );
};

export default AddAToy;