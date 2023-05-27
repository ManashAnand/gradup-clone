"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
import { Input, Spacer } from "@nextui-org/react";

import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
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
        <div className='w-4/5'></div>
        <Col css={{ d: "flex" }}>
            <Tooltip content="Edit user" className='mx-15'>
                <IconButton onClick={(updateExperience) => console.log("Edit user", user.id)}>
                    <EditIcon size={20} fill="#979797" />
                </IconButton>
            </Tooltip>
            <div className='mx-2'></div>
            <Tooltip
                content="Delete user"
                color="error"
                onClick={(deleteExperience) => console.log("Delete user", user.id)}
            >
            <IconButton className='mx-15'>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
            </Tooltip>
        </Col>
        </div>
      <Input initialValue={companyName}/> <br/>
      <Input initialValue={location}/> <br/>
      <Input initialValue={startDate}/> <br/>
      <Input initialValue={endDate}/> <br/>
      <Input initialValue={title}/> <br/>
      <Input initialValue={skills}/> <br/>
      <Input initialValue={description}/> <br/>
    </div>
    )
}

export default Experience