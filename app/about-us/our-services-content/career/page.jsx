'use client'
import React from 'react'
import styles from 'styles/Page.module.css'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import {
  Typography,
  Grid,
  Box,
  CardContent,
  Card,
  Button,
  List,
  ListItem,
} from '@mui/material'

export default function Student() {
  const cards = [
    {
      heading: 'GD Module',
      desc: 'GD Module Group Discussion is a crucial step in hiring for corporate jobs where members are assessed for their participation and leadership skills, their ability to take decisions in the stipulated time frame, and their thinking approach...',
      img: '/serviceasset/service-model1.jpg',
      show: '',
    },
    {
      heading: 'Personal Interview Module',
      desc: 'Personal Interview is the Ultimate step in hiring for corporate jobs where candidates are the assessed basis of their technical skills, leadership skills, thinking approach, and many others. We prepare you to step by step to ACE PI...',
      img: '/serviceasset/asset2.jpg',
      show: '/assets/images/pimodule1.png',
    },
    {
      heading: 'Consulting Case Preparation',
      desc: 'Have you ever come across questions like “ Tell me the number of people in Delhi wearing white shirts on a Tuesday” OR “ A company is witnessing reduced profits for last 6 months; find out the reason and suggest a solution” and you might have...',
      img: '/serviceasset/asset3.jpg',
    },
    {
      heading: 'Resume Building',
      desc: 'It is often said that the First impression is the last. We believe that the FIRST IMPRESSION IS THE LASTING IMPRESSION. Your resume is your first face to the company you apply for. Is it good enough? Come get it checked, revised, or even get it built from...',
      img: '/serviceasset/asset4.jpg',
    },
    {
      heading: 'Winning Corporate',
      desc: 'Being a National Winner in B-School Case Competitions not only adds a star point to your resume but enables you to stand out from the crowd and showcase your real-life problem-solving abilities. Be a part of this 2-hour journey...',
      img: '/serviceasset/asset5.jpg',
    },
    {
      heading: 'Digital Profile Building',
      desc: 'The world knows you even before you meet. Your digital profile is your first impression of the outside world. With platforms like LinkedIn especially curated for professionals, the worst thing you can do to your image is not effectively utilized and explore it...',
      img: '/serviceasset/asset6.jpg',
    },
    {
      heading: 'Communication Skills',
      desc: 'Effective communication is a key to success and if you don’t communicate your ideas well, the audience would never be able to connect the impact your idea could bring to the world. Have you ever wondered how these eloquent speakers just move...',
      img: '/serviceasset/asset7.jpg',
    },
    {
      heading: 'Career Guidance',
      desc: 'The biggest mistake one can do in life is not follow his passion and join a college without an aim. We have all seen students taking a B.Tech degree just because other’s are doing the same, students taking commerce as subjects in class 11...',
      img: '/serviceasset/asset8.jpg',
    },
  ]
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
      <div className='flex flex-wrap gap-10 justify-evenly mt-10'>
        {cards.map((card, index) => (
          <div key={index} className='rounded-md p-2 w-[650px] bg-white'>
            <img src={card.img} className='h-[200px] w-[650px]' />
            <h1 className='font-bold text-2xl m-2 text-[#0066C8] '>
              {card.heading}
            </h1>
            <p className='m-2 text-gray-600'>{card.desc}</p>
            <div className='flex justify-center items-center gap-5'>
              <button className='text-white bg-blue-600 py-2 px-6 rounded-md border-2 border-blue-600'>
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
    </div>
  )
}
