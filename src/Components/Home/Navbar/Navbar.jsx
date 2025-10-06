import React, { useContext } from 'react';
import {assets} from '../../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../ContextApi/Context';
import { getAuth, signOut } from 'firebase/auth';
import appe from '../../../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
const Navbar = () => {
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
        <div className='flex justify-between items-center px-12  py-3 font-serif'>
            <Link to={'/'}><img src={assets.logo} alt="" /></Link>
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
                <Link to={'/cart'}><img src={assets.basket_icon} className='h-[40px] w-[40px] p-1 cursor-pointer hover:border-2 rounded-full hover:bg-gray-200 ' alt="" /></Link>
                <div>
                   {
                    value ? <button onClick={signout} className='px-3 py-1 border-1 rounded-2xl cursor-pointer hover:bg-gray-200'>Logout</button> :  <Link to={'/signup'}><button className='px-3 py-1 border-1 rounded-2xl cursor-pointer hover:bg-gray-200'>sign-in</button></Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default Navbar;