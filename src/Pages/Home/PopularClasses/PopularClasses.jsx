
import './PopularClasses.css';
import { FaArrowRight } from "react-icons/fa";
import Class from './Class';
import { Link } from 'react-router-dom';
import UseClasses from '../../../hook/UseClasses';

const PopularClasses = () => {
  const [classes] = UseClasses()
  const slicedClasses = classes.slice(0, 6); 

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10">
        Popular <span className="text-[#55d6af]">Classes</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-2  md:grid-cols-3 lg:grid-cols-4 gap-8 mb-5">
        {slicedClasses.map((classs) => (
          <Class key={classs.id} classs={classs} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to='/allClasses'>
          <button className="btn">All Classes <FaArrowRight /></button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
