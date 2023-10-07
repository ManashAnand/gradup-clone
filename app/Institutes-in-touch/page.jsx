import React from 'react'

const page = () => {
  let logos = [
    '/assets/images/nitkuruk.png',
    '/assets/images/christ.png',
    '/assets/images/nithamir.png',
    '/assets/images/nmims.png',
    '/assets/images/Ramjas.png',
    '/assets/images/xlrijamshedpur.png',
    '/assets/images/d y patil logo.png',
    '/assets/images/bitmesra.png',
    '/assets/images/bitsnew.png',
    '/assets/images/hansraj.png',
    '/assets/images/iimindore.png',
    '/assets/images/iimkashi.png',
    '/assets/images/iimrohtak.png',
    '/assets/images/iimsirmaur.png',
    '/assets/images/iimudaipur.png',
    '/assets/images/iitdelhinew.png',
    '/assets/images/iitkanpurnew.png',
    '/assets/images/iitkharagnew.png',
    '/assets/images/nitkarnataka.png',
    '/assets/images/nitsikkim.png',
    '/assets/images/pgdav.png',
    '/assets/images/SGGSCC.png',
    '/assets/images/src.png',
    '/assets/images/symbiosis.png',
  ]
  return (
    <>
      {/* desktop view */}
      <div className=' text-white mt-10 mb-10 '>
        <p className='mb-14 text-center text-5xl animate-charcter text-white  underline-offset-8'>
          Presence in Academia
        </p>
        <div className='flex justify-center items-center flex-wrap w-full rounded-2xl gap-6  border-[10px] border-solid border-blue-300  p-5 '>
          {logos.map((ele, i) => {
            return (
              <div key={i}>
                <img
                  className='rounded-xl object-cover h-p[50px] w-[150px] hover:scale-125 ease-in-out transform duration-200 transition'
                  src={ele}
                  alt={ele}
                ></img>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center items-center '>
          <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>
            <polygon points='0,100 100,0 200,100' fill='#64b5f6' />
          </svg>
        </div>
        <p className='text-center text-white animate-charcter text-5xl textnew '>
          And many more ....
        </p>
      </div>
    </>
  )
}

export default page
