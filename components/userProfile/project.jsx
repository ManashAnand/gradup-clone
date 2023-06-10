"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
import { Input, Spacer, Button, Loading, Textarea } from "@nextui-org/react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import {useEffect,useState} from "react";


const Project = ({projectName,skillsUsed, projectDes, projectLinks,id}) => {
    const { data: session } = useSession();
    const [updating,setIsUpdating] = useState(0);
    const [project,setProject] = useState({projectName:projectName,skillsUsed:skillsUsed,projectDes:projectDes,projectLinks:projectLinks});
    
    
    const updateProject = async(e) =>{
        // e.preventDefault();
        console.log("Ajjajajajajajjjajajajaj");
        setIsUpdating(2);
        try {
            const response = await fetch(`/api/user/${session?.user.id}/?type=project&action=update`, {
              method: "POST",
              body: JSON.stringify({
                id:id,
                projectName:project.projectName,
                skillsUsed:project.skillsUsed,
                projectDes:project.projectDes,
                projectLinks:project.projectLinks,
              }),
            });
            console.log(response.status)
            setIsUpdating(0);
        }catch (error) {
            console.log(error);
        }finally {
            
        }
    }
    const deleteProject=async ()=>{
        // e.preventDefault();
        // console.log(e.target[0].value);
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=project&action=delete`, {
            method: "POST",
            body: JSON.stringify({
              id:id,
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
      <div className='flex'>
      <div className="px-10 py-3 rounded-2xl text-white bg-sky-700 text-center w-full mt-3">
        <label className="text-sm ml-2">Project Name</label>
        <Input css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={project.projectName} onChange={(e)=>setProject({...project,projectName:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <label className="text-sm ml-2">Skills Used</label>
        <Input css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={project.skillsUsed} onChange={(e)=>setProject({...project,skillsUsed:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <label className="text-sm ml-2">Description</label>
        <Textarea css={{mt:"$4",width:"stretch",mb:"$4"}} initialValue={project.projectDes} onChange={(e)=>setProject({...project,projectDes:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <label className="text-sm ml-2">Working Link</label>
        <Input css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={project.projectLinks} onChange={(e)=>setProject({...project,projectLinks:e.target.value})}/> <br/>
        </div>
        <div className='w-4/5'></div>
        <Col css={{ d: "flex" }}>
            {
                (updating==0)?(<>
                <Tooltip content="Edit" className='mx-15 my-auto'>
                 <IconButton onClick={() => setIsUpdating(1)}>
                     <EditIcon size={20} fill="#979797" />
                    </IconButton>
                </Tooltip>
                </>):((updating==1)?(<><button className="text-blue-800" onClick={updateProject}>Save</button></>)
                :(<>
                    <div className='mx-2'>
                 <Button disabled auto bordered color="secondary" css={{ px: "$13",mt:"$15" }}>
                     <Loading type="spinner" color="currentColor" size="sm" />
                 </Button>
                 </div>
                </>))
            }
            <Tooltip
                content="Delete"
                color="error"
                onClick={deleteProject }
                className='mx-15 my-auto'
            >
            <IconButton css={{ml:"$10"}} className='mx-15'>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
            </Tooltip>
        </Col>
        </div>
    </div>
    )
}

export default Project