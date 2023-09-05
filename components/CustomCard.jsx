import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'

const CustomCard = ({ image, title, url }) => {
  const router = useRouter()
  const handleClick = (url) => {
    router.push(url)
  }
  return (
    <Card sx={{ maxWidth: 500, marginX: 'auto', borderRadius: '16px' }}>
      <CardMedia
        className='p-2 w-[100%] h-[200px]'
        image={image}
        title={title}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          '&:last-child': { pb: 0 },
        }}
      >
        <Typography
          className='text-xl font-medium'
          sx={{ textAlign: 'center', marginY: 'auto' }}
          gutterBottom
          variant='subtitle1'
          component='div'
        >
          {title}
        </Typography>
        <Typography
          sx={{ textAlign: 'center', marginY: 'auto' }}
          gutterBottom
          variant='subtitle1'
          component='div'
        >
          <Button
            variant='outlined'
            className='hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
            onClick={() => handleClick(url)}
            size='small'
            color='primary'
          >
            Start Course
          </Button>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CustomCard

/*
import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/navigation'

const StyledCard = styled(Card)(({ theme, backgroundImage }) => ({
  backgroundImage: `url("${backgroundImage}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  height: '200px',
  borderRadius: theme.spacing(2),
}))

const ContentWrapper = styled(CardContent)(({ theme }) => ({
  flexGrow: 1, // Grow to fill available space
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between', // Arrange content vertically

  alignItems: 'flex-center',
  padding: theme.spacing(2),
  zIndex: 1,
}))

const CustomCard = ({ backgroundImage, title, url }) => {
  const router = useRouter()
  const handleClick = (url) => {
    console.log(url)
    router.push(url)
  }
  return (
    <StyledCard backgroundImage={backgroundImage}>
      <ContentWrapper>
        <div className='items-center'>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => handleClick(url)}
          >
            Learn More
          </Button>
        </div>
      </ContentWrapper>
    </StyledCard>
  )
}

export default CustomCard
*/
