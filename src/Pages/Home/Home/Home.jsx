import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Language Center | Home</title>

            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home