import React, { useContext, useState } from 'react';
import {assets} from '../../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../ContextApi/Context';
import { getAuth, signOut } from 'firebase/auth';
import appe from '../../../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [update, setupdate] = useState(true)
    console.log(update)
    const dynamic=()=>{
        setupdate(!update)
    }
    const Auth= getAuth(appe)
    const {value, setvalue} = useContext(StoreContext)
    // console.log(value)
    const signout=()=>{
        signOut(Auth)
        .then(result=>{
            // const user =result.user
            toast('user logout')
            // console.log(user)
            setvalue(null)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            {/* Large Device */}
            <div className='hidden  md:flex justify-between items-center px-12 py-3 font-serif  '>
            <Link to={'/'}><img src={assets.logo} alt="" /></Link>
            <div>
                <ul className='flex gap-3'>
                    <Link to={'/'}><li className='cursor-pointer'>Home</li></Link>
                    <Link to={'/menu'}><li className='cursor-pointer'>Menu</li></Link>
                    <Link to={'/mobile-app'}><li className='cursor-pointer'>Mobile-App</li></Link>
                    <Link to={'/contact'}><li className='cursor-pointer'>Contact-Us</li></Link>
                </ul>
            </div>
            <div className='flex gap-3'>
                {/* <img src={assets.search_icon} className='h-[40px] w-[40px] p-1 cursor-pointer  hover:border-2 rounded-full hover:bg-gray-200 ' alt="" /> */}
                <Link to={'/cart'}><img src={assets.basket_icon} className='h-[40px] w-[40px] p-2 cursor-pointer hover:border-1 rounded-full hover:bg-gray-200 ' alt="" /></Link>
                <div>
                   {
                    value ? <button onClick={signout} className='px-3 py-1 border-1 rounded-2xl cursor-pointer hover:bg-gray-200'>Logout</button> :  <Link to={'/signup'}><button className='px-3 py-1 border-1 rounded-2xl cursor-pointer hover:bg-gray-200'>sign-in</button></Link>
                   }
                </div>
            </div>
        </div>
        {/* Small Device */}
        <div className='flex justify-between items-center px-3  py-3 font-serif   md:hidden'>
            <Link to={'/'}><img src={assets.logo} className='w-50px' alt="" /></Link>
           
            <div className='flex gap-3'>
                {/* <img src={assets.search_icon} className='h-[40px] w-[40px] p-1 cursor-pointer  hover:border-2 rounded-full hover:bg-gray-200 ' alt="" /> */}
                <Link to={'/cart'}><img src={assets.basket_icon} className='h-[40px] w-[40px] p-2 cursor-pointer hover:border-1 rounded-full hover:bg-gray-200 ' alt="" /></Link>
                 <button onClick={()=>dynamic()}>{update? <GiHamburgerMenu/>:<ImCross/> }</button>
                
            </div>

        <div className=' absolute w-full h-screen top-[84px] right-[12px] flex justify-end '>
             <div className={`    bg-gray-900 px-8 py-5 w-[50%] h-screen rounded-r-lg text-white relative  ${update? 'hidden':''}`}>
                <ul className='flex flex-col  gap-2 mb-5 text-[18px] font-serif '>
                    <Link to={'/'}><li className='cursor-pointer'>Home</li></Link>
                    <Link to={'/menu'}><li className='cursor-pointer'>Menu</li></Link>
                    <Link to={'/mobile-app'}><li className='cursor-pointer'>MobileApp</li></Link>
                    <Link to={'/contact'}><li className='cursor-pointer w-full'>Contact</li></Link>
                </ul>
                <div>
                   {
                    value ? <button onClick={signout} className='px-3 py-1 border-1 rounded-2xl cursor-pointer hover:bg-gray-200'>Logout</button> :  <Link to={'/signup'}><button className='px-3 py-1 border-1 rounded-2xl cursor-pointer hover:bg-gray-200'>sign-in</button></Link>
                   }
                </div>
            </div>
           </div>

        </div>
        </div>
    );
};

export default Navbar;