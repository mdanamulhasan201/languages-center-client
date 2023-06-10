
import './PopularInstructor.css';
import Instructorss from './Instructorss';
import { FaArrowRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

const PopularInstructors = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });

   
    return (
        <>
            <h2 className="text-center text-4xl font-bold my-10">
                Popular <span className="text-[#55d6af]">Instructors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8 ">
                {users.map((instructor) => (
                    <Instructorss key={instructor._id} instructor={instructor} />
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