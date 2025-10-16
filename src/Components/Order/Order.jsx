import React, { useContext } from "react";
import { StoreContext } from "../ContextApi/Context";

const Order = () => {
  const { gettotal } = useContext(StoreContext);
  return (
    <div className="sm:flex sm:justify-between px-3 sm:px-12 mt-10 font-serif text-[12px] gap-16 min-h-fit">
      {/* Left side */}
      <div className="w-[100%] flex flex-col mb-10">
        <h1  className="text-xl my-5">Delivary Information</h1>
        <div className="w-[100%] grid grid-cols-2 gap-2 mb-3">
          <input type="text" name="" id="" placeholder="First Name" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm col-span-1 " />
          <input type="text" name="" id="" placeholder="Last Name" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm col-span-1 " />
        </div>
        <input type="email" placeholder="email" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm mb-3"/>
        <input type="text" placeholder="Street" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm mb-3"/>
        <div className="w-[100%] grid grid-cols-2 gap-2 mb-3">
          <input type="text" placeholder="City" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm col-span-1 " />
          <input type="text" placeholder="State" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm col-span-1 " />
        </div>
        <div className="w-[100%] grid grid-cols-2 gap-2 mb-3">
          <input type="text" placeholder="Zip code" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm col-span-1 " />
          <input type="text" placeholder="Country" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm col-span-1 "/>
        </div>
        <input type="number" name="" id="" placeholder="Phone" className="border-1 border-gray-400 outline-0 bg-transparent px-3 py-1 rounded-sm mb-3 "/>
      </div>
      {/* Right side */}
      <div className="w-[100%] pb-10">
        <h1 className="text-xl my-5">Carts Total</h1>
        <div className="flex justify-between items-center px-3 ">
          <p>Subtotal</p>
          <p>{ gettotal() ==0 ? 0: 2}</p> 
        </div>
        <hr className="h-[1px] bg-gray-200 border-none my-2" />

        <div className="flex justify-between items-center px-3 ">
          <p> Delivery fee</p>
          <p>{2}</p>
        </div>
        <hr className="h-[1px] bg-gray-200 border-none my-2" />

        <div className="flex justify-between items-center px-3 ">
          <p>Total</p>
         <p>{gettotal() ===0 ? 0: gettotal()+2}</p>
        </div>
        <hr className="h-[1px] bg-gray-200 border-none my-2" />
        <button className="bg-red-400 text-white px-5 py-2 rounded-lg my-5 cursor-pointer">
          PROCED TO CHEEKOUT
        </button>
      </div>
    </div>
  );
};

export default Order;
