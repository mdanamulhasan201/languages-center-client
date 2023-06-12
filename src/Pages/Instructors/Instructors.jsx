import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Allnstructor from './AllInstructor';
import InstructorUse from '../../hook/InstructorUse';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PopularInstructors = () => {

    const [users] = InstructorUse()



    return (
        <>
         <Helmet>
                <title>Language Center | All Instructor</title>

            </Helmet>
            <div className='-z-50' style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/RTjFpG0/Blue-and-Purple-Simple-Modern-English-Course-Banner-1.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="flex items-center p-5 justify-start h-full ">
                    <div className="text-center md:ml-36">
                        <p className='text-white text-start text-xl font-bold'>Online Class</p>
                        <p className='text-white text-start text-6xl font-bold'>
                            Foreign Language
                            <br />
                            Courses
                        </p>
                        <p className='text-gray-200 text-start text-2xl mt-5'>Learn Language with us is easy and fun!</p>

                        <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">subscribe Now</button>
                    </div>
                </div>

            </div>

           
            <h1 className='text-center text-4xl font-bold my-8'>Selected <span className='text-[#55d6af]'>Instructor</span> </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 my-16 lg:grid-cols-4 sm:grid-cols-2 gap-8 ">
                {users.map((instructor) => (
                    <Allnstructor key={instructor._id} instructor={instructor} />
                ))}
            </div>
            <div className="flex justify-center">
                <Link to='/instructors'>
                    <button className="btn my-5">
                        See More <FaArrowRight />
                    </button>
                </Link>
            </div>
        </>
    );
};

export default PopularInstructors;
