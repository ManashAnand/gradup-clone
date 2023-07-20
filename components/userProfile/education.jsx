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
            setIsUpdating(0);
        }catch (error) {
        }finally {
            
        }
    }
    const deleteEducation=async (event)=>{
      window.location.reload();
      window.scrollTo(0,0)
        // console.log(e.target[0].value);
        try {
          
          const response = await fetch(`/api/user/${session?.user.id}/?type=education&action=delete`, {
            method: "POST",
            body: JSON.stringify({
              id:id,
            }),
          });
        } catch (error) {
        } finally {
          
        }
      }

    return (
    <div className='w-full'>
      <div className='flex flex-col'>
      <div className="px-3 py-3 flex flex-col rounded-2xl text-white resumedatabox bg-sky-700 text-center mt-6 mx-auto">
        
        <Input labelLeft="College"  css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={education.collegeName} onChange={(e)=>setEducation({...education,collegeName:e.target.value})}/>
        <Input labelLeft="Degree" css={{mt:"$4",width:"stretch",mb:"$4",height:"35px",textAlign:"center"}} initialValue={education.degreeName} onChange={(e)=>setEducation({...education,degreeName:e.target.value})}/>
        <Input labelLeft="Branch" css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={education.branch} onChange={(e)=>setEducation({...education,branch:e.target.value})}/>
        <Input labelLeft="Grade" css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={education.grade} onChange={(e)=>setEducation({...education,grade:e.target.value})}/>
        <Input labelLeft="Date of Joining" css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={education.startYear.split("T")[0]}  onChange={(e)=>setEducation({...education,startYear:e.target.value})}/> 
        <Input labelLeft="Date of Leaving" css={{mt:"$4",width:"stretch",mb:"$4",height:"35px"}} initialValue={education.endYear.split("T")[0]}  onChange={(e)=>setEducation({...education,endYear:e.target.value})}/>
      </div>
        <div className='flex justify-center gap-4'>
            {
                (updating==0)?(<>
                <div>
                 <button className='text-white bg-blue-400 hover:bg-blue-500 px-6 py-1 rounded-md mt-4' onClick={() => setIsUpdating(1)}>Edit</button>
                </div>
                </>):((updating==1)?(<button className='text-white bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded-md mt-4' onClick={updateEducation}>Update</button>)
                :(<></>))
            }
            <button onClick={deleteEducation} className='text-white bg-red-400 hover:bg-red-500 px-3 py-1 rounded-md mt-4'>Delete</button>
        </div>
        </div>
      <div className='mb-15 pb-10'></div>
    </div>
    )
}

export default Education