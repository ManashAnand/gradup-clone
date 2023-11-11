'use client'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import Spinner from '@components/Spinner'
import LoginAlert from '@components/LoginAlert'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
import React, { useState } from 'react'

const page = ({ params }) => {
  const [submit, setSubmit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [result, setResult] = useState(false)
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  const jobId = `${params.id}`
  const { data: session } = useSession()
  const { data, error } = useSWR(`/api/jobs/${params.id}`, fetcher)
  if (error)
    return (
      <div>
        <LoginAlert />
      </div>
    )
  if (!data)
    return (
      <div className='mx-auto my-60'>
        <Spinner />
      </div>
    )
  const jobs = data
  // function handleSubmit(){
  //   setSubmit(true)
  // }

  const handleCheck = () => {
    const check = checked ? false : true

    setChecked(check)
  }
  function handleClick() {
    setLoading(true)
    window.scrollTo(0, 0)
  }
  const createApplication = async (e) => {
    e.preventDefault()
    // setIsSubmitting(true);
    // console.log("Form Submitted");
    try {
      const response = await fetch('/api/jobs/apply', {
        method: 'POST',
        body: JSON.stringify({
          coverLetter: e.target[0].value,
          userId: session?.user.id,
          projects: [],
          jobId: jobId,
          resume: 'post.resumeURL',
          joiningDate: 'post.expectedJoiningDate',
          CTC: 'post.expectedCTC',
        }),
      })

      if (response.status == 201) {
        setSubmit(true)
        setErr(false)
        setLoading(false)
      }
      if (response.status == 500) {
        setSubmit(true)
        setErr(true)
        setLoading(false)
      } else if (response.status == 501) {
        setResult(true)
        setLoading(false)
      }
    } catch (error) {
    } finally {
      // setIsSubmitting(false);
      // alert("Submitted");
    }
  }
  if (data) {
    return (
      <>
        {!submit ? (
          <div className=' w-full text-left  flex justify-center items-center flex-col md:block'>
            <h1 className='mt-6 font-bold text-lg text-left mb-8 '>
              <span className='text-blue-400 text'>
                {jobs.companyName} is hiring for{' '}
                <span className='text-purple-500 underline underline-offset-4 decoration-2 decoration-red-300'>
                  {jobs.title}
                </span>
              </span>
            </h1>
            <p className='text-white textnew w-4/5 mb-2'>
              * The Default Resume will be considered for the Job Application.
              If you haven't created your resume yet, Please complete your
              resume to proceed.
            </p>
            {/* <p className="mb-4 text-left textnew text-white w-4/5">नौकरी आवेदन के लिए डिफ़ॉल्ट बायोडाटा पर विचार किया जाएगा। यदि आपने अभी तक अपना बायोडाटा नहीं भरा है, तो कृपया आगे बढ़ने के लिए नीचे दिए गए बटन पर क्लिक करें</p> */}

            <form onSubmit={createApplication} className='w-4/5 justify-center'>
              <label
                htmlFor='projects'
                className='font-semibold text-left  text-white text-md ml-2 '
              >
                Assignment/Github
              </label>{' '}
              <br />
              <textarea
                rows='6'
                className='p-2.5 w-full mb-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-400'
                placeholder='Brief Description of the Assignment and its Link...'
              />
              {/* <textarea rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Explain about all your relevant projects... \n1'/> */}
              <input
                checked={checked}
                type='checkbox'
                className='w-6 h-6'
                onChange={handleCheck}
              />
              <span className='text-white ml-2 text-lg'>
                Tick the box before submitting your resume <br />
                <span className='text-red-600 mr-2 text-3xl'>*</span>
                Incomplete or inaccurate resume details may result in
                disqualification from further rounds of selection. Please ensure
                your resume is accurate and complete.
              </span>
              <br></br>
              <div className='flex flex-col md:flex-row '>
              <button
                type='submit'
                style={{ opacity: checked ? '1' : '0.3' }}
                disabled={checked ? false : true}
                onClick={handleClick}
                className='bg-sky-400 mb-16 text-white rounded-md px-10 py-3 text-sm hover:bg-green-500 hover:text-white mt-3 md:py-6 md:w-[30rem]'
              >
              <span className='md:text-2xl font-bold'>
                Submit

              </span>
              </button>
              <a
                href='/user'
                className='md:mx-10 md:px-16 py-2 bg-sky-500 text-white textnew rounded-md text-left mb-10 flex justify-center items-center w-full md:scale-75'
              >
                <span className='md:text-2xl'>

                                Create resume
                </span>
              </a>
              <a
                href='/user'
                className='mr-10 md:px-16 py-2 bg-sky-500 text-white textnew rounded-md text-left mb-10 flex justify-center items-center w-full md:scale-75'
              > 
              <span className='md:text-2xl'>

                My Resume
              </span>
              </a>
              </div>
             
            </form>
          </div>
        ) : err ? (
          <div className='flex flex-col items-center justify-center my-20'>
            <img
              width='700'
              src='/assets/images/500error.png'
              alt='500 Error'
            ></img>
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center mb-20'>
            <img width='250' src='/assets/images/jobpost.gif'></img>
            <p className='text-4xl text text-center text-lime-500 mb-4'>
              Job Applied Successfully
            </p>
          </div>
        )}
        {result && (
          <div className='text-2xl text-white text-new mb-20'>
            You have already applied for this job!!
          </div>
        )}
        {loading && (
          <div className='mx-auto text-center mb-10'>
            <Spinner />
          </div>
        )}
      </>
    )
  }
}
export default page
