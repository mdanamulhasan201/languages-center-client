import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Class = ({ classs }) => {
    const { language, price, duration, image, deadline, enrolled, instructor, title, rating } = classs
    return (

        <div href="" className="card shadow-2xl">
            <img src="https://i.ibb.co/RcDtD4X/hand-drawn-world-book-day-concept-23-2148481517.jpg" className="card__image" alt="" />
            <div className="card__overlay">
                <div className="card__header">
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

                            <div className='ms-2'>

                                Time{duration}
                            </div>
                        </div>

                        <div className='flex justify-around my-2'>
                            <div>   <h2 className='mr-4'>enroll {enrolled}</h2></div>
                            <div>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={rating}
                                    readOnly
                                />

                            </div>
                        </div>


                    </div>
                </div>
                <p className="card__description">{title}</p>

                <div className='flex'>
                    <div>
                        <button className="btn btn-sm mb-5 ms-5">Get Enrolled</button>
                    </div>
                    <div>
                        <Link to='/'>
                            <button className="btn btn-sm bg-[#55d6af] mb-5 ms-5">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;