import React from 'react';
import { Link } from 'react-router-dom';

const Instructorss = ({ instructor }) => {
    return (
    
            <div class="box-item ">
                <div class="flip-box">
                    <div class="flip-box-front text-center" style={{ height: '550px', backgroundImage: `url("https://www.devsnews.com/template/micoach/micoach/assets/img/team/01.jpg")` }}>
                        <div class="inner color-white mt-48 bg-base-200 ">
                            <h3 class="text-2xl font-bold text-black text-left">{instructor.instructor}</h3>
                            <p className='text-gray-400 text-left'>{instructor.language}</p>
                            <hr className=' border-2 text-red-500' />
                            <p className='text-black'>courses: { instructor.courses}</p>
                            
                        </div>
                    </div>


                    <div class="flip-box-back text-center" style={{ height: '550px', backgroundImage: `url("https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80")` }}>
                        <div class="inner color-white">
                            <h3 class="flip-box-header">Custom Domains</h3>
                            <p>A short sentence describing this callout is.</p>
                           <Link to='/instructorDetails'>
                           <button class="flip-box-button">Details</button>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
      
    );
};

export default Instructorss;