import React, { useEffect, useState } from 'react';
import './PopularClasses.css';

import Class from './Class';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then((res) => res.json())
            .then((data) => setClasses(data.slice(0, 6)));
    }, []);

    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-10">
                Popular <span className="text-[#55d6af]">Classes</span>
            </h2>
            <div className="cards">
                {classes.map((classs) => (
                    <Class key={classs.id} classs={classs} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn">show more</button>
            </div>
        </div>
    );
};

export default PopularClasses;
