import React from 'react';
import { assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';
const MobileApp = () => {
    return (
        <div className='my-10 '>
            <h1 className='text-center text-xl sm:text-3xl font-semibold'>For Better Experence Downlord <br /> Tomato App</h1>
           <div className='flex justify-center gap-5 my-5'>
             <Link to={'https://app.creativeitinstitute.com/student'} ><img src={assets.play_store} className='w-[200px] hover:shadow-2xl' alt="" /></Link>
            <Link to={'https://app.creativeitinstitute.com/student'} ><img src={assets.app_store} className='w-[200px] hover:shadow-2xl' alt="" /></Link>
           </div>
        </div>
    );
};

export default MobileApp;