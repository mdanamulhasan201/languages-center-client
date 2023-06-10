import React from 'react';
import { HashLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div
            className='
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      '
        >
            <HashLoader size={80} color='#55d6af' />
        </div>
    );
};

export default Loader;