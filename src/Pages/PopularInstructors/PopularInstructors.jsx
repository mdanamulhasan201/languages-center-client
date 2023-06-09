import React, { useEffect, useState } from 'react';
import './PopularInstructor.css'
import Instructorss from './Instructorss';
import { FaArrowRight } from "react-icons/fa";

const PopularInstructors = () => {
    const [instructors, setInstructor] = useState([]);


    
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then((res) => res.json())
            .then((data) => setInstructor(data.slice(0, 6)));
    }, []);
    return (
        <>
            <h2 className='text-center text-4xl font-bold my-10'>Popular <span className='text-[#55d6af]'>Instructors</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">

                {
                    instructors.map(instructor =>
                        <Instructorss
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructorss>
                    )
                }

            </div>
            <div className="flex justify-center">
                <button className="btn my-5">show more<FaArrowRight/> </button>
            </div>
        </>

    );
};

export default PopularInstructors;