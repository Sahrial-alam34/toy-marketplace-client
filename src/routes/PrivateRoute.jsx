import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        //     return <div className="spinner-border text-success" role="status">
        //     <span className="visually-hidden">Loading...</span>
        //   </div>
        return <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
            <p className='text-7xl font-thin'>ading....</p>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;