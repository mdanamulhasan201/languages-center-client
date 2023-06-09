import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../../../../public/avatar2.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import { toast } from 'react-hot-toast'
import { FaCartPlus } from 'react-icons/fa'
import useCart from '../../../hook/useCart'

const DropDown = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out Successful')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className='relative z-50'>
            <div className='flex flex-row items-center gap-3'>
                <button className='btn btn-sm bg-[#55d6af]'>
                    <FaCartPlus className='text-2xl'></FaCartPlus>
                    <p className='font-bold'> +{cart?.length || 0}</p>
                </button>
                <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                    Dashboard
                </div>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <img
                            className='rounded-full'
                            src={user && user.photoURL ? user.photoURL : Avatar}
                            alt='profile'
                            height='30'
                            width='30'
                        />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        {user ? (
                            <div
                                onClick={handleLogOut}
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                            >
                                Logout
                            </div>
                        ) : (
                            <>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/signup'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown