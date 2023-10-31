'use client'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'

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
  ]
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-10 font-lexend text-[#4D4D4D]'>
        Our Industry <span className='text-[#1C4980]'>Experts</span>
      </h1>
      <div className='flex flex-wrap gap-10 justify-center mt-5 p-2'>
        {list.map((items, i) => {
          return (
            <div
              key={i}
              className='w-[300px] p-2 rounded-xl border border-[#E0E3EB]'
            >
              <img
                className='h-[150px] w-full rounded-md'
                src={items.img}
                alt={items.name}
                decoding='async'
              />

              <div className='flex flex-col w-full w-50 overflow-hidden mt-2'>
                <h3 className='text-left text-md font-bold'>{items.name}</h3>
                <p className=' text-xs font-bold text-left text-[#868686]'>
                  {items.title}
                </p>
                <div className='flex flex-row justify-between mt-2 '>
                  <span className='text-[#1C4980]'>Industry Expert</span>
                  <span className='flex flex-row gap-2'>
                    <AiFillLinkedin size={25} color='#1C4980' />
                    <FaTwitterSquare size={25} color='#1C4980' />
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Mentors
