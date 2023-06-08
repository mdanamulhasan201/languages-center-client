import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AllInstructor from './AllInstructor';

const Instructors = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then((res) => res.json())
            .then((data) => setInstructor(data));
    }, []);
    return (
        <div>
            <Helmet>
                <title>Language Center | All Instructor</title>

            </Helmet>
            <h2 className='text-center text-4xl font-bold my-10'>All <span className='text-[#55d6af]'>Instructors</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">

                {
                    instructors.map(instructor =>
                        <AllInstructor
                            key={instructor.id}
                            instructor={instructor}
                        ></AllInstructor>
                    )
                }

            </div>

        </div>
    );
};

export default Instructors;