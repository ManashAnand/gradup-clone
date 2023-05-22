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


const Project = ({projectName,skillsUsed, projectDes, projectLinks}) => {

    


    return (
        <div className='w-full'>
      <div className='flex'>
        <div className='w-4/5'></div>
        <Col css={{ d: "flex" }}>
            <Tooltip content="Edit user" className='mx-15'>
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                    <EditIcon size={20} fill="#979797" />
                </IconButton>
            </Tooltip>
            <div className='mx-2'></div>
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
      <Input initialValue={projectName}/> <br/>
      <Input initialValue={skillsUsed}/> <br/>
      <Input initialValue={projectDes}/> <br/>
      <Input initialValue={projectLinks}/> <br/>
    </div>
    )
}

export default Project