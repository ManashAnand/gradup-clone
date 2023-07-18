"use client"
import useSWR from 'swr';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { Input, Spacer, Button, Loading, Textarea } from "@nextui-org/react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import { useEffect, useState } from "react";


const Project = ({ projectName, skillsUsed, projectDes, projectLinks, id }) => {
  const { data: session } = useSession();
  const [updating, setIsUpdating] = useState(0);
  const [project, setProject] = useState({ projectName: projectName, skillsUsed: skillsUsed, projectDes: projectDes, projectLinks: projectLinks });


  const updateProject = async (e) => {
    // e.preventDefault();
    console.log("Ajjajajajajajjjajajajaj");
    setIsUpdating(2);
    try {
      const response = await fetch(`/api/user/${session?.user.id}/?type=project&action=update`, {
        method: "POST",
        body: JSON.stringify({
          id: id,
          projectName: project.projectName,
          skillsUsed: project.skillsUsed,
          projectDes: project.projectDes,
          projectLinks: project.projectLinks,
        }),
      });
      console.log(response.status)
      setIsUpdating(0);
    } catch (error) {
      console.log(error);
    } finally {

    }
  }
  const deleteProject = async () => {
    // e.preventDefault();
    // console.log(e.target[0].value);
    try {
      const response = await fetch(`/api/user/${session?.user.id}/?type=project&action=delete`, {
        method: "POST",
        body: JSON.stringify({
          id: id,
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
      <div className='flex flex-col'>
        <div className="px-3 py-3 rounded-2xl text-white bg-sky-700 resumedatabox text-center w-full mt-6 mx-auto">
          <Input labelLeft="Project Name"  css={{ mt: "$4", width: "stretch", mb: "$4", height: "35px" }} initialValue={project.projectName} onChange={(e) => setProject({ ...project, projectName: e.target.value })} />
          <Input labelLeft="Skills Used"  css={{ mt: "$4", width: "stretch", mb: "$4", height: "35px" }} initialValue={project.skillsUsed} onChange={(e) => setProject({ ...project, skillsUsed: e.target.value })} />
          <Textarea css={{ mt: "$4", width: "stretch",height:"fit-content", mb: "$4" }} initialValue={project.projectDes} onChange={(e) => setProject({ ...project, projectDes: e.target.value })} />
          <Input labelLeft="Working Link" css={{ mt: "$4", width: "stretch", mb: "$4", height: "35px" }} initialValue={project.projectLinks} onChange={(e) => setProject({ ...project, projectLinks: e.target.value })} />
        </div>
        <div className='flex justify-center gap-4'>
            {
                (updating==0)?(<>
                <div>
                 <button className='text-white bg-blue-500 px-6 py-1 rounded-md mt-4' onClick={() => setIsUpdating(1)}>Edit</button>
                </div>
                </>):((updating==1)?(<button className='text-white bg-blue-500 px-3 py-1 rounded-md mt-4' onClick={updateProject}>Update</button>)
                :(<></>))
            }
            <button onClick={deleteProject} className='text-white bg-blue-500 px-3 py-1 rounded-md mt-4'>Delete</button>
        </div>
        </div>
      <div className='mb-15 pb-10'></div>
    </div>
  )
}

export default Project