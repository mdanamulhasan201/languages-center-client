import React from 'react';
import './PopularInstructor.css'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaBook, FaArrowRight } from "react-icons/fa";

const Instructorss = ({ instructor }) => {
    return (
        <div className="card md:w-96 mx-auto bg-base-100 shadow-xl">
            <figure className="image-container">
                <img src={instructor.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">
                        {instructor.instructor}

                        <div className="badge bg-[#55d6af]">{instructor.language}</div>
                    </h2>

                    <div>
                        <div className="badge badge-secondary">{instructor.popular}</div>
                    </div>
                </div>

                <p>If a dog chews shoes whose shoes does he choose?</p>
                <button className='justify-center btn btn-sm my-2 bg-[#55d6af]'>Details <FaArrowRight /> </button>
                <hr className='my-2' />
                <div className="card-actions justify-between">
                    <div className="badge badge-outline"> <FaBook className='mr-1'></FaBook> {instructor.courses}+ Courses</div>
                    <div className=""><Rating
                        style={{ maxWidth: 120 }}
                        value={instructor.rating}
                        readOnly
                    /></div>
                </div>
            </div>
        </div>
    );
};

export default Instructorss;
