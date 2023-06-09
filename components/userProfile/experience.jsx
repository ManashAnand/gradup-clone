"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
import { Input, Spacer } from "@nextui-org/react";
import { useState,useEffect } from 'react';
import { Table, Row, Col, Tooltip, User, Text, Button, Loading } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";


const Experience = ({companyName, location, startDate, endDate,title, skills,description,id}) => {

  const { data: session } = useSession();
  const [updating,setIsUpdating] = useState(0);
  const [experience,setExperience] = useState({companyName:companyName, location:location, startDate:startDate, endDate:endDate,title:title, skills:skills,description:description,_id:id});
  
  
  const updateExperience = async(e) =>{
      // e.preventDefault();
      setIsUpdating(2);
      try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=experience&action=update`, {
            method: "POST",
            body: JSON.stringify({
              id:id,
              companyName:experience.companyName, 
              location:experience.location, 
              startDate:experience.startDate,
              endDate:experience.endDate,
              title:experience.title, 
              skills:experience.skills,
              description:experience.description,
            }),
          });
          console.log(response.status)
          setIsUpdating(0);
      }catch (error) {
          console.log(error);
      }finally {
          
      }
  }
  const deleteExperience=async ()=>{
      // e.preventDefault();
      // console.log(e.target[0].value);
      try {
        const response = await fetch(`/api/user/${session?.user.id}/?type=experience&action=delete`, {
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
        <div className="px-10 py-3 rounded-2xl text-white bg-sky-700 w-full mt-3">
        <Input css={{mt:"$4",width:"stretch"}} initialValue={experience.companyName} onChange={(e)=>setExperience({...experience,companyName:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={experience.location} onChange={(e)=>setExperience({...experience,location:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={experience.startDate} onChange={(e)=>setExperience({...experience,startDate:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={experience.endDate} onChange={(e)=>setExperience({...experience,endDate:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={experience.title} onChange={(e)=>setExperience({...experience,title:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={experience.skills} onChange={(e)=>setExperience({...experience,skills:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={experience.description} onChange={(e)=>setExperience({...experience,description:e.target.value})}/> <br/>
        </div>
        <div className='w-4/5'></div>
        <Col css={{ d: "flex" }}>
            {
                (updating==0)?(<>
                <Tooltip content="Edit user" className='mx-15'>
                 <IconButton onClick={() => setIsUpdating(1)}>
                     <EditIcon size={20} fill="#979797" />
                    </IconButton>
                </Tooltip>
                </>):((updating==1)?(<><Button onClick={updateExperience}>Save</Button></>)
                :(<>
                    <div className='mx-2'>
                 <Button disabled auto bordered color="secondary" css={{ px: "$13" }}>
                     <Loading type="spinner" color="currentColor" size="sm" />
                 </Button>
                 </div>
                </>))
            }
            <Tooltip
                content="Delete user"
                color="error"
                onClick={deleteExperience }
            >
            <IconButton className='mx-15'>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
            </Tooltip>
        </Col>
        </div>
    </div>
    )
}

export default Experience