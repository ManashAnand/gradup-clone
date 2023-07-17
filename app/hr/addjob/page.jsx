"use client"
import { Spacer, Textarea, Grid, Checkbox,Text } from "@nextui-org/react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Select from "react-select";
import Spinner from "@components/Spinner"
import useSWR from 'swr';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { useState } from 'react'
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const page = ({ params }) => {
  const [value,setValue]=useState(false)
  const [value1,setValue1]=useState(false)
  const [value2,setValue2]=useState(false)
  const [onefield,setOneField]=useState(false)
  const [posted, setPosted] = useState(false)
  const [err,setErr]=useState(false)
  const [title,setTitle]=useState("")
  const [joblist,setJoblist]=useState([])
  const [perkslist,setPerkslist]=useState([])
  let checkbox=["Certificate","Letter of recommendation","Flexible work hours","5 days a week","Life Insurance","Health Insurance"]
  let titleList = [
    { value:"Others",label:"Others"},
    { value: "Software Developer/Engineer",label: "Software Developer/Engineer" },
    { value: "Front-End Developer",label: "Front-End Developer" },
    { value: "Back-End Developer",label: "Back-End Developer" },
    { value: "Full-Stack Developer",label: "Full-Stack Developer" },
    { value: "Mobile App Developer",label: "Mobile App Developer" },
    { value: "Data Scientist",label: "Data Scientist" },
    { value: "Data Analyst",label: "Data Analyst" },
    { value: "Database Administrator",label: "Database Administrator" },
    { value: "Systems Administrator",label: "Systems Administrator" },
    { value: "Network Engineer",label: "Network Engineer" },
    { value: "HR Manager",label: "HR Manager" },
    { value: "IT Project Manager",label:"IT Project Manager" },
    { value: "IT Consultant", label: "IT Consultant" },
    { value: "Business Analyst",label: "Business Analyst" },
    { value: "UI/UX Designer",label: "UI/UX Designer" },
    { value: "Quality Assurance Engineer/Tester",label: "Quality Assurance Engineer/Tester" },
    { value: "DevOps Engineer",label: "DevOps Engineer" },
    { value: "Cloud Architect/Engineer",label: "Cloud Architect/Engineer" },
    { value: "IT Support Specialist",label: "IT Support Specialist" },
    { value: "Technical Writer",label: "Technical Writer" },
    { value:"Java Developer",label:"Java Developer"},
    { value:"Python Developer",label:"Python Developer"},
    { value:"Web Developer",label:"Web Developer"},
    { value:"JavaScript Developer",label:"JavaScript Developer"},
    { value:"Game Developer",label:"Game Developer"},
    { value:"C#/.Net Developer",label:"C#/.Net Developer"},
    { value:"Wordpress Developer",label:"Wordpress Developer"},
    { value:"Salesforce Developer",label:"Salesforce Developer"},
    { value:"Unity Developer",label:"Unity Developer"},
    { value:"Machine Learning Engineer",label:"Machine Learning Engineer"},
    { value:"Data Engineer",label:"Data Engineer"},
    { value:"DevOps Engineer",label:"DevOps Engineer"},
    { value:"Cloud Engineer",label:"Cloud Engineer"},
    { value:"Blockchain Developer",label:"Blockchain Developer"},
    { value:"Database Developer",label:"Database Developer"},
    { value:"Automation Developer",label:"Automation Developer"},
    { value:"Microservices Developer",label:"Microservices Developer"},
    { value:"IOS Developer",label:"IOS Developer"},
    { value:"Android Developer",label:"Android Developer"},
    { value:"Data Architect",label:"Data Architect"},
    { value:"Database Analyst",label:"Database Analyst"},
    { value:"SQL Developer",label:"SQL Developer"},
    { value:"Database Designer",label:"Database Designer"},
    { value:"Big Data Engineer",label:"Big Data Engineer"},
    { value:"Data Quality Analyst",label:"Data Quality Analyst"},
    { value:"Operations Manager",label:"Operations Manager"},
    { value:"Support Analyst",label:"Support Analyst"},
    { value:"Network Support Engineer",label:"Network Support Engineer"},
    { value:"Customer Support Representative",label:"Customer Support Representative"},
    { value:"IT Help Desk Manager",label:"IT Help Desk Manager"},
    { value:"HR Business Patner",label:"HR Business Partner"},
    { value:"HR Specialist",label:"HR Specialist"},
    { value:"Talent Acquisition Specialist",label:"Talent Acquisition Specialist"},
    { value:"HR Operations Manager",label:"HR Operations Manager"},
    { value:"HR Business Analyst",label:"HR Business Analyst"},
    { value:"IT Operations Manager",label:"IT Operations Manager"},
    { value:"IT Operations ANalyst",label:"IT Operations ANalyst"},
    { value:"Risk Analyst",label:"Risk Analyst"},
    { value:"Software Trainer",label:"Software Trainer"},
    { value:"Product Owner",label:"Product Owner"},
    { value:"Team Lead",label:"Team Lead"},
    { value:"Release Manager",label:"Release Manager"},
    { value:"Support Engineer",label:"Support Engineer"},
    { value:"Systems Engineer",label:"Systems Engineer"},
    { value:"Software Tester",label:"Software Tester"},
    { value:"Security Engineer",label:"Security Engineer"},
    { value:"Scrum Master",label:"Scrum Master"},
    { value:"Product Manager",label:"Product Manager"},
    { value:"Data Warehouse Developer",label:"Data Warehouse Developer"},
    { value:"Mathematics & Computing",label:"Mathematics & Computing"},
    { value:"Content Development",label:"Content Development"},
    { value:"Digital Marketing",label:"Digital Marketing"},
    { value:"Subject Matter Expert",label:"Subject Matter Expert"},
    { value:"Robotics",label:"Robotics"},
    { value:"Creative Writing",label:"Creative Writing"},
    { value:"Graphic Designing",label:"Graphic Designing"},
    { value:"Business Development",label:"Business Development"},
    { value:"Media & Public Relations",label:"Media & Public Relations"},
    { value:"Social Media Marketing",label:"Social Media Marketing"},
    { value:"Video Editing",label:"Video Editing"},
    { value:"Cyber Security",label:"Cyber Security"},
    { value:"Supply Chain Management",label:"Supply Chain Management"},
  ];
  // const [loading,setLoading]=useState(false)
  function handleChange(){
    value===true?setValue(false):setValue(true)
  }
  function handleChange1(){
    value1===true?setValue1(false):setValue1(true)
  }
  function handleChange2(){
    setValue(false)
  }
  function handleChange4(e){
    console.log(e.target.value)
    if (perkslist.includes(e.target.value)){
     let perksremain=perkslist.filter((ele,i)=>{
        return ele!==e.target.value
      })
    setPerkslist(perksremain)
    }
    else{
    setPerkslist([...perkslist,e.target.value])
    }
    console.log(perkslist)
  }
  const router = useRouter();
  const { data: session } = useSession();
  // const { data, error } = useSWR( `/api/jobs/${params.id}`, fetcher)
  // if (error) return <div>Failed to loadinggggggg job data</div>;
  // if (!data) return <div>Loading...</div>;
  // const jobs=data;
  const createNewJob = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("Form Submitted");
    // e.target[0].value && e.target[2].value && e.target[4].value && e.target[8].value && e.target[15].value && e.target[17].value && e.target[18].value?setPosted(true):setPosted(false) 
    try {
      for (let i = 0; i < e.target.length; i++) {
        console.log("index is this ", i, " label is this ", e.target[i].label, " value is this ", e.target[i].value);
      }

      const response = await fetch("/api/jobs/new", {
        method: "POST",
        body: JSON.stringify({
          HRId: session?.user.id,
          title:title,
          logo:session?.user.image,
          stipend:!onefield? e.target[4].value:e.target[5].value,
          companyName:!onefield? e.target[5].value:e.target[6].value,
          // companyLink: e.target[3].value,
          duration:!onefield? e.target[6].value:e.target[7].value,
          
          // eligiblilty:!onefield?e.target[7].value:e.target[8].value,
          lastDate:!onefield?e.target[7].value:e.target[8].value,
          expectedStartDate:!onefield?e.target[8].value:e.target[9].value,
          noOfOpenings:!onefield?e.target[9].value:e.target[10].value,
          skillsRequired:!onefield?e.target[10].value:e.target[11].value,
          description:!onefield?e.target[11].value:e.target[12].value,
          // responsibilities:!onefield?e.target[13].value:e.target[14].value,
          perks:perkslist,
          isIntern:e.target[0].value,
          isStartUp:e.target[2].value
          
          // 
          // workingHours: e.target[12].value,
          // postedDate: e.target[13].value,
        }),
      });
      console.log(response.status)
      if(response.status==201){
        setPosted(true)
        setErr(false)
      }
      if(response.status==500){
        setPosted(true)
        setErr(true)
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setIsSubmitting(false);
      // alert("Submitted");
    }
  };
  function handleTitle(data) {
    setJoblist(data)
    data.value!=="Others"?setTitle(data.value):setTitle("")
    data.value==="Others"?setOneField(true):setOneField(false)
    console.log(title)
  }
  function handlenewTitle(e){
   setTitle(e.target.value)
  }
  // const [posted, setPosted] = useState(false)
  // const [notposted, setNotposted] = useState(false)
  return (
    <>
    {!posted ?
      <div className='justify-center w-full align-center justify-items-center hrjobs mt-6 mb-20 border-2 border-white px-4 textform'>
        <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Image
          src="/assets/images/logo-for-website.png"
          alt="logo"
          width={150}
          height={80}
          className="mb-6 font-bold text-center snap-center"
        /> */}
      </div>
        <h1 className='font-bold text-5xl text-left mb-5'>
        <p className='textform text-4xl underline decoration-white animate-charcter underline-offset-8 text-center text-white mb-8'>Post a Job and hire the best Talent</p>
        </h1>
        <form onSubmit={createNewJob} className='w-full'>
          <Grid.Container gap={2} >
          <Grid xs={12} sm={12}>
            <div className="flexset w-full border-2 border-white pb-4">
            <div style={{}} className="text-white ml-4">
              <input className="lg mt-6" value={value} onChange={handleChange} type="checkbox"></input>
              <label className="text-lg ml-2">Internship</label>
            </div>
            <div style={{}} className="text-white ml-4">
              <input className="lg mt-6" value={value} onChange={handleChange2} type="checkbox"></input>
              <label className="text-lg ml-2">Full-Time Jobs</label>
            </div>
            <div style={{}} className="text-white ml-4">
              <input className="lg mt-6" value={value1} onChange={handleChange1} type="checkbox"></input>
              <label className="text-lg ml-2">Startup Projects</label>
            </div>
            </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.8vh", marginLeft: "0.6em" }}><path d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"></path><path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z"></path></svg>
                  <label className="text-md text-white my-3 ml-1">Job Title *</label>
                </div>
              <Select
              className="container text-left"
              options={titleList}
              placeholder="Select job"
              onChange={handleTitle}
              value={joblist}
              /> 
           </div>
            </Grid>
            {onefield?<Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.8vh", marginLeft: "0.6em" }}><path d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"></path><path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z"></path></svg>
                <label className="text-md text-white my-3 ml-1">If Others, Please specify *</label>
                </div>
                <input className="rounded-md p-2" css={{ backgroundColor: "$white" }} onChange={handlenewTitle} clearable placeholder="Job Title" value={title} required/>
              </div>
            </Grid>:""}
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.6em" }}><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path><path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
                  <label className="text-md text-white my-3 ml-1">{value===true?"Stipend *": "Salary (per month)*"}</label>
                </div>
                <input className="rounded-md p-2" css={{ backgroundColor: "$white" }} clearable placeholder={value===true?"Stipend":"Salary"} initialValue="" required />
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.6em" }}><path d="M18 2H6c-1.103 0-2 .897-2 2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm0 18H6V4h12v16z"></path><path d="M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z"></path></svg>
                  <label className="text-md text-white my-3 ml-1">Company Name *</label>
                </div>
                <input className="rounded-md p-2" type="text" css={{ backgroundColor: "$white" }} clearable placeholder="Company Name" initialValue="" required />
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.6em" }}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
                  <label className="text-md text-white my-3 ml-1">Duration (in Months)</label>
                </div>
                <input className="rounded-md p-2" css={{ backgroundColor: "$white" }} clearable placeholder="Duration" initialValue="" />
              </div>
            </Grid>
            {/* <div className="flex flex-col mx-auto w-full">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.9em" }} ><path d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z"></path></svg>
                <label className="text-md text-white mt-3 ml-1">Eligibility *</label>
              </div>
              <Textarea
                css={{ mt: "$5", mx:"$6", backgroundColor: "$white" }}
                rows='8'
                placeholder="Eligibility Criteria"
                initialValue={`Required Eligibility criteria :\n1. \n2.\n3.`}
                required
              />
            </div> */}
            <Grid xs={12} sm={4}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.6em" }}><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
                  <label className="text-md text-white my-3 ml-1">Last Date to Apply *</label>
                </div>
                <input className="rounded-md p-2" type="date" css={{ backgroundColor: "$white" }} clearable Placeholder="Last Date to apply" initialValue="" required />
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.6em" }}><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
                  <label className="text-md text-white my-3 ml-1">Expected Start Date</label>
                </div>
                <input className="rounded-md p-2" type="date" css={{ backgroundColor: "$white" }} clearable Placeholder="Expected Start Date" initialValue="" />
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.6em" }}><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path></svg>
                  <label className="text-md text-white my-3 ml-1">No. of Openings *</label>
                </div>
                <input className="rounded-md p-2" type="number" css={{ backgroundColor: "$white" }} clearable Placeholder="No. of Openings" initialValue="" required />
              </div>
            </Grid>
            <Grid xs={12} sm={12}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "1.6vh", marginLeft: "0.6em" }}><path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path><path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path></svg>
                  <label className="text-md text-white mt-3 mb-2 ml-1">Skills Required * <span className="text-md text-white textnew">(Comma seperated skills)</span></label>
                </div>
                <input className="rounded-md p-2" type="text" css={{ backgroundColor: "$white" }} clearable Placeholder="Skills" initialValue="" required />
              </div>
            </Grid>
            <div className="flex flex-col mx-auto w-full">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "auto", marginLeft: "0.9em" }}><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path></svg>
                <label className="text-md text-white mt-9 ml-1">{value?"Intern's Responsibilities":"Job Description & Responsibilities *"}</label>
              </div>
              <Textarea
                css={{mx:"$6", mt: "$5", backgroundColor: "$white" }}
                rows='10'
                placeholder="Description of the Job"
                initialValue={`Job Description :\n1. \n2.\n3.`}
                required
              />
            </div>
            {/* <div className="flex flex-col mx-auto w-full">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white", marginTop: "4.7vh", marginLeft: "0.9em" }}><path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path><path d="M7 9h10v2H7zm0 4h5v2H7z"></path></svg>
                <label className="text-md text-white mt-8 ml-1">Responsibilities *</label>
              </div>
              <Textarea
                css={{ mt: "$5",mx:"$6", backgroundColor: "$white" }}
                rows='10'
                placeholder="Roles and Responsibilities"
                initialValue={`Roles & Responsibilities include :\n1. \n2.\n3.`}
                required
              />
            </div> */}
            <div className="flex flex-col mx-auto w-full">
              <div className="flex mb-4">
                <MilitaryTechIcon style={{ fill: "white", marginTop: "auto", marginLeft: "0.9em" }} />
                <label className="text-md text-white mt-9 ml-1">Perks & Benefits *</label>
              </div>
              {/* <Textarea
                css={{ mt: "$5",mx:"$6", backgroundColor: "$white" }}
                rows='10'
                placeholder="Perks"
                initialValue={`Benefits :\n1. \n2.\n3.`}
                required
              /> */}
              <div className="gridset text-white text-left border-2 border-white px-10 py-5">
                {checkbox.map((ele,i)=>{
                   return(<div className="my-3" key={i}>
                     <input className="lg" value={ele} onChange={handleChange4} type="checkbox"></input>
                     <label className="ml-2 text-lg">{ele}</label>
                   </div>)
                })}
              </div> 
            </div>
          </Grid.Container>

          {/* <Grid.Container gap={2} >
            <input className="rounded-md p-2" clearable  label="Job Title" Placeholder="Job Title" initialValue="" />
            <Spacer y={0.5} />
            <input className="rounded-md p-2" clearable  label="Stipend" Placeholder="Stipend" initialValue="" />
            <Spacer x={0.5} />
          </Grid.Container> */}
          {/* <Textarea
                
              label="Description of the Job"
              placeholder="Description of the Job"
            /> */}
          <a href="#"><button type='submit' className='py-2 px-10 float-left rounded-xl bg-white ml-3 mt-7 border-sky-800 border-2 hover:bg-white hover:text-blue-500 hover:border-blue-600'  >Submit</button></a>
        </form>
      </div> : err?<div className="flex flex-col items-center justify-center my-20"><img width="700" src="/assets/images/500error.png" alt="500 Error"></img></div>: <div className="flex flex-col justify-center items-center my-32">
      <img width="250" src="/assets/images/jobpost.gif"></img>
      <p className="text-4xl text text-lime-500 mb-4">Successfully published the job.</p>
      <p className="text-white">Check the dashboard for tracking the application.</p>
      <div className="flex justify-center">
      <a href="/hr/posted-jobs"><button className="px-5 py-2 rounded-md bg-white text-blue-500 mt-5">Go to Dashboard</button></a>
      </div>
    </div>}</>
  )
}

export default page