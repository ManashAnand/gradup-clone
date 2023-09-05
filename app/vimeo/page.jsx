'use client'
import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundImage: 'url("/assets/icons/csccom.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  '& .MuiCardContent-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    // Optional: Add a blur effect
  },
  '& .MuiTypography-root': {
    marginBottom: theme.spacing(2),
  },
  '& .MuiButton-root': {
    marginTop: theme.spacing(2),
  },
}))

const CustomCardComponent = () => {
  return (
    <CustomCard>
      <CardContent>
        <Typography variant='h5' component='h2'>
          Web Development
        </Typography>
        <Button variant='contained' color='primary'>
          Learn More
        </Button>
      </CardContent>
    </CustomCard>
  )
}

export default CustomCardComponent

/*const page = () => {
  //const data = use(dataPromise)
  //console.log(data.player_embed_url)
  
  return (
    <div>
      <iframe
        src='https://player.vimeo.com/video/857468865?h=3b4029df62'
        width='1000'
        height='500'
        frameborder='2'
        allow='autoplay; fullscreen; picture-in-picture'
      ></iframe>
    </div>
  )
}
export default page

*const accessToken = 'dcd941a5e9393289f27b183f77add668'
  const apiUrl = `https://api.vimeo.com/videos/857468865` // Replace {video_id} with the actual video ID

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      // Handle the response data
      console.log(res)
      setData({ uri: res.link, player: res.player_embed_url })
    })
    .catch((error) => {
      console.error('Error:', error)
    }) */
