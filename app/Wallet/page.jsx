import WalletAddExtra from '@components/ModalChat/WalletAddExtra'
import React from 'react'

const Wallet = () => {
  return (
    <>
     <div className=' w-screen bg-white'>
        <div className="text-3xl mt-10 text-[#1C4980] font-bold">Add Money to Wallet</div>
        <div className="text-md mt-5 text-[#1C4980] font-bold">Available balance:</div>
        <div className=" mt-2 text-[#1C4980] font-bold text-2xl">₹ 10,000</div>
     </div>
        <div className="w-screen bg-white flex justify-center items-center pt-5">
            <div className="w-4/5  flex flex-start">
                <div className=" text-3xl text-[#1C4980] font-semibold mb-5">
                    Popular Recharge
                </div>



            </div> 
        </div>
        <div className="w-screen bg-white flex justify-center items-center ">
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-5 lg:gap-4 w-4/5 mb-5">
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                    <WalletAddExtra/>
                </div>
        </div>
    </>
  )
}

export default Wallet
