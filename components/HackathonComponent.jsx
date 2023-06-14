"use client";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const HackathonComponent = ({ post }) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/assets/images/gradup.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {post.organizer}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Applied by {post.applicant.length}
              </Typography>
            </Grid>
            <Grid item>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Open
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
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
