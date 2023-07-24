"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Select from "react-select";
import Link from 'next/link';
import Spinner from "@components/Spinner"
import LoginAlert from '@components/LoginAlert';
import { Input, Textarea, Spacer , Button, Popover} from "@nextui-org/react";
import Education from "@components/userProfile/education"
import { Table, Row, Col, Tooltip, User, textform } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
// import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import Project from '@components/userProfile/project';
import Achievement from '@components/userProfile/achievement';
import Experience from '@components/userProfile/experience';

import { useState,useEffect } from 'react';
import PlusIcon from '@rsuite/icons/Plus';
import {IconButton} from 'rsuite';
const fetcher = async (...args) =>await fetch(...args).then((res) => res.json());

export default function Profile() {
  const { data: session } = useSession();
  const [submitted,setSubmitted]=useState(false)
  const [message,setMessage]=useState(false)
  const [message2,setMessage2]=useState(false)
  const [message3,setMessage3]=useState(false)
  const [start,setStart]=useState("")
  const [end,setEnd]=useState("")
  const [onefield,setOneField]=useState(false)
  const [collegeName,setcollegeName]=useState("")
  const [collegedata,setCollegedata]=useState([])
  const [start1,setStart1]=useState("")
  const [end1,setEnd1]=useState("")
  const [disability1,setDisability1]=useState(false)
  const [disability2,setDisability2]=useState(false)
  const [disability3,setDisability3]=useState(false)
  const [disability4,setDisability4]=useState(false)
  const collegeList = [
    { value: "Others", label: "Others" },
    { value: "Indian Institute of Technology Bombay", label: "Indian Institute of Technology Bombay" },
    { value: "Indian Institute of Science Bangalore", label: "Indian Institute of Science Bangalore" },
    { value: "University of Delhi", label: "University of Delhi" },
    { value: "Jawaharlal Nehru University", label: "Jawaharlal Nehru University" },
    { value: "Anna University", label: "Anna University" },
    { value: "Indian Institute of Technology Madras", label: "Indian Institute of Technology Madras" },
    { value: "University of Mumbai", label: "University of Mumbai" },
    { value: "Indian Statistical Institute Kolkata", label: "Indian Statistical Institute Kolkata" },
    { value: "University of Calcutta", label: "University of Calcutta" },
    { value: "Indian Institute of Technology Kanpur", label: "Indian Institute of Technology Kanpur" },
    { value: "Indian Institute of Technology Delhi", label: "Indian Institute of Technology Delhi" },
    { value: "University of Madras", label: "University of Madras" },
    { value: "Indian Agricultural Research Institute", label: "Indian Agricultural Research Institute" },
    { value: "University of Pune", label: "University of Pune" },
    { value: "Indian Institute of Technology Kharagpur", label: "Indian Institute of Technology Kharagpur" },
    { value: "University of Hyderabad", label: "University of Hyderabad" },
    { value: "Indian Statistical Institute Delhi", label: "Indian Statistical Institute Delhi" },
    { value: "Banaras Hindu University", label: "Banaras Hindu University" },
    { value: "Indian Institute of Technology Roorkee", label: "Indian Institute of Technology Roorkee" },
    { value: "University of Calicut", label: "University of Calicut" },
    { value: "Delhi Technological University", label: "Delhi Technological University" },
    { value: "University of Allahabad", label: "University of Allahabad" },
    { value: "Indian School of Mines Dhanbad", label: "Indian School of Mines Dhanbad" },
    { value: "Visvesvaraya National Institute of Technology Nagpur", label: "Visvesvaraya National Institute of Technology Nagpur" },
    { value: "Jadavpur University", label: "Jadavpur University" },
    { value: "Birla Institute of Technology and Science Pilani", label: "Birla Institute of Technology and Science Pilani" },
    { value: "Indian Institute of Technology Guwahati", label: "Indian Institute of Technology Guwahati" },
    { value: "University of Rajasthan", label: "University of Rajasthan" },
    { value: "Aligarh Muslim University", label: "Aligarh Muslim University" },
    { value: "National Institute of Technology Tiruchirappalli", label: "National Institute of Technology Tiruchirappalli" },
    { value: "Indian Institute of Technology Hyderabad", label: "Indian Institute of Technology Hyderabad" },
    { value: "University of Jammu", label: "University of Jammu" },
    { value: "Indian Veterinary Research Institute", label: "Indian Veterinary Research Institute" },
    { value: "University of Kalyani", label: "University of Kalyani" },
    { value: "Guru Gobind Singh Indraprastha University", label: "Guru Gobind Singh Indraprastha University" },
    { value: "National Institute of Technology Warangal", label: "National Institute of Technology Warangal" },
    { value: "University of Kashmir", label: "University of Kashmir" },
    { value: "Andhra University", label: "Andhra University" },
    { value: "Indian Maritime University", label: "Indian Maritime University" },
    { value: "University of Lucknow", label: "University of Lucknow" },
    { value: "Indian Statistical Institute Bangalore", label: "Indian Statistical Institute Bangalore" },
    { value: "University of Mysore", label: "University of Mysore" },
    { value: "Savitribai Phule Pune University", label: "Savitribai Phule Pune University" },
    { value: "Indian Institute of Technology Indore", label: "Indian Institute of Technology Indore" },
    { value: "University of Kerala", label: "University of Kerala" },
    { value: "Tata Institute of Fundamental Research", label: "Tata Institute of Fundamental Research" },
    { value: "Panjab University", label: "Panjab University" },
    { value: "Jaypee Institute of Information Technology", label: "Jaypee Institute of Information Technology" },
    { value: "National Institute of Technology Surathkal", label: "National Institute of Technology Surathkal" },
    { value: "Thapar Institute of Engineering and Technology", label: "Thapar Institute of Engineering and Technology" },
    { value: "Delhi College of Engineering", label: "Delhi College of Engineering" },
    { value: "Amity University", label: "Amity University" },
    { value: "SRM Institute of Science and Technology", label: "SRM Institute of Science and Technology" },
    { value: "Lovely Professional University", label: "Lovely Professional University" },
    { value: "VIT University", label: "VIT University" },
    { value: "Manipal Academy of Higher Education", label: "Manipal Academy of Higher Education" },
    { value: "Christ University", label: "Christ University" },
    { value: "Symbiosis International University", label: "Symbiosis International University" },
    { value: "Bennett University", label: "Bennett University" },
    { value: "Shiv Nadar University", label: "Shiv Nadar University" },
    { value: "BITS Pilani", label: "BITS Pilani" },
    { value: "Ashoka University", label: "Ashoka University" },
    { value: "FLAME University", label: "FLAME University" },
    { value: "O.P. Jindal Global University", label: "O.P. Jindal Global University" },
    { value: "SP Jain Institute of Management and Research", label: "SP Jain Institute of Management and Research" },
    { value: "Amity Business School", label: "Amity Business School" },
    { value: "Narsee Monjee Institute of Management Studies", label: "Narsee Monjee Institute of Management Studies" },
    { value: "International Institute of Information Technology Hyderabad", label: "International Institute of Information Technology Hyderabad" },
    { value: "MISB Bocconi", label: "MISB Bocconi" },
    { value: "Jain University", label: "Jain University" },
    { value: "Azim Premji University", label: "Azim Premji University" },
    { value: "St. Xavier's College, Mumbai", label: "St. Xavier's College, Mumbai" },
    { value: "Symbiosis Centre for Management Studies", label: "Symbiosis Centre for Management Studies" },
    { value: "Welingkar Institute of Management Development and Research", label: "Welingkar Institute of Management Development and Research" },
    { value: "Nirma University", label: "Nirma University" },
    { value: "SP Jain School of Global Management", label: "SP Jain School of Global Management" },
    { value: "Loyola College, Chennai", label: "Loyola College, Chennai" },
    { value: "Symbiosis Institute of Business Management", label: "Symbiosis Institute of Business Management" },
    { value: "Christ University, Bangalore", label: "Christ University, Bangalore" },
    { value: "Xavier Institute of Management, Bhubaneswar", label: "Xavier Institute of Management, Bhubaneswar" },
    { value: "KJ Somaiya Institute of Management", label: "KJ Somaiya Institute of Management" },
    { value: "Narsee Monjee Institute of Technology", label: "Narsee Monjee Institute of Technology" },
    { value: "Symbiosis Institute of Technology", label: "Symbiosis Institute of Technology" },
    { value: "Mithibai College of Arts", label: "Mithibai College of Arts" },
    { value: "Xavier Institute of Social Service", label: "Xavier Institute of Social Service" },
    { value: "Jamia Millia Islamia", label: "Jamia Millia Islamia" },
    { value: "Vellore Institute of Technology Bhopal", label: "Vellore Institute of Technology Bhopal" },
    { value: "Amity University Jaipur", label: "Amity University Jaipur" },
    { value: "Birla Global University", label: "Birla Global University" },
    { value: "FLAME University Pune", label: "FLAME University Pune" },
    { value: "Kalinga Institute of Industrial Technology", label: "Kalinga Institute of Industrial Technology" },
    { value: "JSS Academy of Technical Education Noida", label: "JSS Academy of Technical Education Noida" },
    { value: "BMS College of Engineering", label: "BMS College of Engineering" },
    { value: "Shri Ramdeobaba College of Engineering and Management", label: "Shri Ramdeobaba College of Engineering and Management" },
    { value: "Symbiosis Law School Pune", label: "Symbiosis Law School Pune" },
    { value: "NITTE Meenakshi Institute of Technology", label: "NITTE Meenakshi Institute of Technology" },
    { value: "Manipal Institute of Technology", label: "Manipal Institute of Technology" }
  ];
  function handleCollegename(data) {
    data.value!=="Others"?setcollegeName(data.value):setcollegeName("")
    data.value==="Others"?setOneField(true):setOneField(false)
    setCollegedata(data)
  }
  function handlenewCollegename(e){
    setcollegeName(e.target.value)
  }
  function handleChange1(e){
    setStart(e.target.value)
  }
  function handleChange2(e){
    setEnd(e.target.value)
  }
  function handleChange3(e){
    setStart1(e.target.value)
  }
  function handleChange4(e){
    setEnd1(e.target.value)
  }
  useEffect(()=>{
    if(start>end){
      setMessage2(true)
    }
    else{
      setMessage2(false)
    }
  },[end])
  useEffect(()=>{
    if(start1>end1){
      setMessage3(true)
    }
    else{
      setMessage3(false)
    }
  },[end1])

  // console.log(session, "Ajay",data);
  // console.log("ye id haiiiiiiiiiii",  session?.user.id);
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher)
  // if want to revalidate after lower time then => ,{ refreshInterval: 1000 } after fetch
  // const { data, error } = await  `/api/user/${session?.user.id}` : null, fetcher)
  const addEducationField = () =>{
    const newEdu = {
    collegeName:"",
    degreeName: "",
    branch: "",
    grade: "",
    startYear: "",
    endYear: "",
    currentlyStudying: ""
    }
    data.education.push(newEdu)
  }
  if (error) return <div>
  <p className='text-3xl animate-charcter justice textform mb-5 text-sky-500 '>Please Sign In to make your Profile !</p>
