
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

import logo from '../../../assets/logo/toycars.jpg'
import { AuthContext } from '../../../providers/AuthProviders';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('user', user);
    const handleLogOut = () => {
        logOut()
        //console.log('clicked');

    }
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (

        <div className='px-4 py-5 mx-auto bg-base-200 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='HouseOfToyCars'
                    title='HouseOfToyCars'
                    className='inline-flex items-center'
                >
                    <div className='flex items-center justify-center w-12 h-12 rounded-full'>
                        <img src={logo} alt="" />
                    </div>
                    <span className='ml-2 text-xl font-bold tracking-wide bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text '>
                        House Of Toy Cars
                    </span>
                </Link>

                <div className='items-center hidden space-x-8 lg:flex'>

                    <NavLink
                        to='/'
                        aria-label='Home'
                        title='Home'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to='/shop'
                        aria-label='Shop'
                        title='Shop'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Shop
                    </NavLink>

                    <Link to='/cart' aria-label='Cart' title='Cart'>

                    </Link>

                </div>
                {
                    user ? <div className=' hidden space-x-8 lg:flex '>


                        <div>
                            <div>
                                <img className='rounded-full' style={{ height: '40px', width: '40px' }} src={user.photoURL}
                                    alt={user.displayName} />
                             
                            </div>
                        </div>
                        <NavLink className='mt-2'>
                            <button
                                onClick={handleLogOut}
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                LogOut
                            </button>
                        </NavLink>

                    </div> :
                        <div className='hidden space-x-8 lg:flex gap-5'>

                            <NavLink
                                to='/login'
                                aria-label='Login'
                                title='Login'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Login
                            </NavLink>

                            <NavLink
                                to='/register'
                                aria-label='Register'
                                title='Register'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Register
                            </NavLink>

                        </div>
                }

                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='HeroGadget'
                                            title='HeroGadget'
                                            className='inline-flex items-center'
                                        >
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full '>
                                                <img className='h-[18px] w-[18px]' src={logo} alt="" />
                                            </div>
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                HTC
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav className='flex flex-col'>
                                    <div className='items-center  space-x-8 '>

                                        <NavLink
                                            to='/'
                                            aria-label='Home'
                                            title='Home'
                                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                                        >
                                            Home
                                        </NavLink>


                                        <NavLink
                                            to='/shop'
                                            aria-label='Shop'
                                            title='Shop'
                                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                                        >
                                            Shop
                                        </NavLink>

                                        <Link to='/cart' aria-label='Cart' title='Cart'>

                                        </Link>

                                    </div>
                                    {
                                        user ? <div className='flex gap-5'>

                                            <NavLink
                                                to='/register'
                                                aria-label='Register'
                                                title='Register'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >
                                                Photo
                                            </NavLink>
                                            <NavLink>
                                                <button
                                                    onClick={handleLogOut}
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    LogOut
                                                </button>
                                            </NavLink>

                                        </div> :
                                            <div className='flex gap-5'>

                                                <NavLink
                                                    to='/login'
                                                    aria-label='Login'
                                                    title='Login'
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    Login
                                                </NavLink>

                                                <NavLink
                                                    to='/register'
                                                    aria-label='Register'
                                                    title='Register'
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    Register
                                                </NavLink>

                                            </div>
                                    }
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Header;