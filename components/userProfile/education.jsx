"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
import { Input, Spacer, Button, Loading } from "@nextui-org/react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import {useEffect,useState} from "react";

const Education = ({collegeName,degreeName,branch,grade,startYear,endYear,id}) => {
    const { data: session } = useSession();
    const [updating,setIsUpdating] = useState(0);
    const [education,setEducation] = useState({collegeName:collegeName,degreeName:degreeName,branch:branch,grade:grade,startYear:startYear,endYear:endYear,_id:id});
    
    
    const updateEducation = async(e) =>{
        // e.preventDefault();
        setIsUpdating(2);
        try {
            const response = await fetch(`/api/user/${session?.user.id}/?type=education&action=update`, {
              method: "POST",
              body: JSON.stringify({
                id:id,
                collegeName:education.collegeName,
                degreeName:education.degreeName,
                branch:education.branch,
                grade:education.grade,
                startYear:startYear,
                endYear:endYear,
              }),
            });
            console.log(response.status)
            setIsUpdating(0);
        }catch (error) {
            console.log(error);
        }finally {
            
        }
    }
    const deleteEducation=async ()=>{
        // e.preventDefault();
        // console.log(e.target[0].value);
        try {
          const response = await fetch(`/api/user/${session?.user.id}/?type=education&action=delete`, {
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
                </>):((updating==1)?(<><Button onPress={updateEducation}>Save</Button></>)
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
                onClick={deleteEducation }
            >
            <IconButton className='mx-15'>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
            </Tooltip>
        </Col>
        </div>
      <Input initialValue={education.collegeName} onChange={(e)=>setEducation({...education,collegeName:e.target.value})}/> <br/>
      <Input initialValue={education.degreeName} onChange={(e)=>setEducation({...education,degreeName:e.target.value})}/> <br/>
      <Input initialValue={education.branch} onChange={(e)=>setEducation({...education,branch:e.target.value})}/> <br/>
      <Input initialValue={education.grade} onChange={(e)=>setEducation({...education,grade:e.target.value})}/> <br/>
      <Input type='date' initialValue={education.startYear}  onChange={(e)=>setEducation({...education,startYear:e.target.value})}/> <br/>
      <Input type='date' initialValue={education.endYear}  onChange={(e)=>setEducation({...education,endYear:e.target.value})}/> <br/>
    </div>
    )
}

export default Education