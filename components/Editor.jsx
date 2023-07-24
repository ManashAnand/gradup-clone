import html2pdf from "html2pdf.js";
import React,{useEffect} from "react";
import Spinner from "@components/Spinner"
import {useSession} from "next-auth/react";
const fetcher = async (...args) =>await fetch(...args).then((res) => res.json());
import useSWR from 'swr';

 export default function Editor(){
    const { data: session } = useSession();
    var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher)
    if (error) return <div>userFailed to loadinggggggg</div>;
    if (!data) return <div className="my-60 mx-auto"><Spinner /></div>;
    const createPDF = async() => {   
        const pdf=document.getElementById("profile")
        let dataprofile=await data
        var opt={margin:[3,0,4,0],filename:`${dataprofile.name}`,image:{type:"jpeg",quality:0.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4"}}
        html2pdf().from(profile).set(opt).save();
      };
    return(
        <>
        <div className='flex justify-center'>
        <button onClick={createPDF} className="px-7 py-2 textform text-md mt-10 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Download Resume</button>
        </div>
         <div id="profile" style={{height:"fit-content",backgroundColor:"white"}} className=' w-screen bg-white text-left px-10 py-2 mt-8 mb-12 textnew adjust1' >
         <div className='flexmade'>
         <img width="150" src="/assets/images/logowhite.png" alt="logo"></img>
         <div>
         <p className='justice text-xl text-sky-700'> {data.name.toUpperCase()}</p>
          <p className='justice sm:text-xl text-md text-sky-700'>{data.email}</p>
          </div>
          </div>
         <hr className='my-3'/>
               <p className='mb-5 mt-4 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>Education</p>
                 {data.education.map((ele,i)=>{
                   return(
                     <div className='mb-5' key={i}>
                       <p className='text-md'><span className="text-sky-600 textform text-md">{i===0?"College":"Institution"}: </span>{ele.collegeName}</p>
                       <p className='text-md'><span className="text-sky-600 textform text-md">Degree: </span> {ele.degreeName}</p>
                       <p className='text-md'><span className="text-sky-600 textform text-md">Grade: </span> {ele.grade}</p>
                       <p className="text-md"><span className="text-sky-600 textform text-md">Duration: </span> {ele.startYear.split("T")[0].replaceAll("-","/")} - {ele.endYear.split("T")[0].replaceAll("-","/")}</p>
                     </div>
                   )
                 })}
                 <hr/>
                 <p className='mb-5 mt-3 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>Experience</p>
                 {data.experience.map((ele,i)=>{
                   return(
                     <div className='mb-5' key={i}>
                       <p className="text-md"><span className="text-sky-600 textform text-md">Company Name: </span> {ele.companyName}</p>
                       <p className="text-md"><span className="text-sky-600 textform text-md">Title: </span> {ele.title}</p>
                       <p className="text-md"><span className="text-sky-600 textform text-md">Location: </span> {ele.location}</p>
                       <p className="text-md leading-6"><span className="text-sky-600 textform text-md">Description: </span> {ele.description}</p>
                       <p className='mb-1 text-md'><span className="text-sky-600 textform text-md">Skills Used: </span> {ele.skills.map((item,i)=>{
                         return(
                           <span className="">{item}, </span>
                         )
                       })}</p>
                     </div>
                   )
                 })}
                 {/* <div className='html2pdf__page-break'></div> */}
                 <hr/>
                 <p className='mb-5 mt-3 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>Projects</p>
                 {data.project.map((ele,i)=>{
                   return(
                     <div className='mb-5' key={i}>
                       <p className="text-md"><span className="text-sky-600 textform text-md">Name: </span> {ele.projectName}</p>
                       <p className="text-md leading-6"><span className="text-sky-600 textform text-md">Description: </span> {ele.projectDes}</p>
                       <p className="text-md"><span className="text-sky-600 textform text-md">Link: </span>  {ele.projectLinks}</p>
                     </div>
                   )
                 })}
                 <hr/>
               <p className='mb-5 mt-3 font-semibold underline decoration-red-400 underline-offset-8 text-2xl text-red-700'>Achievements</p>
               {data.achievement.map((ele,i)=>{
                   return(
                     <div className='mb-5' key={i}>
                       <p className="text-md leading-6"><span className="text-sky-600 textform text-md">{i+1}.</span> {ele.achievementName}</p>
                     </div>
                   )
                 })}
              </div>
              </>
    )
}