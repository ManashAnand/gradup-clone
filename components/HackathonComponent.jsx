"use client";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import PeopleIcon from '@mui/icons-material/People';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const HackathonComponent = ({ post,display1,setDisplay1,display,setDisplay }) => {
  return (
    <div className="text-left">
    <Paper
      sx={{
        p: 2,
        borderRadius:"25px",
        margin: "auto",
        maxWidth:500,
        marginY:"10px",
        display:display1,
        flexGrow: 1,
        // boxShadow:"10px 10px 5px darkslategray inset",
        backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Link href="/"> <a><ButtonBase sx={{ width: 128, height: 128,border:"1px solid blue",marginLeft:"1vw",marginTop:"1vh" }}>
            <Img alt="complex" src="/assets/images/hackathon.png" />
          </ButtonBase></a>
          </Link>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography sx={{color:"darkslateblue",fontWeight:"bold",marginTop:"15px"}} gutterBottom variant="subtitle1" component="div">
                Hack-AI-Thon: {post.title}
              </Typography>
              <Typography sx={{color:"darkslateblue"}} variant="body2" gutterBottom>
                {post.organizer}
              </Typography>
              <Typography sx={{fontSize:"13px",marginTop:"10px"}} variant="body2" color="purple">
               <PeopleIcon color="secondary"/> Applied by {post.applicant.length}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{paddingX:"12px",paddingY:"3px",border:"1px solid darkslateblue",fontSize:"12px",marginTop:"17px",marginRight:"12px",borderRadius:"30px"}}>
            # Coding Challenge
          </ButtonBase>
          <ButtonBase sx={{paddingX:"12px",paddingY:"3px",border:"1px solid darkslateblue",fontSize:"12px",marginTop:"17px",marginRight:"12px",borderRadius:"30px"}}>
            # Hackathon
          </ButtonBase>
          <ButtonBase sx={{paddingX:"12px",paddingY:"3px",border:"1px solid darkslateblue",fontSize:"12px",marginTop:"17px",marginRight:"12px",borderRadius:"30px"}}>
            # Paper Presentation
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
            <Grid item>
              <Link href="#" sx={{textDecoration:"none",marginTop:"1vh",marginRight:"1.2vw",paddingX:"30px",paddingY:"4px",backgroundColor:"darkslateblue",borderRadius:"10px",float:"right",color:"white"}}
                component="button"
                variant="body2"
                onClick={() => {
                  setDisplay1("none");
                  setDisplay("block")
                }}
              >
                Open
              </Link>
            </Grid> 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
};

// "use client";
// import React from "react";
// import { Card, Grid, Text, Link } from "@nextui-org/react";

// const HackathonComponent = ({post}) => {
//   console.log("hackComponent", post);
//   return (
//     <div>
//       <Card css={{ p: "$6", mw: "800px" }}>
//         <Card.Header>
//           <img
//             alt="Gradup"
//             src="/assets/images/gradup.jpg"
//             width="34px"
//             height="34px"
//           />
//           <Grid.Container css={{ pl: "$6" }}>
//             <Grid xs={12}>
//               <Text h4 css={{ lineHeight: "$xs" }}>
//                 {post.organizer}
//               </Text>
//             </Grid>
//           </Grid.Container>
//         </Card.Header>
//         <Card.Body css={{ py: "$2" }}>
//         <Text>
//             {post.title}
//           </Text>
//           <Text>
//             {post.desc}
//           </Text>
//         </Card.Body>
//         <Card.Footer>
//           <Link
//             icon
//             color="primary"
//             target="_blank"
//             href="https://github.com/nextui-org/nextui"
//           >
//             Participate.
//           </Link>
//         </Card.Footer>
//       </Card>
//     </div>
//   );
// };

export default HackathonComponent;