</div>;
  if (!data) return <div className="my-60"><Spinner/></div>;
      // useEffect(()=>{
      //   const fetchData = async () =>{
      //     const d = await fetch(`/api/user/${session?.user.id}`)
      //     const dd = await d.json();
      //     addNewEducation(dd.education)
      //   }
      //   fetchData();
      // },[]);

      // useEffect(()=>{

      //   const fetchData = async() => {
      //     if(session?.user.id){
      //       const d = await fetch(`/api/user/${session?.user.id}`)
      //         const dd = await d.json();
      //         addNewEducation(dd.education)
      //         console.log(d);
      //         console.log(education)
      //     }
      //     else {
      //       alert('user undefined')
      //     }
              
      //       }
      //       fetchData();
      //  },[]);
      const addNewEducation=async (e)=>{
        e.preventDefault()
        setDisability4(true)
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=education&action=create`, {
            method: "POST",
            body: JSON.stringify({
              collegeName:collegeName,
              degreeName:!onefield?e.target[1].value:e.target[2].value,
              branch:!onefield?e.target[3].value:e.target[4].value,
              grade:!onefield?e.target[2].value:e.target[3].value,
              startYear:!onefield?e.target[4].value:e.target[5].value,
              endYear:!onefield?e.target[5].value:e.target[6].value,
            }),
          });
          response.status===201?window.location.reload():""
          response.status===500?alert("Education not added"):""
          response.status===201?alert("Education added successfully"):""
          setDisability4(false)
        } catch (error) {
        } finally {
          
        }
        // var formData = new FormData(e.target);
        // const data = new FormData()
        // const form_values = Object.entries(formData).forEach(([key, value]) => {
        // data.append(key, value);
      // })
      // console.log("form_values",form_values)
      }
      // Function for Add New Project
      const addNewProject=async (e)=>{
        e.preventDefault();
        setDisability3(true)
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=project&action=create`, {
            method: "POST",
            body: JSON.stringify({
              projectName:e.target[0].value,
              projectDes:e.target[1].value,
              skillsUsed:e.target[2].value,
              projectLinks:e.target[3].value,
            }),
          });
          response.status===201?window.location.reload():""
          response.status===500?alert("Project not added"):""
          response.status===201?alert("Project added successfully"):""
          setDisability3(false)
        } catch (error) {
        } finally {
          
        }
      }
      //
      const addNewExperience=async (e)=>{
        e.preventDefault()
        setDisability2(true)
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=experience&action=create`, {
            method: "POST",
            body: JSON.stringify({
              companyName:e.target[0].value,
              location:e.target[1].value,
              title:e.target[2].value,
              description:e.target[3].value,
              skills:e.target[4].value,
              startDate:e.target[5].value,
              endDate:e.target[6].value,
            }),
          });
          response.status===201?window.location.reload():""
          response.status===500?alert("Experience not added"):""
          response.status===201?alert("Experience added successfully"):""
          setDisability2(false)
        } catch (error) {
        } finally {
        }
      }

      // For converting a user into alumni;
      const beAlumni=async(e)=>{

        try{
          const response = await fetch(`/api/user/${session?.user.id}/?type=alumni&action=update`,{
            method:"POST",
            body:JSON.stringify({
              data:"aaa"
            })
          });
          if(response.status===201){
            alert("You are added as an alumni")
          }
        }catch(error){
        }finally{

        }
      }


      const addNewAchievement=async (e)=>{
        setDisability1(true)
        e.preventDefault()
        window.scrollTo(0,0)
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=achievement&action=create`, {
            method: "POST",
            body: JSON.stringify({
              achievementName:e.target[0].value,
            }),
          });
          response.status===201?window.location.reload():""
          response.status===500?alert("Achievement not added"):""
          response.status===201?alert("Achievement added successfully"):""
          setDisability1(false)
        } catch (error) {
        } finally {
          
        }
      }
      const ButtonStyle = { margin: "0px 0.5rem" };
  return (
    <div className='w-full mb-16'>
        <section className='w-full headingBox'>
          <h2 className='text-4xl text-white my-7 text'>Make Your Resume</h2>
          <Link href='/user/applications' className='mt-7'>
            <button className='py-2 px-5 bg-blue-500 text-white rounded-md'>Your Applications</button>
          </Link>
          <Link href="/alumni-network">
          <button className=' py-2 px-5 bg-blue-500 text-white rounded-md mt-7' onClick={beAlumni}>Enter Alumni</button>
          </Link>
          {/* <p className='desc text-left'>{data.email}</p> */}
        </section>
        <section className='border-solid border-white border-2 rounded-xl text-left'>
        <div className='m-6'>
        <div className='mx-3 item1 flex flex-col'>
          <label className="mb-2 ml-2 textform text-white text-sm">Name*</label>
          <Input  initialValue={data.name}/> <br/>
          <label className="mb-2 ml-2 textform text-white text-sm">Email*</label>
          <Input  initialValue={data.email}/> <br/>
          <label className="mb-2 ml-2 textform text-white text-sm">Phone No*</label>
          <Input  placeholder='Enter Phone Number' initialValue={data.contactNo} pattern='[0-9]{10}'/> <br/>
          </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mx-3'>
          <div id="education">
            <span className='text-2xl font-semibold text-white my-auto'>Education</span>
            <p className="text-sm text-white">(Add from top to bottom hierarchy)</p>
            <form onSubmit={addNewEducation} className="flex flex-col">
                <div className="flexBox w-full">
                <div className='flex item1 flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">College *</label>
                <Select
                style={{height:"30vh"}}
                 className=" text-left pr-4"
                 options={collegeList}
                 placeholder="Select College"
                 onChange={handleCollegename}
                 value={collegedata}
                />  
                </div>
                {onefield?<div className='flex flex-col item2 mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">If Others, please specify</label>
                <Input  css={{pr:"$4",width:"stretch"}} onChange={handlenewCollegename} placeholder='Enter College Name'/>
                </div>:""}
                </div>
                <div className="flexBox w-full">
                <div className='flex item1 flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Degree</label>
                <Input  css={{pr:"$2",width:"stretch"}}  placeholder='Enter Degree'/>
                </div>
                <div className='flex item2 flex-col item1 mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Grade</label>
                <Input  css={{pr:"$4",width:"stretch"}} placeholder='Enter Grade' required/>
                </div>
                </div>
                <div className='flex item1 flex-col mb-5 mr-2'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Branch*</label>
                <Input  css={{pr:"$6",width:"stretch"}} placeholder='Enter Branch' required/>
                </div>
                <div className="flexBox w-full">
                <div className='flex item1 flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Joining Date *</label>
                <Input  type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter starting date' value={start} onChange={handleChange1} required/>
                </div>
                <div className='flex flex-col item2 mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Leaving Date *</label>
                <Input  type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter ending date' value={end} onChange={handleChange2} required/>
                {message2 && <p className='text-red-400 text-sm'>*Leaving date must be greater than joining date</p>}
                </div>
                </div>
                <Link href="#education"><Button disabled={disability4 && message2?true:false} bordered color="primary" css={{mx:"auto",mt:"30px",width:"fit-content"}} type='submit'>ADD</Button></Link>
                </form>
            {/* <Popover isBordered disableShadow type PopoverPlacement ="right">
              <Popover.Trigger>
                <div style={{width:"100%"}}>
                <button className="btn8 mx-auto bg-sky-700 text-xs">Add Education</button>
                </div>
              </Popover.Trigger>
              
              <Popover.Content>
              <form onSubmit={addNewEducation} className="flex flex-col">
                <label className="mb-1 ml-8 mt-3 text">College</label>
                <Input css={{px:"$10",width:"50vw"}}  placeholder='Enter college'/>
                <label className="mb-1 mt-3 ml-8 text">Degree</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter Degree'/>
                <label className="mb-1 ml-8 mt-3 text">Branch</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter branch'/>
                <label className="mb-1 ml-8 mt-3 text">Grade</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter grade'/>
                <label className="mb-1 ml-8 mt-3 text">Joining Year</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter starting date'/>
                <label className="mb-1 ml-8 mt-3 text">Ending Year</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter ending date'/>
                <Button css={{m:"22px"}} type='submit'>ADD</Button>
                </form>
              </Popover.Content>

            </Popover> */}
            {/* <Button onPress={addEducationField}>Add New</Button> */}
          </div>
          
          {data.education.map((item)=>(
            <Education 
            collegeName={item.collegeName} 
            degreeName={item.degreeName}
            branch={item.branch}
            grade={item.grade}
            startYear={item.startYear}
            endYear={item.endYear}
            id={item._id}
            />
          ))
          }
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mx-3'>
          <div>
            <span className='text-2xl font-semibold text-white my-auto'>Projects</span>
            <p className="text-sm text-white">(Enter all the project details)</p>
            <form onSubmit={addNewProject}className="flex flex-col">
                <div className='item1 flex flex-col'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Project Name *</label>
                <Input  css={{pr:"$4",mb:"$6"}}  placeholder='Enter name'/>
                </div>
                <label className="mb-1 mt-3 ml-2 textform text-white text-sm">Description *</label>
                <Textarea  css={{pr:"$4",mb:"$6"}} rows={5} placeholder='Enter Description'/>
                <div className='item1 flex flex-col'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Skills Used *</label>
                <Input  css={{pr:"$4",mb:"$6"}} placeholder='Enter Skills'/>
                </div>
                <div className='item1 flex flex-col'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Working Links </label>
                <Input  css={{pr:"$4",mb:"$6"}} placeholder='Enter link'/>
                </div>
                <Button bordered color="primary" disabled={disability3?true:false} css={{mx:"auto",mt:"25px",width:"fit-content"}} type='submit'>ADD</Button>
                </form>
            {/* <Popover isBordered disableShadow>
              <Popover.Trigger>
                <button className="btn8 bg-sky-700 ml-20 text-xs">Add Projects</button>
              </Popover.Trigger>
              <Popover.Content>
              <form onSubmit={addNewProject}className="flex flex-col">
                <label className="mb-1 ml-8 mt-3 text">Project Name</label>
                <Input css={{px:"$10",width:"50vw"}}  placeholder='Enter name'/>
                <label className="mb-1 mt-3 ml-8 text">Description</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter Description'/>
                <label className="mb-1 ml-8 mt-3 text">Skills Used</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter Skills'/>
                <label className="mb-1 ml-8 mt-3 text">Working Links</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter link'/>
                <Button css={{m:"22px"}} type='submit'>ADD</Button>
                </form>
              </Popover.Content>
            </Popover> */}
          </div>
          
          {data.project.map((item)=>(
            <Project 
            projectName={item.projectName}
            skillsUsed={item.skillsUsed}
            projectDes={item.projectDes}
            projectLinks={item.projectLinks}
            id={item._id}
            />
          ))}
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mx-3'>
          <div>
            <span className='text-2xl font-semibold text-white my-auto'>Experience</span>
            <p className="text-xs text-white">(Enter all of your previous and current work experiences)</p>
            <form onSubmit={addNewExperience} className="flex flex-col">
                <div className="flexBox w-full">
                <div className='flex item1 flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Company *</label>
                <Input css={{pr:"$2",width:"stretch"}} placeholder='Enter Company' required/>
                </div>
                <div className='flex flex-col item2 mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Location</label>
                <Input css={{pr:"$4",width:"stretch"}} placeholder='Enter Location'/>
                </div>
                </div>
                <div className='item1 flex flex-col'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Title *</label>
                <Input  css={{pr:"$4",mb:"$6"}} placeholder='Enter Title' required/>
                </div>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Description *</label>
                <Textarea  css={{pr:"$4",mb:"$6"}} rows={5} placeholder='Enter Description' required/>
                <div className='item1 flex flex-col'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Skills *</label>
                <Input  css={{pr:"$4",mb:"$6"}} placeholder='Enter Skills' required/>
                </div>
                <div className="flexBox w-full">
                <div className='flex item1 flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Joining Date *</label>
                <Input  type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter starting date' value={start1} onChange={handleChange3} required/>
                </div>
                <div className='flex flex-col item2 mb-5'>
                <label className="mb-1 ml-2 mt-3 textform text-white text-sm">Leaving Date *</label>
                <Input  type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter ending date' value={end1} onChange={handleChange4} required/>
                {message3 && <p className='text-red-400 text-sm'>*Leaving date must be greater than joining date</p>}
                </div>
                </div>
                <Button disabled={message3 && disability2?true:false} bordered color="primary" css={{mx:"auto",mt:"25px",width:"fit-content"}} type='submit'>ADD</Button>
                </form>
            {/* <Popover isBordered disableShadow>
              <Popover.Trigger>
              <button className="btn8 bg-sky-700 ml-12 text-xs">Add Experience</button>
              </Popover.Trigger>
              
              <Popover.Content>
              <form onSubmit={addNewExperience} className="flex flex-col">
                <label className="mb-1 ml-8 mt-3 text">Company</label>
                <Input css={{px:"$10",width:"50vw"}}  placeholder='Enter name'/>
                <label className="mb-1 mt-3 ml-8 text">Location</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter Location'/>
                <label className="mb-1 ml-8 mt-3 text">Title</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter Title'/>
                <label className="mb-1 ml-8 mt-3 text">Description</label>
                <Input css={{px:"$10",width:"50vw"}} placeholder='Enter Description'/>
                <label className="mb-1 ml-8 mt-3 text">Joining Date</label>
                <Input type="date" css={{px:"$10",width:"50vw"}} placeholder='Enter starting date'/>
                <label className="mb-1 ml-8 mt-3 text">Leaving Date</label>
                <Input type="date" css={{px:"$10",width:"50vw"}} placeholder='Enter ending date'/>
                <Button css={{m:"22px"}} type='submit'>ADD</Button>
                </form>
              </Popover.Content>

            </Popover> */}
          </div>
          
          {data.experience.map((item)=>(
            <Experience 
            companyName={item.companyName}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
            title={item.title}
            skills={item.skills}
            description={item.description}
            id={item._id}
            />
          ))}
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className=' mx-3'>
          <div>
            <span className='text-2xl font-semibold text-white my-auto'>Achievement</span>
            <p className="text-sm text-white">(List all of your achievements)</p>
            <form onSubmit={addNewAchievement} className="flex flex-col">
                <Textarea  css={{pr:"$4",mt:"$4"}} rows={5} placeholder="Enter your achievements"/>
                <Button disabled={disability1?true:false} bordered color="primary" css={{mx:"auto",mt:"25px",width:"fit-content"}} type='submit'> ADD</Button>
                </form>
            {/* <Popover isBordered disableShadow>
              <Popover.Trigger>
              <button className="btn8 bg-sky-700 ml-6 text-xs">Add Achievement</button>
              </Popover.Trigger>
              
              <Popover.Content>
              <form onSubmit={addNewAchievement} className="flex flex-col">
                <label className="mb-1 ml-8 mt-3 text">Achievement</label>
                <Input css={{px:"$10",width:"60vw"}}  placeholder='Enter Achievement'/>
                <Button css={{m:"22px"}} type='submit'> ADD</Button>
                </form>
              </Popover.Content>

            </Popover> */}
          </div>
          
          {data.achievement.map((item)=>(
            <Achievement 
            achievementName={item.achievementName}
            id={item._id}
            />
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}