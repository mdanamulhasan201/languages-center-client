import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { IoIosPeople } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
// import InstructorUse from '../../../hook/InstructorUse';


const Class = ({ classs }) => {
    const { language, price, duration, displayName, image, seats, enrolled, description, photoURL, rating } = classs


    return (

        <div  className="card mx-auto  shadow-xl">
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

                <div className='flex'>
                   <div>
                        <button className="btn btn-sm mb-5 ms-4">Get Enrolled<FaArrowRight /> </button>
                    </div>
                    <div>
                        <Link to='/'>
                            <button className="btn btn-sm bg-[#55d6af] mb-5 ms-4">
                                <div className='flex'> 
                                    Learn More 
                                    <div><FaArrowRight /></div>
                                </div>  </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;