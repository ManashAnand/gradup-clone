'use client'
import { useState, useEffect, useRef } from 'react'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import SimpleImageSlider from 'react-simple-image-slider'
import styles from './styles.module.css'

const Testimonial = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === list.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    )
    return () => {
      resetTimeout()
    }
  }, [index])

  const list = [
    {
      name: 'Raunit Verma',
      title: 'Student at NIT Raipur',
      img: '/assets/images/Group 224.png',
      desc: 'I am very thankful to talent connect for their such beautiful courses these courses are really helpful',
    },
    {
      name: 'Raunit Verma',
      title: 'Student at NIT Raipur',
      img: '/assets/images/Group 225.png',
      desc: 'I am very thankful to talent connect for their such beautiful courses these courses are really helpful',
    },
    {
      name: 'Ajay Jeena',
      title: 'Student at NIT Raipur',
      img: '/assets/images/Group 228.png',
      desc: 'I am very thankful to talent connect for their such beautiful courses these courses are really helpful',
    },
    {
      name: 'Ajay Jeena',
      title: 'Student at NIT Raipur',
      img: '/assets/images/Group 229.png',
      desc: 'I am very thankful to talent connect for their such beautiful courses these courses are really helpful',
    },
    {
      name: 'Ajay Jeena',
      title: 'Student at NIT Raipur',
      img: '/assets/images/Group 230.png',
      desc: 'I am very thankful to talent connect for their such beautiful courses these courses are really helpful',
    },
  ]
  return (
    <div className='bg-[#F5F7FA] py-3'>
      <p className=' text-3xl font-bold font-lexend text-[#4D4D4D] mt-5 '>
        What <span className='text-[#1C4980]'> our Interns </span>
        have to say ?
      </p>
      <div>
        <div className='flex flex-row overflow-auto whitespace-normal gap-4 mx-5 my-4'>
          {list.map((item, i) => {
            return (
              <div key={i} className='my-4 shrink-0 sm:w-[400px] w-[300px] '>
                <Card>
                  <Card.Body
                    css={{
                      p: 0,
                      boxShadow:
                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                    }}
                  >
                    <Card.Image
                      src={item.img}
                      objectFit='contain'
                      width='100%'
                      height={280}
                      alt={item.title}
                    />
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
        <div className={styles.slideshowDots}>
          {list.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.slideshowDot} ${
                index === idx ? ' active' : ''
              }`}
              onClick={() => {
                setIndex(idx)
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
