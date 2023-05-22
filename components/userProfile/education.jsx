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
    const [updating,setIsUpdating] = useState(0);
    const [education,setEducation] = useState({collegeName:collegeName,degreeName:degreeName,branch:branch,grade:grade,startYear:startYear,endYear:endYear,_id:id});
    
    
    const updateEducation = async(e) =>{
        // e.preventDefault();
        setIsUpdating(2);
        if(!id){

        }else{
            try{
                setIsUpdating(0);
                
            }
            catch(error){
                console.log(error);
            }
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
                onClick={() => console.log("Delete user", user.id)}
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
      <Input initialValue={education.startYear}  onChange={(e)=>setEducation({...education,startYear:e.target.value})}/> <br/>
      <Input initialValue={education.endYear}  onChange={(e)=>setEducation({...education,endYear:e.target.value})}/> <br/>
    </div>
    )
}

export default Education