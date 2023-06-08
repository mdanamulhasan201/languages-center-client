import React, { useEffect, useState } from 'react';
import './PopularClasses.css';
import { FaArrowRight } from "react-icons/fa";
import Class from './Class';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then((res) => res.json())
      .then((data) => setClasses(data.slice(0, 6)));
  }, []);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10">
        Popular <span className="text-[#55d6af]">Classes</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        {classes.map((classs) => (
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
