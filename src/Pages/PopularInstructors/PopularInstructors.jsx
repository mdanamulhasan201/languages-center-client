import React, { useEffect, useState } from 'react';
import './PopularInstructor.css'
import Instructorss from './Instructorss';

const PopularInstructors = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('/instructor.json')
            .then((res) => res.json())
            .then((data) => setInstructor(data.slice(0, 6)));
    }, []);
    return (
        <>
            <h2 className='text-center text-4xl font-bold my-10'>Popular <span className='text-[#55d6af]'>Instructors</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3">

                {
                    instructors.map(instructor =>
                        <Instructorss
                            key={instructor.id}
                            instructor={instructor}
                        ></Instructorss>
                    )
                }

            </div>
            <div className="flex justify-center">
                <button className="btn my-5">show more</button>
            </div>
        </>

    );
};

export default PopularInstructors;