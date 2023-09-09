'use client';

import React from 'react'





async function CartItems({CartData}) {
    

  const handleDeleteOneItem = async (id,email) => {
    try {
      const deleteUrl = `http://localhost:3000/api/cart?courseId=${id}&email=${email}`;
  
      const response = await fetch(deleteUrl, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
        console.log('Item deleted successfully');
      } else {
        console.error('Error deleting item:', response.status);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }     

  return (
    <>
      {
        CartData?.course?.map((cartBook) => {
                    return(
                        <div key={cartBook?._id}>
                        <div className="text-white min-h-72 mb-4 xl:mb-0  xl:flex  xl:h-[12rem] xl:mt-4 rounded-md bg-slate-800">
                <div className="  flex justify-center items-center flex-col xl:w-[20%] ">
                    <img src={cartBook?.imageURL} alt="book cover" className="w-[6rem] h-[6rem] rounded-md "/>
                    <h3> ₹{cartBook?.price}</h3>    
                </div>
                <div className="  xl:w-[30%] flex justify-center items-center">
                        {cartBook?.title}
                </div>
                <div className="  xl:w-[5%] flex justify-center items-center">
                        +
                </div>
                <div className="  xl:w-[40%] p-2  rounded-md border border-white xl:h-3/5 xl:p-0 xl:mt-8">
                    <div className=" flex justify-around items-center xl:h-[45%] ">
                        {cartBook?.author}
                        <span>Why this?</span>
                    </div>
                    <div className=" flex justify-around items-center xl:h-[45%]">
                    ₹{cartBook?.price}
                        <span className="text-red-500 cursor-pointer" onClick={() => handleDeleteOneItem(cartBook?._id,userEmail)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </span>
                    </div>
                </div>

            </div>    
                        </div>
                    )
                })
        
             

        } 
    </>
  )
}

export default CartItems
