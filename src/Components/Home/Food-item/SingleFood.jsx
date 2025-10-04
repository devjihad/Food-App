import React, { useContext, } from 'react';
import { FaStar } from "react-icons/fa";
import { assets } from '../../../assets/assets';
import { StoreContext } from '../../ContextApi/Context';


const SingleFood = ({list}) => {
    const { count,AddTocard,Remove} = useContext(StoreContext)
    
    const {_id, name, description,image,price}=list
    console.log(_id)
    
    return (
        <div className=' w-[200px] bg-gray-100 rounded-2xl mb-10 shadow-2xl'>
            <div className='relative'>
                <img src={image} alt="" className='h-[150px] w-[200px] flex justify-center rounded-t-2xl' />
                {
                    !count[_id]
                    ? <img className='absolute w-[30px] bottom-[10px] right-[10px] rounded-full' src={assets.add_icon_white} onClick={()=>AddTocard(_id)}/>
                    :<div className='absolute bottom-[10px] right-[10px] flex items-center gap-2 p-1 bg-white rounded-full text-xl'>
                        <img className='w-[22px]' src={assets.remove_icon_red} onClick={()=>Remove(_id)}/>
                        <p>{count[_id]}</p>
                        <img className='w-[22px]' src={assets.add_icon_green} onClick={()=>AddTocard(_id)}/>
                    </div>
                }

            </div>
            <div className='px-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl py-1'>{name}</h1>
                    <p className='flex text-[9px] text-yellow-400'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></p>
                </div>
                <p className='text-[10px]'>{description}</p>
               
                    <p className='flex items-center pb-3'> ${price}</p>
                    
               

            </div>
            
        </div>
    );
};

export default SingleFood;