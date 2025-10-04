import React from 'react';
import { assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
    
         <div className='bg-cover bg-center min-h-[350px]  rounded-2xl mt-5  pl-10' style={{backgroundImage:`url(${assets.header_img})`}}>
            <h1 className='text-5xl font-semibold font-serif text-white pt-20  leading-15'>Order your <br />favorite food here</h1>
            <p className='text-white text-[12px] leading-4 font-serif'>Food is vital for survival, giving energy and nutrients. It includes fruits, vegetables,<br /> grains, meat, and dairy. Healthy eating supports growth, strength, and well-being, <br /> making food an important part of life.</p>

            <Link to={'/menu'}><button className='px-4 py-1 bg-white rounded-2xl text-[12px ] font-serif mt-5 hover:bg-gray-200'>View Menu</button></Link>
        </div>
    
    );
};

export default Landing;