import React from 'react'

const Cart = () => {
  return (
    <>
      <h1 className="text-white w-full text-2xl text-left">
        Shopping Cart
      </h1>
      <div className="text-white border broder-white h-full w-full xl:flex p-2">
        <div className="text-white  xl:w-[66%] p-4">
            <div className=" flex justify-between items-center px-2">
                <div className="text-yellow-500 text-xl">Item-1</div>
                <div> Delete</div>
            </div>    
            
            <div className="text-white min-h-72 xl:flex border broder-white xl:h-[18rem] xl:mt-4 rounded-md">
                <div className="border broder-white  flex justify-center items-center flex-col xl:w-[20%] ">
                    <img src="" alt="" className="w-[6rem] h-[6rem]"/>
                    <h3> rs5000</h3>    
                </div>
                <div className="  xl:w-[30%] flex justify-center items-center">
                    Advanced inside sales cetificate
                </div>
                <div className="  xl:w-[5%] flex justify-center items-center">
                        +
                </div>
                <div className="  xl:w-[45%] p-2 border broder-white rounded-md">
                    <div className=" flex justify-around items-center xl:h-[45%] ">
                        NSDC cetification
                        <span>Why this?</span>
                    </div>
                    <div className=" flex justify-around items-center xl:h-[45%]">
                        rs999
                        <span>Delete</span>
                    </div>
                </div>

            </div>      

        </div>
        <div className="text-white  rounded-md bg-slate-800 xl:w-[34%] p-5">
            <div className=" flex  items-center p-2 text-2xl">Bill Details</div>
            <div className=" flex justify-between items-center p-2">
                SubTotal
                <span>rs1000</span>
            </div>
            <div className=" flex justify-between items-center p-2">
              Total Discount
                <span>-rs0</span>
            </div>
            <div className=" flex justify-between items-center p-2">
                GST-18%
                <span>rs217</span>
            </div>
            <div className=" flex justify-between items-center p-2">
                Items-Total
                <span>rs2170</span>
            </div>
            <div className=" flex justify-between items-center p-2">
                <button className="bg-yellow-500 hover:bg-yellow-700 w-full text-white font-bold py-2 px-4 rounded">
                Checkout
                </button>
            </div>

            <div className=" flex justify-between items-center p-2 ">
            <input type="text"  className="border border-red-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[58%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coupan Code" />
                <button class="bg-transparent hover:bg-blue-500 w-[40%] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hidden xl:block "> 
                    Apply
                    </button>
            </div>
        </div>

      </div>
    </>
  )
}

export default Cart
