import React from 'react';
import './PopularInstructor.css'

const Instructorss = ({ instructor }) => {
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure className="image-container">
                <img src={instructor.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {instructor.instructor}
                    <div className="badge bg-[#55d6af]">{instructor.language}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <button className='justify-center btn btn-sm my-2 bg-[#55d6af]'>Details</button>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{instructor.courses}+ Courses</div>
                    <div className="badge badge-outline">rating {instructor.rating}</div>
                </div>
            </div>
        </div>
    );
};

export default Instructorss;
