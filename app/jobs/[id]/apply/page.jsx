"use client"
import { useSession } from "next-auth/react";
import useSWR from 'swr';
import Link from "next/link";
import { useRouter } from "next/navigation";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import React,{useState} from "react";
const page = ({params}) => {
    const [submit,setSubmit]=useState(false) 
    const router = useRouter();
    const jobId='${params.id}';
    const { data: session } = useSession();
    const { data, error } = useSWR( `/api/jobs/${params.id}`, fetcher)
    if (error) return <div>Failed to loadinggggggg job data</div>;
    if (!data) return <div>Loading...</div>;
    const jobs=data
    function handleSubmit(){
      setSubmit(true)
    }
    const createApplication = async (e) => {
      e.preventDefault();
      // setIsSubmitting(true);
      console.log("Form Submitted");
      try {
        const response = await fetch("/api/jobs/apply", {
          method: "POST",
          body: JSON.stringify({
            coverLetter: "coverLetter",
            userId: session?.user.id,
            projects: [],
            jobId:"jobId",
            resume:"post.resumeURL",
            joiningDate:"post.expectedJoiningDate",
            CTC:"post.expectedCTC",
          }),
        });
        console.log(response.status)
      } catch (error) {
        console.log(error);
      } finally {
        // setIsSubmitting(false);
        // alert("Submitted");
      }
    };
  return (
   !submit? <div className='justify-center w-full align-center justify-items-center'>
          <h1 className='mt-3 font-bold text-lg text-left mb-5'>
          <span className="text-blue-400 text">{jobs.companyName} hiring for <span className="text-purple-500 underline underline-offset-4 decoration-2 decoration-red-300">{jobs.title}</span></span>
          </h1>
        <form onSubmit={createApplication} className='w-4/5 justify-center'>
            <label htmlFor="coverLetter" className='font-semibold text-gray-600 text-md ml-2 mb-3'>Cover Letter</label> <br />
            <textarea rows="6" className="p-2.5 w-full mb-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-400" placeholder='Write a beautiful Cover letter explaining why you are the best fit for this role...'/>
            <label htmlFor="projects" className='font-semibold text-gray-600 text-md ml-2 mb-3'>Your Projects/Assignment</label> <br />
            <textarea rows="6" className="p-2.5 w-full mb-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-400" placeholder='Brief Description of the Project, Technologies used and its Link...'/>
            {/* <textarea rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Explain about all your relevant projects... \n1'/> */}
            <button type='submit' onClick={handleSubmit} className='bg-sky-400 text-white rounded-md px-10 py-1 text-lg mt-2 hover:bg-white hover:text-sky-400 hover:border-2 hover:border-sky-400'>Submit</button>
        </form>
    </div>:<div className="flex flex-col justify-center items-center">
      <img width="250" src="/assets/images/jobpost.gif"></img>
      <p className="text-4xl text text-lime-500 mb-4">Job Applied Successfully</p>
    </div>
  )
}

export default page