
"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Page ({ id }) {
  const { data, error } = useSWR( `/api/jobs/${id}`, fetcher)
  // ... handle loading and error states
  console.log("abbbbbbbbbbbbbbb",data);
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data.record);
  const jobs=data
  return (
        <section className='w-full'>
          <h1 className='mt-3 font-bold text-5xl text-left'>
            <span className="text-sky-700 text">{jobs.companyName} hiring for {jobs.title}</span>
          </h1>
          <div className=''>
              <section>
                <section >
                  <div className="mt-10">
                  <span className="font-bold" >Stipend of Rs {jobs.stipend} </span><br/>
                  <span className="font-bold">Skills Required - </span>
                  {jobs.skillsRequired.map((skill)=>(
                    <h1>
                      {skill}
                    </h1>
                  ))}
                  </div>
                </section>
                <div className="my-3">
                  <span className="font-bold">PERKS</span>
                  <h1>
                    {jobs.perks}
                  </h1>
                </div>
                <div className="drop-shadow-2xl">
                  <span className="font-bold text-sky-500 text">Job Description</span>
                  <div className="w-full p-6 bg-sky-200 text-black mt-4 rounded-xl">
                  <h1 className="text text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at, consequatur ad, cum nihil laborum adipisci autem inventore aliquam reprehenderit fugiat nobis consequuntur qui totam sunt, blanditiis architecto! Dignissimos eveniet doloribus officia maiores placeat voluptatem commodi necessitatibus harum quam nulla iure ipsam, vel similique et voluptate minus, consequuntur recusandae. Quia rerum ea, commodi error vel aperiam animi eveniet nihil illum quibusdam quidem porro tempora iste quae dignissimos eos ad exercitationem. Tempore earum quos dolor, similique id dolore quis magnam doloribus ipsam nam unde nemo deserunt facilis expedita ab natus fuga distinctio ratione laudantium hic exercitationem quaerat sint. Harum ipsum maiores quia amet quae neque dolore obcaecati libero unde minus, aperiam repudiandae architecto, nihil perspiciatis repellendus? Soluta modi ea similique, eius error omnis!</h1>
                  </div>
                </div>
              </section>
              <Link href={`/jobs/${id}/apply`}> 
                <button className="btn8 bg-sky-700 text-xs mt-5 float-right">Apply</button>
              </Link>
          </div>
        </section>
      )
  }
 
export default function App ({params}) {
 
  return <div >
    <div className="justify-center flex-center"></div>
    <Page id={params.id}/>
  </div>
}










// "use client"
// import useSWR from 'swr';
// import {useState} from 'react'


// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// function page ({params})  {
//     console.log(`${params.id}`);
//     const { data, error } = useSWR( `/api/jobs/${params.id}`, fetcher)
//   // ... handle loading and error states
//   console.log(`${params.id}`);
//     if (error) return <div>Failed to loadinggggggg</div>;
//     if (!data) return <div>Loading...</div>;
//     console.log(`${params.id}`);
//     console.log("The info of the the job is ",data)
//   return (
//     <div>
//         <h1>Job {data.id}</h1>
//         <h1>{data.conpanyName}</h1>
//     </div>
//   )
// }

// export default page