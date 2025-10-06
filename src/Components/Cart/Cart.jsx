import React, { useContext } from 'react';
import { StoreContext } from '../ContextApi/Context';

const Cart = () => {
    const {AddTocard, count, food_list, Remove,gettotal}= useContext(StoreContext)
    // console.log(Remove)
    return (
        <div className='min-h-screen px-12 font-serif'>
            <div>
                <div className='grid grid-cols-7 mt-12 mb-3'>
                    <p>Item</p>
                    <p className='col-span-2'> Tittle</p>
                    <p> Price</p>
                    <p > Quantity</p>
                    <p>Total</p>
                    <p> Remove</p>
                </div>
                
                <hr />
               <div >
                 {
                    food_list.map((item,index)=>{
                        if(count[item._id]> 0)
                        {
                            return(
                               <div>
                                 <div className='grid grid-cols-7 items-center mt-5 mb-1 text-[13px]'>
                                    <img className='w-[50px]' src={item.image} alt="" />
                                    <p className='col-span-2'>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{count[item._id]}</p>
                                    <p>{item.price*count[item._id]}</p>
                                    <p className='cursor-pointer' onClick={()=>Remove(item._id)}>x</p>
                                </div>
                                <hr className='h-[1px] bg-gray-200 border-none'/>
                               </div>
                            )
                        }

                    })
                }
               </div>
            </div>

            <div className='grid grid-cols-5 mt-20 gap-6 text-[13px]'>
                <div className='col-span-3'>
                    <h1 className='text-xl my-5'>Carts Total</h1>
                    <div className='flex justify-between items-center px-3 '>
                        <p>Subtotal</p>
                        <p>{gettotal()}</p>
                    </div>
                    <hr  className='h-[1px] bg-gray-200 border-none my-2'/>

                    <div className='flex justify-between items-center px-3 '>
                        <p> Delivery fee</p>
                        <p>{2}</p>  
                    </div>
                    <hr className='h-[1px] bg-gray-200 border-none my-2'/>

                    <div className='flex justify-between items-center px-3 '>
                        <p>Total</p>
                        <p>{gettotal()+2}</p>
                    </div>
                    <hr className='h-[1px] bg-gray-200 border-none my-2'/>
                    <button className='bg-red-400 text-white px-5 py-2 rounded-lg my-5 cursor-pointer'>PROCED TO CHEEKOUT</button>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-[17px] my-5'>If you have a promocode enter it here</h1>
                    <div className='flex justify-between items-center bg-gray-100 rounded-lg '>
                        <input type="text"  placeholder='enter promocode' className='pl-3 border-none outline-0 '/>
                        <button className='bg-black text-white px-5 py-2 rounded-lg  cursor-pointer' >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;