'use client'
import useSWR from 'swr'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { Card, Grid, Row, Text, Avatar } from '@nextui-org/react'
import Spinner from '@components/Spinner'
import { useState, useEffect } from 'react'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Page({ params }) {
  const [index, setIndex] = useState(1)
  const [status, setStatus] = useState(true)
  const [pos, setPos] = useState(0)
  const { data: session } = useSession()
  function handleClick(i) {
    setStatus(true)
    setPos(i)
  }
  const { data, error } = useSWR(
    `/api/hr/${session?.user.id}/postedJob/${params.id}?page=${index}`,
    fetcher
  )
  // ... handle loading and error states
  if (error) {
    return (
      <div className='text-white  text-center mx-auto my-20'>
        Some Error Occured!! Please try again
      </div>
    )
  }
  if (data) {
    const createPDF = async (index) => {
      const pdf = document.getElementById('profile')
      let dataprofile = await data
      var opt = {
        margin: [2, 0, 5, 0],
        filename: `${dataprofile[index].name}`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4' },
      }
      html2pdf().from(profile).set(opt).save()
    }
    return (
      <>
        {data.length > 1 && !data[0].premium && (
          <a
            href='/premium'
            className='text-center bg-red-500 text-white p-4 rounded-md mt-2 font-bold'
          >
            To access candidate details, kindly upgrade into a GradUp Verified
            premium account.
          </a>
        )}
        <div className='w-screen displayprofile'>
          <div
            className={
              data.length > 1
                ? 'grid grid-cols-1 overflow-y-scroll cardslide pr-5 gap-y-6 gap-x-10 mb-6'
                : 'grid grid-cols-1 cardslide pr-5 gap-y-6 gap-x-10 mb-6'
            }
          >
            {data.length > 0
              ? data.map((ele, i) => {
                  return (
                    <a href='#profile'>
                      <Card
                        onClick={() => handleClick(i)}
                        key={i}
                        className='box1'
                        css={{ height: 'max-content' }}
                        isPressable
                      >
                        <Card.Body
                          css={{
                            px: '$16',
                            py: '$6',
                            background: '#29335c',
                            borderRadius: '$md',
                          }}
                        >
                          <Card.Image
                            src='/assets/images/profpic.png'
                            objectFit='contain'
                            width='100%'
                            height={140}
                            alt='profile'
                          />
                        </Card.Body>
                        <Text
                          css={{
                            fontWeight: '$semibold',
                            fontSize: '$md',
                            width: 'stretch',
                            textAlign: 'center',
                            pt: '$5',
                          }}
                        >
                          {ele.name}
                        </Text>
                        <Text
                          css={{
                            fontSize: '$sm',
                            pb: '$5',
                            textAlign: 'center',
                          }}
                        >
                          {ele.education.length > 0
                            ? ele.education[0].collegeName
                            : ''}
                        </Text>
                        <button
                          onClick={() => createPDF(i)}
                          style={{ backgroundColor: '#29335c' }}
                          disabled={!data[0].premium}
                          className='px-4 py-1 text-xs text-white mb-3 rounded-full'
                        >
                          Download Resume
                        </button>
                      </Card>
                    </a>
                  )
                })
              : ''}
          </div>
          {status ? (
            data.length > 0 ? (
              <div
                id='profile'
                style={{ height: 'fit-content', backgroundColor: 'white' }}
                className='bg-white text-left px-10 py-2 textnew adjust'
              >
                <div className='flexmade'>
                  <Image
                    width='150'
                    height='50'
                    src='/assets/images/logowhite.png'
                    alt='logo'
                  ></Image>
                  <div>
                    <p className='justice text-xl text-sky-700'>
                      {' '}
                      {data[pos].name.toUpperCase()}
                    </p>
                    <p className='justice sm:text-xl text-md text-sky-700'>
                      {data[pos].email}
                    </p>
                  </div>
                </div>
                <hr className='my-3' />
                <p className='mb-5 mt-4 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>
                  Education
                </p>
                {data[pos].education.map((ele, i) => {
                  return (
                    <div
                      className={`${!data[0].premium && 'blur-sm'} mb-5`}
                      key={i}
                    >
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          {i === 0 ? 'College' : 'Institution'}:{' '}
                        </span>
                        {ele.collegeName}
                      </p>
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Degree:{' '}
                        </span>{' '}
                        {ele.degreeName}
                      </p>
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Grade:{' '}
                        </span>{' '}
                        {ele.grade}
                      </p>
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Duration:{' '}
                        </span>{' '}
                        {ele.startYear.split('T')[0].replaceAll('-', '/')} -{' '}
                        {ele.endYear.split('T')[0].replaceAll('-', '/')}
                      </p>
                    </div>
                  )
                })}
                <hr />
                <p className='mb-5 mt-3 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>
                  Experience
                </p>
                {data[pos].experience.map((ele, i) => {
                  return (
                    <div
                      className={`${!data[0].premium && 'blur-sm'} mb-5`}
                      key={i}
                    >
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Company Name:{' '}
                        </span>{' '}
                        {ele.companyName}
                      </p>
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Title:{' '}
                        </span>{' '}
                        {ele.title}
                      </p>
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Location:{' '}
                        </span>{' '}
                        {ele.location}
                      </p>
                      <p className='text-md leading-6'>
                        <span className='text-sky-600 textform text-md'>
                          Description:{' '}
                        </span>{' '}
                        {ele.description}
                      </p>
                      <p className='mb-1 text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Skills Used:{' '}
                        </span>{' '}
                        {ele.skills.map((item, i) => {
                          return <span className=''>{item}, </span>
                        })}
                      </p>
                    </div>
                  )
                })}
                {/* <div className='html2pdf__page-break'></div> */}
                <hr />
                <p className='mb-5 mt-3 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>
                  Projects
                </p>
                {data[pos].project.map((ele, i) => {
                  return (
                    <div
                      className={`${!data[0].premium && 'blur-sm'} mb-5`}
                      key={i}
                    >
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Name:{' '}
                        </span>{' '}
                        {ele.projectName}
                      </p>
                      <p className='text-md leading-6'>
                        <span className='text-sky-600 textform text-md'>
                          Description:{' '}
                        </span>{' '}
                        {ele.projectDes}
                      </p>
                      <p className='text-md'>
                        <span className='text-sky-600 textform text-md'>
                          Link:{' '}
                        </span>{' '}
                        {ele.projectLinks}
                      </p>
                    </div>
                  )
                })}
                <hr />
                <p className='mb-5 mt-3 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>
                  Achievements
                </p>
                {data[pos].achievement.map((ele, i) => {
                  return (
                    <div
                      className={`${!data[0].premium && 'blur-sm'} mb-5`}
                      key={i}
                    >
                      <p className='text-md leading-6'>
                        <span className='text-sky-600 textform text-md'>
                          {i + 1}.
                        </span>{' '}
                        {ele.achievementName}
                      </p>
                    </div>
                  )
                })}
              </div>
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </div>
        <div className='flex flex-row gap-10 mb-6'>
          <button
            disabled={index === 0 ? true : false}
            className='btn2 bg-sky-500 p-2 rounded-md'
            onClick={() => setIndex(index - 1)}
          >
            Prev
          </button>
          <button
            className='btn3 bg-sky-500 p-2 rounded-md'
            onClick={() => setIndex(index + 1)}
          >
            Next
          </button>
        </div>
        {/* <button onClick={createPDF} type="button">Download</button> */}
      </>
    )
  }
}
