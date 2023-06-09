import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { ScaleLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';


const SignUp = () => {
    const { loading, setLoading, signInWithGoogle } = useContext(AuthContext);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [showPassword, setShowPassword] = useState(false);


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError,
    } = useForm();


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
                toast.success('Login Successfully')
            })
            .catch((error) => {
                setError('Valid email and password', error);
            });
    }


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                toast.success('Login Successful')
                navigate(from, { replace: true })

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {

                                }
                            })
                    })
                    .catch(error => {
                        toast.error(error.message)
                    })

            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)

            })
    }


    // handle toggle password visibility
    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <>
            <Helmet>
                <title>Language Center | SignUp</title>
            </Helmet>
            <div className='flex max-w-screen-2xl items-center min-h-screen justify-around'>

                <div className='hidden sm:block sm:w-1/2'>
                    <img
                        src='https://i.ibb.co/hXnVXBX/2011-i301-038-Language-courses-isometric-composition-01.jpg'
                        alt=''
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10  bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Please Create An Account</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    {...register('name', { required: true, pattern: /[A-Za-z,.]+$/ })}
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Your Name'
                                    className='w-full px-3 py-2 border rounded-md focus:outline-[#55D6AF] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {errors.name?.type === 'pattern' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Type Letters Only
                                    </p>
                                )}
                                {errors.name?.type === 'required' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Name is required
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    {...register('email', { required: true })}
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder=' Your Email'
                                    className='w-full px-3 py-2 border rounded-md focus:outline-[#55D6AF] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {errors.email?.type === 'required' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Email is required
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor='photo' className='block mb-2 text-sm'>
                                    Photo URL
                                </label>
                                <input
                                    {...register('photo', { required: true })}
                                    type='text'
                                    name='photo'
                                    id='photo'
                                    placeholder='Photo URL'
                                    className='w-full px-3 py-2 border rounded-md focus:outline-[#55D6AF] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {errors.photo?.type === 'required' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Photo URL is required
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                                <div className='relative'>
                                    <input
                                        {...register('password', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 15,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                                        })}
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        id='password'
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
                                    {errors.password?.type === 'required' && (
                                        <p className='text-red-600 mt-2' role='alert'>
                                            Password is required
                                        </p>
                                    )}
                                    {errors.password?.type === 'minLength' && (
                                        <p className='text-red-600 mt-2' role='alert'>
                                            Password must be at least 6 characters
                                        </p>
                                    )}
                                    {errors.password?.type === 'maxLength' && (
                                        <p className='text-red-600 mt-2' role='alert'>
                                            Password must be less than 15 characters
                                        </p>
                                    )}
                                    {errors.password?.type === 'pattern' && (
                                        <p className='text-red-600 mt-2' role='alert'>
                                            Password must have at least one capital letter and one special character
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor='confirm' className='text-sm mb-2'>
                                    Confirm Password
                                </label>
                                <div className='relative'>
                                    <input
                                        {...register('confirm', { required: true })}
                                        type={showPassword ? 'text' : 'password'}
                                        name='confirm'
                                        id='confirm'
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
                                {watch('password') !== watch('confirm') && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Passwords do not match
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='bg-[#55D6AF] w-full rounded-md py-3 text-white'
                            >
                                {loading ? (
                                    <ScaleLoader
                                        color='#ffffff'
                                        height={15}
                                        width={2}
                                        size={5}
                                    />
                                ) : (
                                    'Sign UP'
                                )}
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FcGoogle size={32} />
                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?
                        <Link
                            to='/login'
                            className='hover:underline hover:text-[#55D6AF] text-gray-600'
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>


    );
};

export default SignUp;
