"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonBase from "@mui/material/ButtonBase";
import Typography from '@mui/material/Typography';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ApartmentSharpIcon from '@mui/icons-material/ApartmentSharp';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import {useState} from "react"
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
  </Box>
);


export default function CompleteHackathon({post,display,setDisplay,display1,setDisplay1}) {
    function handleClick(){
      setDisplay("none")
      setDisplay1("block")
    }
    console.log("From complete hackathon", post);
    if(post==null)return (<></>)
  return (
    <Box sx={{minWidth:"35vw",marginTop:"10px",display:display,marginX:"auto",marginRight:"6vw"}}>
      <Card>
      <React.Fragment>
      <CardMedia
        sx={{ height: 300,backgroundPosition:"center",objectFit:"cover"}}
        image="/assets/images/hackathonback.png"
        title="Hackathon"
      />
    <CardContent>
      <Typography sx={{color:"darkslateblue"}} variant="h6" component="div">
        <ViewModuleIcon color="primary" fontSize='small'/> {post.title}
      </Typography>
      <Typography sx={{ fontSize: 13,marginLeft:"2.6vw",color:"purple" }} gutterBottom>
        <ApartmentSharpIcon fontSize='small' color="action"/> {post.organizer}
      </Typography>
      <Typography sx={{fontSize: 13, mb: 1.5,marginLeft:"2.7vw",color:"purple" }}>
        <AccessTimeIcon fontSize='small' color="action"/> Register by {post.registerEndDate}
      </Typography>
      <Typography sx={{color:"darkslateblue"}} variant="h6">
       <DescriptionTwoToneIcon fontSize='small' color="primary"/> Description
      </Typography>
      <Typography sx={{ fontSize: 13,mb: 1.5,marginLeft:"2.7vw",color:"purple" }}>
        <TaskAltTwoToneIcon fontSize='small' color="action"/> {post.description}
      </Typography>
      <Typography sx={{color:"darkslateblue"}} variant="h6">
        <CurrencyRupeeIcon fontSize='small' color="primary"/> Rewards
      </Typography>
      <Typography sx={{fontSize: 13, mb: 1.5,marginLeft:"2.7vw",color:"purple" }}>
        <EmojiEventsRoundedIcon fontSize='small' color="action"/> {post.rewards}
      </Typography>
      <Typography>
         <ButtonBase sx={{paddingX:"12px",paddingY:"3px",border:"1px solid darkslateblue",fontSize:"12px",marginTop:"17px",marginRight:"12px",borderRadius:"30px"}}>
            # Coding Challenge
          </ButtonBase>
          <ButtonBase sx={{paddingX:"12px",paddingY:"3px",border:"1px solid darkslateblue",fontSize:"12px",marginTop:"17px",marginRight:"12px",borderRadius:"30px"}}>
            # Hackathon
          </ButtonBase>
          <ButtonBase sx={{paddingX:"12px",paddingY:"3px",border:"1px solid darkslateblue",fontSize:"12px",marginTop:"17px",marginRight:"12px",borderRadius:"30px"}}>
            # Paper Presentation
          </ButtonBase>
          <ButtonBase sx={{paddingX:"12px",paddingY:"3px",border:"1px solid darkslateblue",fontSize:"12px",marginTop:"17px",marginRight:"12px",borderRadius:"30px"}}>
            # Skills
          </ButtonBase>
      </Typography>
    </CardContent>
    <CardActions sx={{float:"right"}}>
      <Button sx={{marginBottom:"2vh"}}  variant="contained" onClick={handleClick} size="small">Back</Button>
      <Button sx={{marginRight:"2vw",marginBottom:"2vh"}} variant="contained" color="secondary" size="small">Apply</Button>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}