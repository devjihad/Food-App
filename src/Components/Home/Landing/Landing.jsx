import React from 'react';
import { assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
    
         <div className='bg-cover bg-center min-h-[300px]  rounded-2xl mt-5 pl-2  md:pl-10' style={{backgroundImage:`url(${assets.header_img})`}}>
            <h1 className='text-4xl sm:text-5xl font-semibold font-serif text-white pt-5 sm:pt-20  leading-12 sm:leading-15'>Order your <br />favorite food here</h1>
            <p className='text-white text-[12px]  md:leading-4 font-serif'>Food is vital for survival, giving energy and nutrients. It includes fruits, vegetables,<br /> grains, meat, and dairy. Healthy eating supports growth, strength, and well-being, <br /> making food an important part of life.</p>

            <Link to={'/menu'}><button className='px-4 py-1 bg-white rounded-2xl text-[12px ] font-serif mt-5 hover:bg-gray-200 mb-5 sm:mb-10'>View Menu</button></Link>
        </div>
    
    );
};

export default Landing;