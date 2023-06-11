import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
// import { useQuery } from '@tanstack/react-query';
import Allnstructor from './AllInstructor';
import InstructorUse from '../../hook/InstructorUse';

const PopularInstructors = () => {
    
    const [users] = InstructorUse()
    


    return (
        <>
            <h2 className="text-center text-4xl font-bold my-10">
               All <span className="text-[#55d6af]">Instructors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8 ">
                {users.map((instructor) => (
                    <Allnstructor key={instructor._id} instructor={instructor} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn my-5">
                    show more <FaArrowRight />
                </button>
            </div>
        </>
    );
};

export default PopularInstructors;
