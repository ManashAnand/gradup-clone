"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function CompleteHackathon({post}) {
    console.log("From complete hackathon", post);
    if(post==null)return (<></>)
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        {post.title}
      </Typography>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        {post.organizer}
      </Typography>
      
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Register by {post.registerEndDate}
      </Typography>
      <Typography variant="body2">
        Description <br />
        {post.description}
      </Typography>
      <Typography variant="body2">
        Rewards <br />
        {post.rewards}
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="small">Apply</Button>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}