
import { useContext } from 'react';
import googleIcon from '../../assets/Animation/icons8-google.svg'
import { AuthContext } from '../../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
const GoogleLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    //console.log('login location 16', location.state.from)
     const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <>
            <button onClick={handleGoogleSignIn} className='w-full bg-white font-semibold my-2 text-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                <img src={googleIcon} className='h-6 mr-2' alt="" />
                Sign In With Google </button>
        </>
    );
};

export default GoogleLogin;