"use client"
import useSWR from 'swr';
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = ({params}) => {
    // const id='${params.id}'
    const { data, error } = useSWR( `/api/jobs/${params.id}`, fetcher)
    if (error) return <div>Failed to loadinggggggg job data</div>;
    if (!data) return <div>Loading...</div>;
    const jobs=data
  return (
    <div className='justify-center w-full align-center justify-items-center'>
          <h1 className='mt-3 font-bold text-5xl text-left mb-5'>
            <span className='blue_gradient'>{jobs.companyName} hiring for {jobs.title}</span>
          </h1>
        <form className='w-4/5 justify-center'>
            <label htmlFor="coverLetter" className='font-bold text-xl'>Cover Letter</label> <br />
            <textarea rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write a beautiful Cover letter to get noticed explaining them why you are the best fit...'/>
            <label htmlFor="coverLetter" className='font-bold text-xl'>Explain Your Projects</label> <br />
            <textarea rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Explain about all your relevant projects... \n1'/>
            <button type='submit' className='black_btn2 mt-5'>Submit</button>
        </form>
    </div>
  )
}

export default page