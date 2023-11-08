'use client'
import React, { useRef } from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Typography } from '@mui/material'

export default function Student() {
  const resume = [
    {
      title: 'Resume Building (College students)',
      data: [
        'ATS Friendly resume',
        'Professional Photo',
        'Cover Letter',
        'Crafted As per Your Dream Profile',
        'Email Body Snapshot',
      ],
      amount: 499,
      img: '/serviceasset/9.png',
    },
    {
      title: 'Resume Building (Working Professionals)',
      data: [
        'ATS Friendly resume',
        'Professional Photo',
        'Cover Letter',
        '2 Resume for 2 different people',
        '2 Copies Word/PDF and Visual Resume',
      ],
      amount: 1499,
      img: '/serviceasset/10.png',
    },
  ]
  const LinkedIn = [
    {
      title: 'LinkedIn Tips and Tricks for Working Professionals',
      amount: 999,
    },
    {
      title: 'LinkedIn Profile Building for Working Professionals',
      amount: 999,
    },
    {
      title: 'LinkedIn Tips and Tricks for Students',
      amount: 599,
    },
    {
      title: 'LinkedIn Profile Building for Students',
      amount: 599,
    },
    {
      title: 'LinkedIn Tips and Tricks for Businesses',
      amount: 1499,
    },
    {
      title: ' LinkedIn Profile Building For Businesses',
      amount: 1499,
    },
  ]
  const cards = [
    {
      title: 'GD Module',
      desc: 'GD Module Group Discussion is a crucial step in hiring for corporate jobs where members are assessed for their participation and leadership skills, their ability to take decisions in the stipulated time frame, and their thinking approach...',
      img: '/serviceasset/1.png',
      amount: 1,
      show: '',
    },

    {
      title: 'Personal Interview Module',
      desc: 'Personal Interview is the Ultimate step in hiring for corporate jobs where candidates are the assessed basis of their technical skills, leadership skills, thinking approach, and many others. We prepare you to step by step to ACE PI...',
      img: '/serviceasset/2.png',
      show: '/assets/images/pimodule1.png',
      amount: 499,
    },
    {
      title: 'Consulting Case Preparation',
      desc: 'Have you ever come across questions like “ Tell me the number of people in Delhi wearing white shirts on a Tuesday” OR “ A company is witnessing reduced profits for last 6 months; find out the reason and suggest a solution” and you might have...',
      img: '/serviceasset/3.png',
      show: '/assets/images/Guesstimate1.png',
      amount: 499,
    },
    {
      title: 'Resume Building',
      desc: 'It is often said that the First impression is the last. We believe that the FIRST IMPRESSION IS THE LASTING IMPRESSION. Your resume is your first face to the company you apply for. Is it good enough? Come get it checked, revised, or even get it built from...',
      img: '/serviceasset/4.png',
      show: '',
      amount: 499,
    },
    {
      title: 'Winning Corporate',
      desc: 'Being a National Winner in B-School Case Competitions not only adds a star point to your resume but enables you to stand out from the crowd and showcase your real-life problem-solving abilities. Be a part of this 2-hour journey...',
      img: '/serviceasset/5.png',
      show: '/assets/images/Corporate1.png',
      amount: 499,
    },
    {
      title: 'Digital Profile Building',
      desc: 'The world knows you even before you meet. Your digital profile is your first impression of the outside world. With platforms like LinkedIn especially curated for professionals, the worst thing you can do to your image is not effectively utilized and explore it...',
      img: '/serviceasset/6.png',
      amount: 499,
    },
    {
      title: 'Communication Skills',
      desc: 'Effective communication is a key to success and if you don’t communicate your ideas well, the audience would never be able to connect the impact your idea could bring to the world. Have you ever wondered how these eloquent speakers just move...',
      img: '/serviceasset/7.png',
      show: '/assets/images/Communication1.png',
      amount: 499,
    },
    {
      title: 'Career Guidance',
      desc: 'The biggest mistake one can do in life is not follow his passion and join a college without an aim. We have all seen students taking a B.Tech degree just because other’s are doing the same, students taking commerce as subjects in class 11...',
      img: '/serviceasset/8.png',
      amount: 499,
    },
  ]
  const containerRef = useRef(null)

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 100 // Adjust the scroll distance as needed
  }

  const scrollRight = () => {
    containerRef.current.scrollLeft += 100 // Adjust the scroll distance as needed
  }
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1)

  const handleShowMore = (index) => {
    if (expandedCardIndex === index) {
      // If the same card is clicked again, collapse it
      setExpandedCardIndex(-1)
    } else {
      // Otherwise, expand the clicked card
      setExpandedCardIndex(index)
    }
  }
  const { data: session } = useSession()
  const email = session?.user.email
  const handlePayment = async (amount, id, type) => {
    try {
      console.log(amount, id, type)
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, id, email, type }),
      })
      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)

        window.location.href = responseData
      } else {
        console.error('Payment initiation failed.')
      }
    } catch (error) {
      console.error('An error occurred:', error.message)
    }
  }

  return (
    <div className='{styles.container} w-screen mb-10 text-left'>
      <Typography
        variant='h2'
        className=' text-center p-4 '
        style={{ fontFamily: 'Volkhov', color: '#FFFFFF', fontWeight: '600' }}
      >
        Career Services
      </Typography>
      <Typography
        variant='h5'
        className=' text-center pt-2 '
        style={{ fontFamily: 'Volkhov', color: '#FFFFFF' }}
      >
        Employment enhancement programs featuring tailor-made modules aimed at
        advancing one's career through specialized career services
      </Typography>
      <div className='flex flex-wrap gap-10 justify-evenly mt-10 p-2'>
        {cards.map((card, index) => (
          <div key={index} className='rounded-md  p-2 w-[650px] bg-white'>
            <img src={card.img} className='h-[200px] w-[650px]' />
            <h1 className='font-bold text-2xl m-2 text-[#0066C8] '>
              {card.title}
            </h1>
            <p className='m-2 text-gray-600'>{card.desc}</p>
            <div className='flex justify-center items-center gap-5'>
              <button
                className='text-white bg-blue-600 py-2 px-6 rounded-md border-2 border-blue-600'
                onClick={() =>
                  handlePayment(card.amount, [card.title], 'webinar')
                }
              >
                Buy Now
              </button>
              <button
                className='rounded-md px-6 py-2 text-blue-600 border-2 border-blue-600'
                onClick={() => handleShowMore(index)}
              >
                Show More
              </button>
            </div>
            {expandedCardIndex === index && (
              <div className='mt-2'>
                <img width='600' className='m-auto' src={card.show}></img>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='bg-white py-4 mt-10'>
        <h1 className='text-blue-600 flex justify-center font-bold text-2xl'>
          Explore our Professional LinkedIn Modules
        </h1>
        <div className='flex flex-row items-center  mt-5 bg-white justify-around'>
          <button
            onClick={scrollLeft}
            id='scroll-left-button'
            className='px-6 py-2 bg-gray-300 hover:bg-gray-400 h-10 bg-blue'
          >
            {'<'}
          </button>
          <div
            className='flex-grow overflow-x-auto max-w-screen-lg whitespace-nowrap space-x-5 px-4 rounded-md'
            ref={containerRef}
          >
            {LinkedIn.map((card, index) => (
              <div
                key={index}
                className='inline-block px-4 py-2 border border-gray-300 rounded-md w-[450px]'
              >
                <div className='flex flex-row whitespace-normal items-center space-x-4'>
                  <img src='/serviceasset/linkedin.png' className='h-20 w-20' />
                  <h1 className='text-blue-600 font-bold text-lg'>
                    {card.title}
                  </h1>
                </div>
                <div className='flex flex-row justify-center items-center gap-5 bg-blue-600 my-4 p-2 rounded-md h-[100px]'>
                  <button
                    className='text-blue-600 bg-white py-2 px-6 rounded-md border-2 border-white'
                    onClick={() =>
                      handlePayment(card.amount, [card.title], 'linkedIn')
                    }
                  >
                    Buy Now
                  </button>
                  <button className='rounded-md px-6 py-2 text-white border-2 border-white'>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            id='scroll-right-button'
            className='px-6 py-2 bg-gray-300 hover:bg-gray-400'
          >
            {'>'}
          </button>
        </div>
      </div>
      <div className='flex flex-wrap gap-10 justify-center mt-10 ml-2 '>
        {resume.map((card) => (
          <div className='bg-white w-[500px] p-2 rounded-md ml-2'>
            <img src={card.img} />
            <h1 className='text-blue-600 font-bold text-2xl mt-2'>
              {card.title}
            </h1>
            <div className='flex flex-wrap text-blue-600 gap-2 mt-2 '>
              {card.data.map((points) => (
                <div className='flex flex-row mr-2'>
                  <svg
                    class='w-4 h-4 mr-2 fill-current text-gray-400 mt-1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z'></path>
                  </svg>
                  <p>{points}</p>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center gap-5 mt-4'>
              <button
                className='text-white bg-blue-600 py-2 px-6 rounded-md border-2 border-blue-600'
                onClick={() =>
                  handlePayment(card.amount, [card.title], 'resume')
                }
              >
                Buy Now
              </button>
              <button
                className='rounded-md px-6 py-2 text-blue-600 border-2 border-blue-600'
                onClick={() => handleShowMore()}
              >
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
