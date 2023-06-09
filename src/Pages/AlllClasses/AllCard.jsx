import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { IoIosPeople } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import './AllCard.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import useCart from '../../hook/useCart';

const AllCard = ({ classs }) => {
    const { language, price, duration, image, deadline, enrolled, instructor, title, rating, _id } = classs
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCart();

    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = classs => {
        console.log(classs)
        if (user && user.email) {
            const addToCart = { classsId: _id, language, instructor, price, image, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addToCart)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        toast.success('Add to Cart Successful')
                    }
                })
        }
        else {
            toast.error('Please login to Enrolled the language')
            navigate('/login', { state: { from: location } })
        }
    }
    return (
        <div className="card mx-auto my-5 shadow-xl">
            <img src="https://i.ibb.co/RcDtD4X/hand-drawn-world-book-day-concept-23-2148481517.jpg" className="card__image" alt="" />
            <div className="card__overlay">
                <div className="card__header justify-center">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                    <div className="card__header-text">

                        <div className='flex justify-around'>
                            <div> <h3 className="card__title ">{instructor}</h3></div>
                            <div className='ms-2 badge badge-secondary '> $ {price}</div>
                        </div>

                        <div className='flex justify-around'>
                            <div>
                                <div className=' badge bg-[#55d6af]'>{language}</div>
                            </div>

                            <div className='ms-2 flex items-center'>

                                <IoIosTime className='text-xl'></IoIosTime>
                                {duration}hr
                            </div>
                        </div>

                        <div className='flex justify-around my-2 items-center'>
                            <div className='flex'>
                                <div className='text-2xl mr-1'><IoIosPeople></IoIosPeople></div>

                                <h2 className='mr-4'> {enrolled}</h2>
                            </div>
                            <div>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating}
                                    readOnly
                                />

                            </div>
                        </div>


                    </div>
                </div>
                <p className="card__description text-2xl font-bold">{title}</p>

                <div className='flex justify-around'>
                    <div>
                        <button onClick={() => handleAddToCart(classs)} className="btn btn-sm mb-5 ms-4">
                            <FaShoppingCart className='text-xl' />
                            Add to Cart</button>
                    </div>


                    <div>
                        <Link to='/'>
                            <button className="btn btn-sm  mb-5 ms-4">
                                <div className='flex'>
                                    Learn More
                                    <div><FaArrowRight /></div>
                                </div>
                            </button>
                        </Link>
                    </div>


                </div>
                <div>
                    <button className="btn bg-[#55d6af] btn-wide mb-5 ms-4">

                        Enrolled Now<FaArrowRight />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AllCard;