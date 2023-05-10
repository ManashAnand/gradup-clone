"use client"
import {useState, useEffect} from "react";
import ListContentCard from "@components/ListContentCard";
export default function Jobs ()  {
  const [jobs,setJobs]=useState([]);

  const fetchJobs=async()=>{
    const response = await fetch("https://api.jsonbin.io/v3/b/645b79d98e4aa6225e9a3925");
    const data=await response.json();
    console.log(data);
    setJobs(data.record.jobs);
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Jobs for you</span>
      </h1>

      <div className='mt-10 prompt_layout'>
        {jobs.map((job) => (
          <ListContentCard 
            post={job}
          />
        ))}
      </div>
    </section>
  )
}
//  Later on this will be used for server side rendering for better SEO
// export async function getServerSideProps(context){
//   const res = await fetch("https://api.jsonbin.io/v3/b/645b79d98e4aa6225e9a3925");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props:{
//       jobs:data.record.jobs
//     }
//   }
// }
