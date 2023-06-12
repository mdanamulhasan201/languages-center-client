import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import './AllCard.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import useCart from '../../hook/useCart';

const AllCard = ({ classs }) => {
    const { language, price, displayName, image, photoURL, seats, instructor, description, rating, _id } = classs
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCart();


    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = classs => {
        console.log(classs)
        if (user && user.email) {
            const addToCart = { classsId: _id, language, instructor: displayName,  price, image, email: user.email }
            fetch(' https://language-center-server.vercel.app/carts', {
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
            <img src={image} className="card__image" alt="" />
            <div className="card__overlay">
                <div className="card__header justify-center">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    <img className="h-96 card__thumb" src={photoURL} alt="" />
                    <div className="card__header-text">

                        <div className='flex justify-around'>
                            <div>
                                <div className=' badge bg-[#55d6af]'>{language}</div>
                            </div>

                            <div className='ms-2 badge badge-secondary '> $ {price}</div>
                        </div>


                        <div> <h3 className="card__title mt-5">{displayName}</h3></div>



                        <div className='flex justify-around my-2 items-center'>
                            <div className='flex'>
                                <div className='font-bold mr-1'>Seats:</div>

                                <h2 className='mr-4'> {seats}</h2>
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
                <p className="card__description text-2xl font-bold">{description}</p>

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
                
            </div>

        </div>
    );
};

export default AllCard;