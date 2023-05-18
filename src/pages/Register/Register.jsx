
import Lottie from "lottie-react";
import login from '../../assets/Animation/login.json'
import googleIcon from '../../assets/Animation/icons8-google.svg'
const Register = () => {
    return (
        <div className='my-container w-full min-h-screen flex flex-col lg:flex-row items-start'>
            <div className='relative lg:w-1/2 h-full flex flex-col'>

                <Lottie animationData={login} loop={true} />
                {/* <div className='absolute top-[25%] left-[10%] flex flex-col'>
                    <h1 className='text-2xl text-[#E0E0E0] font-extrabold my-4'>Turn Your Ideas into Reality</h1>

                </div> */}
                {/* bg-[#f5f5f5] */}
            </div>
            <div className='lg:w-1/2 h-full  bg-green-100  flex flex-col p-20 justify-between'>
                <div>
                    <h1 className='text-base text-[#060606] text-start font-semibold'>House Of Toy Cars </h1>
                </div>
                <div className='w-full flex flex-col max-w-[550px]'>
                    <h3 className='text-2xl text-start font-semibold mb-4'>Register</h3>
                    <p className='text-sm- mb-2 text-start'>Welcome Back !! Please enter your details</p>

                    <div className='w-full flex flex-col'>
                        <input
                            type="name"
                            name="name"
                            placeholder='Name'
                            className='w-full text-black bg-transparent py-4 border-b border-black focus:outline-none'
                        />
                    </div>
                    <div className='w-full flex flex-col'>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            className='w-full text-black bg-transparent py-4 border-b border-black focus:outline-none'
                        />
                    </div>
                    <div className='w-full flex flex-col'>
                        <input
                            type="text"
                            name="photo"
                            placeholder='Photo URL'
                            className='w-full text-black bg-transparent py-4 border-b border-black focus:outline-none'
                        />
                    </div>
                    <div className='w-full flex flex-col'>
                        <input
                            type="text"
                            name="password"
                            placeholder='Password'
                            className='w-full text-black bg-transparent py-4 border-b border-black focus:outline-none'
                        />
                    </div>

                    <div className='w-full flex items-center justify-between mt-5'>
                        <div className='w-full flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2' name="" id="" />
                            <p className='text-sm'>Remember me </p>
                        </div>
                        <p className='text-sm font-medium whitespace-nowrap cursor-pointer '>Forget Password ?</p>
                    </div>

                </div>
                <div className='w-full flex items-center justify-center mt-5'>
                    <p className='text-sm font-normal text-[#060606]'>Do not have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span> </p>
                </div>
                <div className='w-full flex flex-col my-4'>
                    <button className='w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Register </button>
                    <button className='w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Login  </button>
                </div>
                <div className='w-full flex items-center justify-center relative py-2'>
                    <div className='w-full h-[1px] bg-black'></div>
                    <p className='text-lg text-black/80 absolute bg-[#f5f5f5]'>or</p>
                </div>
                <button className='w-full bg-white font-semibold my-2 text-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                    <img src={googleIcon} className='h-6 mr-2' alt="" />
                    Sign In With Google </button>
            </div>


        </div>
    );
};

export default Register;