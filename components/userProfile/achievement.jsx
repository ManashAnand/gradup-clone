"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';

import {  Button, Popover, Loading} from "@nextui-org/react";
import { Input, Spacer } from "@nextui-org/react";
import { useState,useEffect } from 'react';
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";


const Achievement = ({achievementName,id}) => {
  const { data: session } = useSession();
  const [updating,setIsUpdating] = useState(0);
  const [achievement,setAchievement] = useState({achievementName:achievementName, id:id});
  
  
  const updateAchievement = async(e) =>{
      // e.preventDefault();
      setIsUpdating(2);
      try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=achievement&action=update`, {
            method: "POST",
            body: JSON.stringify({
              id:id,
              achievementName:achievement.achievementName,
            }),
          });
          console.log(response.status)
          setIsUpdating(0);
      }catch (error) {
          console.log(error);
      }finally {
          
      }
  }
  const deleteAchievement=async ()=>{
      // e.preventDefault();
      // console.log(e.target[0].value);
      try {
        const response = await fetch(`/api/user/${session?.user.id}/?type=achievement&action=delete`, {
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
            {
                (updating==0)?(<>
                <Tooltip content="Edit user" className='mx-15'>
                 <IconButton onClick={() => setIsUpdating(1)}>
                     <EditIcon size={20} fill="#979797" />
                    </IconButton>
                </Tooltip>
                </>):((updating==1)?(<><Button onClick={updateAchievement}>Save</Button></>)
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
                onClick={deleteAchievement }
            >
            <IconButton className='mx-15'>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
            </Tooltip>
        </Col>
        </div>
        <Input label="Achievement Name" underlined initialValue={achievement.achievementName} onChange={(e)=>setAchievement({...achievement,achievementName:e.target.value})}/> <br/>
    </div>
    )
}

export default Achievement