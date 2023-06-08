import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { IoIosPeople } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


const Class = ({ classs }) => {
    const { language, price, duration, image, deadline, enrolled, instructor, title, rating } = classs
    return (

        <div  className="card mx-auto shadow-xl">
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