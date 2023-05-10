"use client"
import {useState, useEffect} from "react";
import ListContentCard from "@components/ListContentCard";
export default function Internships ()  {
  const [jobs,setJobs]=useState([]);

  const fetchJobs=async()=>{
    const response = await fetch("https://api.jsonbin.io/v3/b/645b8cc7b89b1e22999aede8");
    const data=await response.json();
    console.log(data);
    setJobs(data.record.internships);
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Internships for you</span>
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