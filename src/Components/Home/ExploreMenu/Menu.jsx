import React from 'react';
import { menu_list } from '../../../assets/assets';
import SingleMenu from './SingleMenu';
import './Menu.css'
const Menu = ({valu,setvalu}) => {
    // console.log(valu)
    return (
        <div className='font-serif'>
            <h1 className='text-center text-2xl mt-5'>Explore our menu</h1>
            <p className='text-[12px] text-center'>Food is vital for survival, giving energy and nutrients.<br /> It includes fruits, vegetables, grains, meat, and dairy. Healthy eating supports</p>

            <div  className='flex justify-between items-center overflow-x-scroll gap-5 mt-5 ' id='done'>
                {menu_list.map((men,index)=><SingleMenu value={men} key={index} valu={valu} setvalu={setvalu} ></SingleMenu>
                   
                )}
            </div>
        </div>
    );
};

export default Menu;