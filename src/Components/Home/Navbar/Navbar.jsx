import React from 'react';
import {assets} from '../../../assets/assets'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-12  py-3 font-serif'>
            <img src={assets.logo} alt="" />
            <div>
                <ul className='flex gap-3'>
                    <Link to={'/'}><li className='cursor-pointer'>home</li></Link>
                    <Link to={'/menu'}><li className='cursor-pointer'>menu</li></Link>
                    <Link to={'/mobile-app'}><li className='cursor-pointer'>mobile-app</li></Link>
                    <Link to={'/contact'}><li className='cursor-pointer'>contact-us</li></Link>
                </ul>
            </div>
            <div className='flex gap-3'>
                {/* <img src={assets.search_icon} className='h-[40px] w-[40px] p-1 cursor-pointer  hover:border-2 rounded-full hover:bg-gray-200 ' alt="" /> */}
                <img src={assets.basket_icon} className='h-[40px] w-[40px] p-1 cursor-pointer hover:border-2 rounded-full hover:bg-gray-200 ' alt="" />
                <div>
                    <Link to={'/signup'}><button className='px-3 py-1 border-2 rounded-2xl cursor-pointer hover:bg-gray-200'>sign-in</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;