import React from 'react';
import './PopularInstructor.css';
import '@smastrom/react-rating/style.css'
import { FaBook, FaArrowRight } from "react-icons/fa";

const Instructorss = ({ instructor }) => {
    if (instructor.role !== 'instructor') {
        return null; // If the role is not 'instructor', don't render anything
    }

    return (
        <div className="card md:w-80 md:h-96 mx-auto bg-base-100 shadow-xl">
            <figure className="image-container">
                <img src={instructor.photo} className='rounded-md h-48 w-48'  alt="photo" />
            </figure>
            <hr className='my-2' />
            <div className="card-body text-md font-semibold text-gray-600">
                <p><span className=' text-md font-bold'>Name:</span> {instructor.name}</p>
                <p>{instructor.email}</p>
                <h2>{instructor.role}</h2>
                <hr className='my-2' />
                <button className="justify-center btn btn-sm my-2 bg-[#55d6af]">
                        Details <FaArrowRight />
                    </button>

                {/* <div className="card-actions justify-between">
                    <div className="badge badge-outline"> <FaBook className='mr-1'></FaBook> {instructor.courses}+ Courses</div>
                    <div className=""><Rating
                        style={{ maxWidth: 120 }}
                        value={instructor.rating}
                        readOnly
                    /></div>
                </div> */}
            </div>
        </div>
    );
};

export default Instructorss;