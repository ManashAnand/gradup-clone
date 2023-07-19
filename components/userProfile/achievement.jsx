"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';

import {  Button, Popover, Loading, Textarea} from "@nextui-org/react";
import { Input,Spacer } from "@nextui-org/react";
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
    window.location.reload();
    window.scrollTo(0,0)
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
      <div className='flex flex-col'>
      <div className="px-3 py-3 rounded-2xl text-white bg-sky-700 resumedatabox text-center mt-6 mx-auto">
      <label className="text-sm ml-2">Achievement</label>
      <Textarea css={{height:"fit-content",width:"stretch",mt:"$4"}} initialValue={achievement.achievementName} onChange={(e)=>setAchievement({...achievement,achievementName:e.target.value})}/>
      </div> 
      <div className='flex justify-center gap-4'>
            {
                (updating==0)?(<>
                <div>
                 <button className='text-white bg-blue-400 hover:bg-blue-500 px-6 py-1 rounded-md mt-4' onClick={() => setIsUpdating(1)}>Edit</button>
                </div>
                </>):((updating==1)?(<button className='text-white bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded-md mt-4' onClick={updateAchievement}>Update</button>)
                :(<></>))
            }
            <button onClick={deleteAchievement} className='text-white bg-red-400 hover:bg-red-500 px-3 py-1 rounded-md mt-4'>Delete</button>
        </div>
        </div>
      <div className='mb-15 pb-10'></div>
    </div>
    )
}

export default Achievement