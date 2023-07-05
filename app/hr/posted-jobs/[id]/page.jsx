"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, Grid, Row, Text, Avatar } from "@nextui-org/react";
import Spinner from "@components/Spinner"
import {useState,useEffect} from "react"
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Page({params}){
  const [index,setIndex]=useState(1)
  console.log(params)
    const [status,setStatus]=useState(true)
    const [pos,setPos]=useState(0)
  const { data: session } = useSession();
  function handleClick(i){
    setStatus(true)
    setPos(i)
    console.log(data[i])
  }
  // async function fetch_data(){
  //   let data=await fetch(`/api/hr/${session?.user.id}/postedJob/${params.id}?page=1`)
  //   let parsedData=await data.json()
  //   setProfiledata(parsedData)
  //   console.log(parsedData)
  //   setEducation(parsedData.education)
  //   setExperience(parsedData.experience)
  //   setProjects(parsedData.projects)
  //   setAchievement(parsedData.achievement)
  //   }
  //   useEffect(()=>{
  //     fetch_data()
  //   },[])
  const { data, error } = useSWR( `/api/hr/${session?.user.id}/postedJob/${params.id}?page=${index}`, fetcher)
  // ... handle loading and error states
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div className="my-60 mx-auto"><Spinner/></div>;
  console.log("data come isssssssssssssssssssssssssssss",data);
  // const createPDF = async(index) => {   
  //   const pdf = new jsPDF("portrait","mm","a4"); 
  //   let dataprofile= await data
  //   const data1 =await html2canvas(document.querySelector("#profile"));
  //   const img = data1.toDataURL("image/png");  
  //   const imgProperties = pdf.getImageProperties(img);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   pdf.addImage(img, "PNG", 0, 0, pdfWidth,pdfHeight);
  //   pdf.save(`${dataprofile[index].name}.pdf`)
  // };
  return (
    <>
    <div className='w-screen displayprofile'>
          <div className={data.length>1?"grid grid-cols-1 overflow-y-scroll cardslide pr-6 gap-y-6 gap-x-10 mb-6":"grid grid-cols-1 cardslide pr-6 gap-y-6 gap-x-10 mb-6"}>
            {data.length>0?data.map((ele, i) => {
              return(
                <a href="#profile">
                <Card onClick={()=>handleClick(i)} key={i} className='box1' css={{height:"max-content"}} isPressable>
                  <Card.Body css={{ px:"$16",py:"$6",background:"#29335c",borderRadius:"$md"}}>
                    <Card.Image
                      src="/assets/images/profpic.png"
                      objectFit="contain"
                      width="100%"
                      height={140}
                      alt="profile"
                    />
                  </Card.Body>
                      <Text css={{fontWeight: "$semibold", fontSize: "$md",width:"stretch",textAlign:"center",pt:"$5" }}>{ele.name}</Text>
                      <Text css={{fontSize: "$sm" ,pb:"$5",textAlign:"center"}}>
                      {ele.education.length>0?ele.education[0].collegeName:"Shree Agrasen Academy"}
                      </Text>
                  <button onClick={()=>handleClick(i)} style={{backgroundColor:"#29335c"}} className="px-7 py-1 text-xs text-white mb-3 rounded-full">Resume Details</button>
                </Card>
                </a>
             )}):""}
             </div>
             {status?data.length>0?<div id="profile" style={{height:"fit-content",backgroundColor:"deepskyblue"}} className='bg-white px-12 py-5 textnew mx-auto adjust' >
                {data.length>0?<p className='text-2xl text-center mb-2'><span className=" font-semibold underline text-xl underline-offset-8 decoration-white"><img className='mx-auto mb-2' width="60" src="/assets/images/profpic.png"/>
         </span> {data[pos].name.toUpperCase()}</p>:""}
        <hr className='my-3'/>
                {data.length>0?<p className='my-3 font-semibold text-2xl text-white underline underline-offset-8 decoration-green-300'>Education</p>:""}
                {data.length>0?data[pos].education.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p>{i===0?"College":"Institution"}: {ele.collegeName}</p>
                      <p>Degree: {ele.degreeName}</p>
                      <p>Grade: {ele.grade}</p>
                      <p>Duration: {ele.startYear.split("T")[0].replaceAll("-","/")} - {ele.endYear.split("T")[0].replaceAll("-","/")}</p>
                    </div>
                  )
                }):""}
                {data.length>0?<p className='my-3 font-semibold text-2xl text-white underline underline-offset-8 decoration-green-300'>Experience</p>:""}
                {data.length>0?data[pos].experience.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p>Company Name: {ele.companyName}</p>
                      <p>Title: {ele.title}</p>
                      <p>Location: {ele.location}</p>
                      <p>Description: {ele.description}</p>
                      <p className='mb-1'>Skills Used: {ele.skills.map((item,i)=>{
                        return(
                          <p className="text-sm">{i+1}. {item}</p>
                        )
                      })}</p>
                    </div>
                  )
                }):""}
                {data.length>0?<p className='my-3 font-semibold text-2xl text-white underline underline-offset-8 decoration-green-300'>Projects</p>:""}
                {data.length>0?data[pos].project.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p>Name: {ele.projectName}</p>
                      <p>Description: {ele.projectDes}</p>
                      <p>Link: {ele.projectLinks}</p>
                    </div>
                  )
                }):""}
              {data.length>0?<p className='my-3 font-semibold text-2xl text-white underline underline-offset-8 decoration-green-300'>Achievements</p>:""}
              {data.length>0?data[pos].achievement.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p>{i+1}. {ele.achievementName}</p>
                    </div>
                  )
                }):""}
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




