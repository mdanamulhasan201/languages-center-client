import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { TbFidgetSpinner } from 'react-icons/tb';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
// import img from '../../assets/images/login.jpg';

const Login = () => {
    const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
        useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate()
    const emailRef = useRef()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // handle toggle password visibility
    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };


    // handle submit
    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('Login Successfully')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
                setLoading(false)
            })
    }

    return (
        <div className='flex max-w-screen-2xl items-center min-h-screen justify-around'>
            <div className='hidden sm:block sm:w-1/2'>
                <img src='https://i.ibb.co/hXnVXBX/2011-i301-038-Language-courses-isometric-composition-01.jpg' alt='' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10  bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>Sign in to access your account</p>
                </div>
                <form onSubmit={handleLogin}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Please Enter Your Email'
                                className='w-full px-3 py-2 border rounded-md focus:outline-[#55D6AF] bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md focus:outline-[#55D6AF] bg-gray-200 text-gray-900 pr-10'
                                />
                                <button
                                    type='button'
                                    onClick={handleTogglePassword}
                                    className='absolute inset-y-0 right-0 px-2 flex items-center  text-[#55D6AF] focus:outline-[#55D6AF]'
                                >
                                    {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='bg-[#55D6AF] w-full rounded-md py-3 text-white'
                        >
                            {loading ? (
                                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </form>

                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>Login with social accounts</p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />
                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don't have an account yet?
                    <Link to='/signup' className='hover:underline hover:text-rose-500 text-gray-600'>
                        Sign up
                    </Link>
                    .
                </p>
            </div>

        </div>
    );
};

export default Login;
