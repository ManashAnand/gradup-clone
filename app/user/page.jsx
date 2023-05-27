"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
import { Input, Spacer , Button, Popover} from "@nextui-org/react";
import Education from "@components/userProfile/education"
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import Project from '@components/userProfile/project';
import Experience from '@components/userProfile/experience';
import { useState,useEffect } from 'react';
const fetcher = async (...args) =>await fetch(...args).then((res) => res.json());

export default function Profile() {
  const { data: session } = useSession();
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
      const addNewEducation=async (e)=>{
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
        console.log(e.target[0].value);
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=experience&action=create`, {
            method: "POST",
            body: JSON.stringify({
              companyName:e.target[0].value,
              location:e.target[1].value,
              title:e.target[4].value,
              description:e.target[5].value,
              currentlyWorking:e.target[6].value,
              startDate:e.target[7].value,
              endDate:e.target[8].value,
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
        e.preventDefault();
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
  return (
    <div className='w-full'>
        <section className='w-full flex flex-row'>
          <h1 className='head_text text-left'>
            {/* <span className='blue_gradient'>Welcome {data.name} !!</span> */}
          </h1>
          <Link href={'/user/applications'} className='mt-10 ml-20'>
            <button className='outline_btn'>Your applications</button>
          </Link>
          {/* <p className='desc text-left'>{data.email}</p> */}
        </section>
      <h2 className='secondary_text m-5'>Your Resume</h2>
      <section className='border-solid border-2 border-indigo '>
        <div className='m-10'>
        <div className='mx-5'>
          <Input initialValue={data.name}/> <br/>
          <Input initialValue={data.email}/> <br/>
          <Input initialValue={data.contactNo}/> <br/>
          
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mx-5'>
          <div className='flex flex-row'>
            <span className='heading_text'>Education</span>
            <Popover isBordered disableShadow>
              <Popover.Trigger>
                <Button auto flat>Add New</Button>
              </Popover.Trigger>
              
              <Popover.Content>
              <form onSubmit={addNewEducation}>
                <Input  placeholder='Enter college name'/>
                <Input placeholder='Enter Degree Name'/>
                <Input placeholder='Enter branch Name'/>
                <Input placeholder='Enter Your grade'/>
                <Input placeholder='Enter  starting date'/>
                <Input placeholder='Enter ending date'/>
                <Button type='submit'> ADD</Button>
                </form>
              </Popover.Content>

            </Popover>
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
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mx-5'>
          <div className='flex flex-row'>
            <span className='heading_text'>Projects</span>
            <Popover isBordered disableShadow>
              <Popover.Trigger>
                <Button auto flat>Add New</Button>
              </Popover.Trigger>
              <Popover.Content>
              <form onSubmit={addNewProject}>
                <Input placeholder='Enter Project name'/>
                <Input placeholder='Enter Project Des'/>
                <Input placeholder='Enter Skills Used'/>
                <Input placeholder='Working Links of Project'/>
                <Button type='submit'> ADD</Button>
                </form>
              </Popover.Content>
            </Popover>
          </div>
          
          {data.project.map((item)=>(
            <Project 
            projectName={item.projectName}
            skillsUsed={item.skillsUsed}
            projectDes={item.projectDes}
            projectLinks={item.projectLinks}
            />
          ))}
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mx-5'>
          <div className='flex flex-row'>
            <span className='heading_text'>Experience</span>
            <Popover isBordered disableShadow>
              <Popover.Trigger>
                <Button auto flat>Add New</Button>
              </Popover.Trigger>
              
              <Popover.Content>
              <form onSubmit={addNewExperience}>
                <Input placeholder='Enter company name'/>
                <Input placeholder='Enter location'/>
                <Input placeholder='Enter title'/>
                <Input placeholder='Enter Description'/>
                <Input placeholder='Currently working there'/>
                <Input type="date" placeholder='Enter  starting date'/>
                <Input type="date" placeholder='Enter ending date'/>
                <Button type='submit'> ADD</Button>
                </form>
              </Popover.Content>

            </Popover>
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
            />
          ))}
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className=' mx-5'>
          <div className='flex flex-row'>
            <span className='heading_text'>Achievements</span>
            <Popover isBordered disableShadow>
              <Popover.Trigger>
                <Button auto flat>Add New</Button>
              </Popover.Trigger>
              
              <Popover.Content>
              <form onSubmit={addNewAchievement}>
                <Input placeholder='Enter Achievement'/>
                <Button type='submit'> ADD</Button>
                </form>
              </Popover.Content>

            </Popover>
          </div>
          
          {data.achievement.map((item)=>(
            <achievement 
            achievementName={item.achievementName}
            />
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}