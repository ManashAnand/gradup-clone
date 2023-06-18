"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
import { Input, Textarea, Spacer , Button, Popover} from "@nextui-org/react";
import Education from "@components/userProfile/education"
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
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
    console.log("Adding new edu")
    data.education.push(newEdu)
  }
  if (error) return <div>userFailed to loadinggggggg</div>;
  if (!data) return <div>Loading...</div>;
  console.log("ajay", data);
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

      function handleSubmit(){
         data.experience.length>0 && data.education.length>0 && data.project.length>0?setSubmitted(true):setSubmitted(false)
         data.experience.length===0 || data.education.length===0 || data.project.length===0?setMessage(true):setMessage(false)
         console.log(message)
      }
      setTimeout(()=>{
        message===true?setMessage(false):""
      },5000)
      const addNewEducation=async (e)=>{
        // console.log("ye id aii ", session?.user.id);
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=education&action=create`, {
            method: "POST",
            body: JSON.stringify({
              collegeName:e.target[0].value,
              degreeName:e.target[1].value,
              branch:e.target[2].value,
              grade:e.target[3].value,
              startYear:e.target[4].value,
              endYear:e.target[5].value,
            }),
          });
          console.log(response.status)
        } catch (error) {
          console.log(error);
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
        console.log(e.target[0].value);
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
          console.log(response.status)
        } catch (error) {
          console.log(error);
        } finally {
          
        }
      }
      //
      const addNewExperience=async (e)=>{
        
        console.log(e.target[0].value);
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=experience&action=create`, {
            method: "POST",
            body: JSON.stringify({
              companyName:e.target[0].value,
              location:e.target[1].value,
              title:e.target[2].value,
              description:e.target[3].value,
              currentlyWorking:e.target[4].value,
              startDate:e.target[5].value,
              endDate:e.target[6].value,
            }),
          });
          console.log(response.status)
        } catch (error) {
          console.log(error);
        } finally {
          
        }
      }

      //
      const addNewAchievement=async (e)=>{
        console.log(e.target[0].value);
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=achievement&action=create`, {
            method: "POST",
            body: JSON.stringify({
              achievementName:e.target[0].value,
            }),
          });
          console.log(response.status)
        } catch (error) {
          console.log(error);
        } finally {
          
        }
      }
      const ButtonStyle = { margin: "0px 0.5rem" };
  return (
    !submitted?<div className='w-full mb-16'>
        <section className='w-full flex justify-between'>
          <h1 className='head_text text-left'>
            {/* <span className='blue_gradient'>Welcome {data.name} !!</span> */}
          </h1>
          <h2 className='text-4xl text-sky-500 m-7 text'>Your Resume</h2>
          <Link href={'/user/applications'} className='mt-9'>
            <button style={{backgroundColor:"deepskyblue"}} className='btn8'>Your Applications</button>
          </Link>
          {/* <p className='desc text-left'>{data.email}</p> */}
        </section>
        <section className='border-solid border-2 rounded-xl bg-sky-300'>
        <div className='m-6'>
        <div className='mx-5 flex flex-col'>
          <label className="mb-2 ml-2 text text-sm">Name*</label>
          <Input initialValue={data.name}/> <br/>
          <label className="mb-2 ml-2 text text-sm">Email*</label>
          <Input initialValue={data.email}/> <br/>
          <label className="mb-2 ml-2 text text-sm">Phone No</label>
          <Input initialValue={data.contactNo} pattern='[0-9]{10}'/> <br/>
          </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mx-5'>
          <div>
            <span className='heading_text my-auto'>Education</span>
            <p className="text-xs text-sky-700">(Add from top to bottom hierarcy)</p>
            <form onSubmit={addNewEducation} className="flex flex-col">
                <div className="flex">
                <div className='flex flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 text text-sm">College *</label>
                <Input css={{pr:"$2",width:"34vw"}} placeholder='Enter College' required/>
                </div>
                <div className='flex flex-col ml-4 mb-5'>
                <label className="mb-1 ml-2 mt-3 text text-sm">Degree *</label>
                <Input css={{pr:"$4",width:"34vw"}} placeholder='Enter degree' required/>
                </div>
                </div>
                <div className="flex">
                <div className='flex flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 text text-sm">Branch *</label>
                <Input css={{pr:"$2",width:"34vw"}} placeholder='Enter Branch' required/>
                </div>
                <div className='flex flex-col ml-4 mb-5'>
                <label className="mb-1 ml-2 mt-3 text text-sm">Grade</label>
                <Input css={{pr:"$4",width:"34vw"}} placeholder='Enter grade'/>
                </div>
                </div>
                <label className="mb-1 ml-2 mt-3 text text-sm">Joining Date *</label>
                <Input type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter starting date' required/>
                <label className="mb-1 ml-2 mt-3 text text-sm">Leaving Date *</label>
                <Input type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter ending date' required/>
                <Button css={{mr:"10px",mt:"25px"}} type='submit'>ADD</Button>
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
        <div className='mx-5'>
          <div>
            <span className='heading_text my-auto'>Projects</span>
            <p className="text-xs text-sky-700">(Enter all the project details)</p>
            <form onSubmit={addNewProject}className="flex flex-col">
                <label className="mb-1 ml-2 mt-3 text text-sm">Project Name *</label>
                <Input css={{pr:"$4",mb:"$6"}}  placeholder='Enter name'/>
                <label className="mb-1 mt-3 ml-2 text text-sm">Description *</label>
                <Textarea css={{pr:"$4",mb:"$6"}} rows={5} placeholder='Enter Description'/>
                <label className="mb-1 ml-2 mt-3 text text-sm">Skills Used *</label>
                <Input css={{pr:"$4",mb:"$6"}} placeholder='Enter Skills'/>
                <label className="mb-1 ml-2 mt-3 text text-sm">Working Links </label>
                <Input css={{pr:"$4",mb:"$6"}} placeholder='Enter link'/>
                <Button css={{mr:"10px",mt:"25px"}} type='submit'>ADD</Button>
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
            <span className='heading_text my-auto'>Experience</span>
            <p className="text-xs text-sky-700">(Enter all of your previous and current work experiences)</p>
            <form onSubmit={addNewExperience} className="flex flex-col">
                <div className="flex">
                <div className='flex flex-col mb-5'>
                <label className="mb-1 ml-2 mt-3 text text-sm">Company *</label>
                <Input css={{pr:"$2",width:"35vw"}} placeholder='Enter Company' required/>
                </div>
                <div className='flex flex-col ml-4 mb-5'>
                <label className="mb-1 ml-2 mt-3 text text-sm">Location</label>
                <Input css={{pr:"$4",width:"34vw"}} placeholder='Enter Location'/>
                </div>
                </div>
                <label className="mb-1 ml-2 mt-3 text text-sm">Title *</label>
                <Input css={{pr:"$4",mb:"$6"}} placeholder='Enter Title' required/>
                <label className="mb-1 ml-2 mt-3 text text-sm">Description *</label>
                <Textarea css={{pr:"$4",mb:"$6"}} rows={5} placeholder='Enter Description' required/>
                <label className="mb-1 ml-2 mt-3 text text-sm">Skills *</label>
                <Input css={{pr:"$4",mb:"$6"}} placeholder='Enter Skills' required/>
                <label className="mb-1 ml-2 mt-3 text text-sm">Joining Date *</label>
                <Input type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter starting date' required/>
                <label className="mb-1 ml-2 mt-3 text text-sm">Leaving Date *</label>
                <Input type="date" css={{pr:"$4",mb:"$6"}} placeholder='Enter ending date' required/>
                <Button css={{mr:"10px",mt:"25px"}} type='submit'>ADD</Button>
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
        <div className=' mx-5'>
          <div>
            <span className='heading_text my-auto'>Achievement</span>
            <p className="text-xs text-sky-700">(List all of your achievements)</p>
            <form onSubmit={addNewAchievement} className="flex flex-col">
                <Textarea css={{pr:"$4",mt:"$4"}} rows={5} placeholder="Enter your achievements"/>
                <Button css={{mr:"10px",mt:"25px"}} type='submit'> ADD</Button>
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
      {message && <div className="px-10 py-3 text-center text-lg text rounded-xl my-3 bg-blue-500 text-white">Please add atleast 1 Education, 1 Experience and 1 Project</div>}
      <button onClick={handleSubmit} className='btn9 bg-sky-400 mr-6'>Submit</button>
    </div>:<div className='mb-20'>
    <img className="mt-16 mb-6" width="400" src="/assets/images/submitted.gif" alt="submitted"></img>
    <div className="text-center my-50 text-4xl text-sky-600 text mb-16">Application Sent Successfully</div>
    </div>
  );
}