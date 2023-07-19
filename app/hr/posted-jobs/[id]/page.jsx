"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import html2pdf from 'html2pdf.js';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, Grid, Row, Text, Avatar } from "@nextui-org/react";
import Spinner from "@components/Spinner"
import {useState,useEffect} from "react"
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Page({params}){
  const [index,setIndex]=useState(1)
  const [color,setColor]=useState(localStorage.getItem("color")||"#fff")
    const [status,setStatus]=useState(true)
    const [pos,setPos]=useState(0)
  const { data: session } = useSession();
  function handleClick(i){
    setStatus(true)
    setPos(i)
  }
  function handleClick1(){
    setColor("#fde047")
    localStorage.setItem("color","#fde047")
  }
  function handleClick2(){
    setColor("#4ade80")
    localStorage.setItem("color","#4ade80")
  }
  function handleClick3(){
    setColor("#f87171")
    localStorage.setItem("color","#f87171")
  }
  
  const { data, error } = useSWR( `/api/hr/${session?.user.id}/postedJob/${params.id}?page=${index}`, fetcher)
  // ... handle loading and error states
  if (error) return <div className='text-white  text-center mx-auto my-20'>Some Error Occured!! Please try again</div>;
  if (!data) return <div className="my-60 mx-auto"><Spinner/></div>;
  const createPDF = async(index) => {   
    const pdf=document.getElementById("profile")
    let dataprofile=await data
    var opt={margin:[0,-60],filename:`${dataprofile[index].name}`,image:{type:"jpeg",quality:0.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4"}}
    html2pdf().from(profile).set(opt).save();
  };
  return (
    <>
    <div className='w-screen displayprofile'>
          <div className={data.length>1?"grid grid-cols-1 overflow-y-scroll cardslide pr-6 gap-y-6 gap-x-10 mb-6":"grid grid-cols-1 cardslide pr-6 gap-y-6 gap-x-10 mb-6"}>
            {data.length>0?data.map((ele, i) => {
              return(
                <a href="#">
                <Card style={{backgroundColor:color}} onClick={()=>handleClick(i)} key={i} className='box1' css={{height:"max-content",padding:"$5"}} isPressable>
                      <Text css={{fontWeight: "$semibold", fontSize: "$md",width:"stretch",textAlign:"center",pt:"$5" }}>{ele.name}</Text>
                      <Text css={{fontSize: "$sm" ,pb:"$5",textAlign:"center"}}>
                      {ele.education.length>0?ele.education[0].collegeName:""}
                      </Text>
                  <button onClick={()=>createPDF(i)} style={{backgroundColor:"#29335c"}} className="px-7 py-1 text-xs text-white mt-5 mb-2 rounded-full">Download Resume</button>
                  <button onClick={handleClick1} className="px-7 py-1 bg-yellow-600 text-xs text-white mb-2 rounded-full">Shortlisted</button>
                  <div className='flex gap-2'>
                  <button onClick={handleClick2} className="px-7 py-1 text-xs text-white mb-2 bg-green-500 rounded-full">Hired</button>
                  <button onClick={handleClick3} className="px-4 py-1 text-xs text-white mb-2 bg-red-500 rounded-full focus:bg-red-100">Not Hired</button>
                  </div>
                </Card>
                </a>
             )}):""}
             </div>
             {status?data.length>0?<div id="profile" style={{height:"fit-content",backgroundColor:"white"}} className='bg-white text-left px-12 py-2 textnew mx-auto adjust' >
                {data.length>0?<p className=' text-center text-xl text-sky-500 mt-1'><span className=""><img className='mx-auto' width="50" src="/assets/images/profpic.png"/>
         </span> {data[pos].name.toUpperCase()}</p>:""}
        <hr className='my-3'/>
                {data.length>0?<p className='my-2 font-semibold text-xl text-sky-500 underline underline-offset-4 decoration-sky-300'>Education</p>:""}
                {data.length>0?data[pos].education.map((ele,i)=>{
                  return(
                    <div className='mb-2 leading-6' key={i}>
                      <p className=''>{i===0?"College":"Institution"}: {ele.collegeName}</p>
                      <p className=''>Degree: {ele.degreeName}</p>
                      <p className=''>Grade: {ele.grade}</p>
                      <p className="">{ele.startYear.split("T")[0].replaceAll("-","/")} - {ele.endYear.split("T")[0].replaceAll("-","/")}</p>
                    </div>
                  )
                }):""}
                {data.length>0?<p className='my-2 font-semibold text-xl text-sky-500 underline underline-offset-4 decoration-sky-300'>Experience</p>:""}
                {data.length>0?data[pos].experience.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p className=''>Company Name: {ele.companyName}</p>
                      <p className=''>Title: {ele.title}</p>
                      <p className=''>Location: {ele.location}</p>
                      <p className='leading-6'>Description: {ele.description}</p>
                      <p className='mb-1'>Skills Used: {ele.skills.map((item,i)=>{
                        return(
                          <p className="">{item}, </p>
                        )
                      })}</p>
                    </div>
                  )
                }):""}
                {/* <div className='html2pdf__page-break'></div> */}
                {data.length>0?<p className='my-2 font-semibold text-xl text-sky-500 underline underline-offset-4 decoration-sky-300'>Projects</p>:""}
                {data.length>0?data[pos].project.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p className=''>Name: {ele.projectName}</p>
                      <p className='leading-6'>Description: {ele.projectDes}</p>
                      <p className=''>Link: {ele.projectLinks}</p>
                    </div>
                  )
                }):""}
                {data.length>0?<p className='my-2 font-semibold text-xl text-sky-500 underline underline-offset-4 decoration-sky-300'>Achievements</p>:""}
              {data.length>0?data[pos].achievement.map((ele,i)=>{
                  return(
                    <div className='mb-2 leading-6' key={i}>
                      <p className='leading-5'>{i+1}. {ele.achievementName}</p>
                    </div>
                  )
                }):""}
                {data.length>0?data[pos].coverLetter?<p className='my-2 font-semibold text-xl text-sky-500 underline underline-offset-4 decoration-sky-300'>Cover Letter</p>:"":""}
                {data.length>0?data[pos].coverLetter?<p>{data[pos].coverLetter}</p>:"":""}
             </div>:<div className='text-3xl font-semibold textnew text-center m-auto text-white'>No Applicants yet</div>:<div></div>}
        </div>
        {data.length>0?<div className="flex buttonpos mb-16">
        <button disabled={index===0?true:false} class="btn2 bg-sky-500" onClick={() => setIndex(index - 1)}>Prev</button>
        <button class="btn3 bg-sky-500" onClick={() => setIndex(index + 1)}>Next</button>
        </div>:""}
        {/* <button onClick={createPDF} type="button">Download</button> */}
       </>

    )
  }

  // export default function App () {
  //   const [pageIndex, setPageIndex] = useState(1);
  //   return (
  //     <div>
  //       <div className="justify-center flex-center">
  //         <Page index={pageIndex} />
  //       </div>
  //       {/* <div style={{ display: "none" }}>
  //         <Page index={pageIndex + 1} />
  //       </div> */}
  //       <div className="flex buttonpos mb-16">
  //         <button disabled={pageIndex===0?true:false} class="btn2" onClick={() => setPageIndex(pageIndex - 1)}>
  //           Prev
  //         </button>
  //         <button class="btn3" onClick={() => setPageIndex(pageIndex + 1)}>
  //           Next
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }




