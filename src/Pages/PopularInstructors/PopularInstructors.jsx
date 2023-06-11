
import './PopularInstructor.css';
import Instructorss from './Instructorss';
import { FaArrowRight } from 'react-icons/fa';
// import { useQuery } from '@tanstack/react-query';
import InstructorUse from '../../hook/InstructorUse';

const PopularInstructors = () => {
 const [users] = InstructorUse()
 const slicedClasses = users.slice(0, 6); 

   
    return (
        <>
            <h2 className="text-center text-4xl font-bold my-10">
                Popular <span className="text-[#55d6af]">Instructors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8 ">
                {slicedClasses.map((instructor) => (
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