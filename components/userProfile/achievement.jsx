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


const Achievement = ({achievementName}) => {
  const { data: session } = useSession();
  const [updating,setIsUpdating] = useState(0);
  const [achievement,setAchievement] = useState({achievementName:achievementName});
  
  
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
            <Tooltip content="Edit user" className='mx-15'>
                <IconButton onClick={(updateAchievement) => console.log("Edit user", user.id)}>
                    <EditIcon size={20} fill="#979797" />
                </IconButton>
            </Tooltip>
            <div className='mx-2'></div>
            <Tooltip
                content="Delete user"
                color="error"
                onClick={(deleteAchievement) => console.log("Delete user", user.id)}
            >
            <IconButton className='mx-15'>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
            </Tooltip>
        </Col>
        </div>
      <Input initialValue={achievementName}/> <br/>
    </div>
    )
}

export default Achievement