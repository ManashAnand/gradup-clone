"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, Grid, Row, Text } from "@nextui-org/react";
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
  const createPDF = async() => {   
    const pdf = new jsPDF("portrait", "pt", "a4"); 
    const data =await html2canvas(document.querySelector("#profile"));
    const img = data.toDataURL("image/png");  
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Resume.pdf");
  };
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
  return (
    <>
    <div className='w-screen displayprofile'>
          <div className={data.length>0?"grid grid-cols-1 overflow-y-scroll cardslide pr-6 gap-y-6 gap-x-10 mb-6":""}>
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
                  <button onClick={createPDF} style={{backgroundColor:"#29335c"}} className="px-7 py-1 text-xs text-white mb-3 rounded-full">Download Resume</button>
                </Card>
                </a>
             )}):""}
             </div>
             {status?data.length>0?<div id="profile" style={{height:"fit-content"}} className='bg-white px-5 py-5 textnew text-sm mx-auto adjust' >
                {data.length>0?<p className='text-xl'><span className=" font-semibold underline text-xl underline-offset-4 decoration-yellow-400">Name :</span> {data[pos].name}</p>:""}
                {data.length>0?<p className='mt-3 font-semibold text-xl underline underline-offset-4 decoration-yellow-400'>Education</p>:""}
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
                {data.length>0?<p className='mt-3 font-semibold text-xl underline underline-offset-4 decoration-yellow-400'>Experience</p>:""}
                {data.length>0?data[pos].experience.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p>Company Name: {ele.companyName}</p>
                      <p>Title: {ele.title}</p>
                      <p>Location: {ele.location}</p>
                      <p>Description: {ele.description}</p>
                      <p>Skills: {ele.skills.map((item,i)=>{
                        return(
                          <span>{item}, </span>
                        )
                      })}</p>
                    </div>
                  )
                }):""}
                {data.length>0?<p className='mt-3 font-semibold text-xl underline underline-offset-4 decoration-yellow-400'>Projects</p>:""}
                {data.length>0?data[pos].project.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <p>Name: {ele.projectName}</p>
                      <p>Description: {ele.projectDes}</p>
                      <p>Link: {ele.projectLinks}</p>
                    </div>
                  )
                }):""}
              {data.length>0?<p className='mt-3 font-semibold text-xl underline underline-offset-4 decoration-yellow-400'>Achievements</p>:""}
              {data.length>0?data[pos].achievement.map((ele,i)=>{
                  return(
                    <div className='mb-2' key={i}>
                      <li>{ele.achievementName}</li>
                    </div>
                  )
                }):""}
             </div>:<div className='text-white text-3xl mx-auto my-20 text-center textnew'>No More Profile Available</div>:""}
        </div>
        <div className="flex buttonpos mb-16">
        <button disabled={index===0?true:false} class="btn2" onClick={() => setIndex(index - 1)}>Prev</button>
        <button class="btn3" onClick={() => setIndex(index + 1)}>Next</button>
        </div>
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




