
"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import Spinner from "@components/Spinner"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Page ({ id }) {
  const { data, error } = useSWR( `/api/jobs/${id}`, fetcher)
  // ... handle loading and error states
  console.log("abbbbbbbbbbbbbbb",data);
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div className="my-60 mx-auto"><Spinner/></div>;
  console.log(data.record);
  const jobs=data
  // let perksdata=jobs.perks[0].split(/[\n](\d+)[.]/).filter((ele,i)=>{
  //   return ele.length>0 && isNaN(ele)===true}).map((item,i)=>{
  //    return item})
  //    console.log(perksdata,"perks")
     let descriptiondata=jobs.description.split(/[\n](\d+)[.]/).filter((ele,i)=>{
      return ele.length>0 && isNaN(ele)===true}).map((item,i)=>{
       return item})
      console.log(descriptiondata,"describe")
//  let eligibilitydata=jobs.eligiblilty[0].split(/[\n](\d+)[.]/).filter((ele,i)=>{
//     return ele.length>0 && isNaN(ele)===true}).map((item,i)=>{
//       return item})
    return (
        <div className='w-screen textform'>
          <h1 className='mt-8 font-semibold text-2xl text-center'>
            <span className="text-blue-400 textnew">{jobs.companyName} hiring for <span className="text-purple-500 underline underline-offset-4 decoration-2 decoration-red-300">{jobs.title}</span></span>
          </h1>
          <div className='w-4/5 mx-auto text-left'>
              <div>
                <div >
                  <div className="mt-10">
                  <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:"white",marginTop:"0.2vh",marginLeft:"1em"}}><path d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"></path><path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z"></path></svg> 
                  <label className="ml-1 mb-1 text-sm text-white font-semibold">Job Title</label>
                  </div>
                  <input className="py-2 px-5 text-sm bg-white text-gray-600 rounded-md border-blue-300 border-2 w-5/6" value={jobs.title}></input>
                  <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:"white",marginTop:"2.2vh",marginLeft:"1em"}}><path d="M18 2H6c-1.103 0-2 .897-2 2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm0 18H6V4h12v16z"></path><path d="M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Company Name</label>
                  </div>
                  <input className="py-2 px-5 text-sm bg-white text-gray-600 rounded-md border-blue-300 border-2 w-5/6" value={jobs.companyName}></input>
                  <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",marginTop:"2.2vh",marginLeft:"1em"}}><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path><path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Salary</label>
                  </div>
                  <input className="py-2 px-5 text-sm bg-white text-gray-600 rounded-md border-blue-300 border-2 w-5/6" value={jobs.stipend}></input>
                  <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",marginTop:"2.2vh",marginLeft:"1em"}}><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Last Date to Apply</label>
                  </div>
                  <input className="py-2 px-5 text-sm bg-white text-gray-600 rounded-md border-blue-300 border-2 w-5/6" value={jobs.lastDate?jobs.lastDate.split("T")[0]:""}></input>
                  <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",marginTop:"2.2vh",marginLeft:"1em"}}><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">No. of Openings</label>
                  </div>
                  <input className="py-2 px-5 text-sm bg-white text-gray-600 rounded-md border-blue-300 border-2 w-5/6" value={jobs.noOfOpenings}></input>
                  {/* <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",marginTop:"2.2vh",marginLeft:"1em"}} ><path d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Requirements</label>
                  </div>
                  <div className="py-4 px-5 text-sm text-gray-600 bg-white rounded-md border-2 border-blue-300">
                  {eligibilitydata.map((ele,i)=>{
                       return(
                        i>0 && <li className="mb-2">{ele}</li>
                       )
                    })}
                  </div> */}
                  <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",marginTop:"2.2vh",marginLeft:"1em"}}><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Job Description & Responsibilities</label>
                  </div>
                  <div className="py-4 px-5 text-sm text-gray-600 bg-white rounded-md border-2 border-blue-300">
                  {descriptiondata.map((ele,i)=>{
                       return(
                        i>0 && <li className="mb-2">{ele}</li>
                       )
                    })}
                  </div>
                  </div>
                  <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:"white",marginTop:"2.2vh",marginLeft:"1em"}}><path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path><path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Skills Required</label>
                  </div>
                  <div className="py-2 px-5 text-sm text-gray-600 bg-white rounded-md border-2 border-blue-300">
                  {jobs.skillsRequired[0].split(",").map((skill)=>(
                    <input readOnly className="py-2 mb-2 mr-3 bg-sky-300 text-sm text-center text-white rounded-md w-fit focus:outline-none" value={skill}></input>
                  ))}
                  </div>
                  <div className="flex mb-1">
                  <MilitaryTechIcon style={{marginTop:"2.2vh",color:"white",marginLeft:"0.5em"}}/>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Perks & Benefits</label>
                  </div>
                  <div className="py-2 px-5 text-sm text-gray-600 bg-white rounded-md border-2 border-blue-300">
                    {jobs.perks.map((ele,i)=>{
                       return(
                         <li className="mb-2">{ele}</li>
                       )
                    })}
                  </div>
                  {/* <div className="flex mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",marginTop:"2.2vh",marginLeft:"1em"}}><path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path><path d="M7 9h10v2H7zm0 4h5v2H7z"></path></svg>
                  <label className="ml-1 mb-1 mt-4 text-sm text-white font-semibold">Roles and Responsibilities</label>
                  </div>
                  <div className="py-4 px-5 text-sm text-gray-600 bg-white rounded-md border-2 border-blue-300">
                  {roledata.map((ele,i)=>{
                       return(
                        i>0 && <li className="mb-2">{ele}</li>
                       )
                    })}
                  </div> */}
                  </div>
                </div>
              </div>
              <Link  href={`/jobs/${id}/apply`}> 
                <button className="bg-blue-400 py-2 px-10 text-sm text-white rounded-md mt-8 mb-16">Apply</button>
              </Link>
          </div>
      )
  }
 
export default function App ({params}) {
 
  return <div >
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