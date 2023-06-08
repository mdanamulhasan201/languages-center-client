import React from 'react';
import TabAllClass from './TabAllClass';

const AllClasses = () => {
    return (
        <>
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

            <h3 className='text-black text-center text-2xl my-10 font-bold'>Choose Your <span className='text-[#55d6af]'>Language</span></h3>


           <TabAllClass></TabAllClass>
        </>

    );
};

export default AllClasses;