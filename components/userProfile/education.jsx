"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
import { Input, Spacer, Button, Loading } from "@nextui-org/react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import {IconButton as RSuiteIconButton} from 'rsuite';
import {Button as RButton} from 'rsuite';
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import {useEffect,useState} from "react";
import SaveIcon from '@rsuite/icons/legacy/Save';
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
      <div className="px-10 py-3 rounded-2xl text-white bg-sky-700 w-full mt-3">
        <Input css={{mt:"$4",width:"stretch"}} initialValue={education.collegeName} onChange={(e)=>setEducation({...education,collegeName:e.target.value})}/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={education.degreeName} onChange={(e)=>setEducation({...education,degreeName:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={education.branch} onChange={(e)=>setEducation({...education,branch:e.target.value})}/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={education.grade} onChange={(e)=>setEducation({...education,grade:e.target.value})}/> <br/>
        <div className='px-10'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={education.startYear}  onChange={(e)=>setEducation({...education,startYear:e.target.value})}/> 
        <div className='px-16'></div>
        <Input css={{mt:"$4",width:"stretch"}} initialValue={education.endYear}  onChange={(e)=>setEducation({...education,endYear:e.target.value})}/> <br/>
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
                </>):((updating==1)?(<> <RSuiteIconButton onClick={updateEducation} icon={<SaveIcon />}/></>)
                :(<>
                 <RButton appearance="primary" loading size="xs">Primary</RButton>
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
      <div className='mb-15 pb-10'></div>
    </div>
    )
}

export default Education