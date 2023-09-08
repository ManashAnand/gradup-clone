import CartItems from "@components/CartItems/page";
import CourseRoutingBtn from "@components/CartItems/CourseRoutingBtn";

async function  GetCartData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/64f8ba6b8d92e126ae67f519");
    return res.json();
}


export default async function Cart() {

    const CartData = await GetCartData();

    const subTotal = CartData?.record.reduce((sum, book) => sum + book.price, 0).toFixed(2)

  return (
    <>
      <h1 className="text-white w-full text-2xl text-left">
        Shopping Cart
      </h1>

      <div className="text-white  h-full w-full xl:flex p-2">
        <div className="text-white  xl:w-[66%] p-4">
            <div className=" flex justify-between items-center px-2">
                <div className="text-yellow-500 text-xl">Item-{CartData?.record.length}</div>
                {/* <div> Delete</div> */}
            </div>    
            
        <CartItems />

       





        </div>

        <div className="text-white max-h-[25rem] rounded-md bg-slate-800 xl:w-[34%] p-5">
            <div className=" flex  items-center p-2 text-2xl">Bill Details</div>
            <div className=" flex justify-between items-center p-2">
                SubTotal
                <span>₹{subTotal}</span>
            </div>
            <div className=" flex justify-between items-center p-2">
              Total Discount
                <span>-₹0</span>
            </div>
            <div className=" flex justify-between items-center p-2">
                GST-18%
                <span>₹{(0.18*subTotal).toFixed(2)}</span>
            </div>
            <div className=" flex justify-between items-center p-2">
                Items-Total
                <span>₹{((subTotal)-(0.18*subTotal).toFixed(2))}</span>
            </div>
            <div className=" flex justify-between items-center p-2">
                <button className="bg-yellow-500 hover:bg-yellow-700 w-full text-white font-bold py-2 px-4 rounded">
                Checkout
                </button>
            </div>

            <div className=" flex justify-between items-center p-2 ">
            <input type="text"  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[58%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coupon Code" />
                <button class="bg-transparent hover:bg-blue-500 w-[40%] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hidden xl:block "> 
                    Apply
                    </button>
            </div>
        <CourseRoutingBtn/>
        </div>

      </div>
    </>
  )
}

