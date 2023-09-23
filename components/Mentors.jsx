'use client'
import { Card, Grid, Row, Text } from '@nextui-org/react'

const Mentors = () => {
  const list = [
    {
      name: 'Abhinaba Chakraborty',
      title: 'XLRI Jamshedpur | Sr. Manager, HR | P&G | BIT MESRA',
      img: '/assets/mentors/Abhinabacompress.jpg',
    },
    // {
    //     name: "Ashish Ambastha",
    //     title:"Software Development Engineer III  Flipkart",
    //     img:"/assets/mentors/mentor2.png"
    // },
    {
      name: 'Luv Saxena',
      title: 'AVP, magicpin | IIT Roorkee | CAT Topper-2016 | IIM Bangalore ',
      img: '/assets/mentors/mentor3compress.webp',
    },
    {
      name: 'Dharmendra Kumar',
      title: 'IES Officer, 2019 Batch, AIR-87, NIT Calicut',
      img: '/assets/mentors/Dharmendracompress.jpg',
    },
    {
      name: 'Mohit Agarwal',
      title: '(Siemens EDA) | IIT BHU ',
      img: '/assets/mentors/Mohitcompress.jpg',
    },
    // {
    //     name: "Narendra Lamba",
    //     title:" (Ex-Intelligence Officer,GOI) IIFT DELHI & BIT MESRA Alumnus ",
    //     img:"/assets/mentors/mentor6.png"
    // },
    {
      name: 'Saumya Singh',
      title: 'NKAM, Streax |  IMT Ghaziabad',
      img: '/assets/images/mentornew1.jpg',
    },
    {
      name: 'Saurabh Kumar',
      title:
        'AVP, Strategic Initiatives, Cube Highways | IIM Bangalore | IIT Bombay',
      img: '/assets/images/Saurabh Kumar.jpg',
    },
    // {
    //    name: "Pushkal Shukla",
    //    title:"Adobe",
    //    img: "/assets/mentors/mentor8.png"
    // },
  ]
  return (
    <div className='background pt-10'>
      <div className='flex flex-wrap gap-[30px] justify-center'>
        {list.map((items, i) => {
          return (
            <div
              key={i}
              className='w-[20rem] h-[10rem] bg-slate-700 flex flex-row items-center p-3 rounded-xl gap-2'
            >
              <img
                className='h-[8rem] w-30 rounded-md'
                src={items.img}
                alt={items.name}
                decoding='async'
              />

              <div className='flex flex-col w-full h-[8rem] w-50 overflow-hidden  ml-2'>
                <h3 className='text-center text-md font-bold text-white '>
                  {items.name}
                </h3>
                <p className='text-white user-follow-info p-2 text-xs font-bold text-left whitespace-nowrap"'>
                  {items.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex  justify-center mt-5'>
        <span className='text-white font-bold text-md p-4 bg-slate-700 rounded-lg'>
          And 130+ Experts
        </span>
      </div>
    </div>
  )
}

export default Mentors
