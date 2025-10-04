import React, { useContext } from 'react';
import { StoreContext } from '../../ContextApi/Context';
import SingleFood from './SingleFood';

const FoodItem = ({valu}) => {
    const {food_list}=useContext(StoreContext)
    console.log(food_list)

   
    return (
        <div className='font-serif'>
            <h1 className='text-2xl pb-5'>Top deshes near you</h1>

            <div className='grid grid-cols-4 '>
                {
                    food_list.map((list, index)=>{
                        if(valu ==="ALL" || valu===list.category){
                          return  <SingleFood list={list} key={index}></SingleFood>
                        } 
                    }
                    
                    
                    )}
            </div>

          
            
        </div>
    );
};

export default FoodItem;