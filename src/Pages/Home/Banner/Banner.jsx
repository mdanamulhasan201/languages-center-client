import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Banner = () => {
    return (
        <div>
            <Carousel
                autoPlay
                interval={3000}
                showThumbs={false}
                infiniteLoop
                style={{ height: '680px' }}
            >
                <div  className='-z-50' style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/bBL095c/bg-1.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center p-5 justify-start h-full ">
                        <div className="text-center md:ml-36">
                            <p className='text-white text-start text-6xl font-bold'>
                                Study Languages
                                <br />
                                Having Fun!
                            </p>
                            <p className='text-gray-200 text-start text-2xl mt-5'>Our Courses Are Taught At Beginner to Advanced
                                <br />
                                Levels on a Year Round Basic</p>

                            <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                        </div>
                    </div>
                </div>

                <div  style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/t3YfNRY/bg-2.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center justify-start  p-5 h-full">
                        <div className="text-center md:ml-36">
                            <p className='text-white text-start text-5xl font-bold'>

                                Putting Children First.
                                <br />
                                Preparing Children For
                                <br />
                                Success In Life</p>
                            <p className='text-gray-200 text-2xl mt-5 text-start'>Our Courses Are Taught At Beginner to Advanced
                                <br />
                                Levels on a Year Round Basic</p>
                            <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                        </div>
                    </div>
                </div>

                <div style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/LncMkCh/bg-3.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center justify-center  p-5 h-full">
                        <div className="text-center md:ml-36">
                            <p className='text-white text-6xl text-start font-bold'>
                                Every student matters,
                                <br />
                                every moment counts</p>
                            <p className='text-gray-200 text-2xl mt-5 text-start'>Our Courses Are Taught At Beginner to Advanced
                                <br />
                                Levels on a Year Round Basic</p>
                            <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                        </div>
                    </div>
                </div>

                <div style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/Cntynnp/bg-4.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center justify-start  p-5 h-full">
                        <div className="text-center md:ml-36">
                            <p className='text-start text-white text-6xl font-bold'>
                                We Are Trusted
                                <br />
                                Institution!</p>
                            <p className='text-gray-200 text-2xl mt-5 text-start'>We offer Foreign Language
                                <br />
                                Basic to Advance Level</p>
                            <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                        </div>
                    </div>
                </div>
            </Carousel>

           
        </div>
    );
};

export default Banner;
