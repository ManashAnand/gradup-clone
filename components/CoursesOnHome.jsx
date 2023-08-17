'use client'
// import { Card, Grid, Row, Text } from "@nextui-org/react";
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
export default function CoursesOnHome() {
  const list = [
    {
      title: 'Web Development',
      img: '/assets/images/web.gif',
      price: '899',
    },
    {
      title: 'Data Science Course',
      img: '/assets/images/datasc.gif',
      price: '679',
    },
    {
      title: 'Blockchain Course',
      img: '/assets/images/blockchain.gif',
      price: '599',
    },
    {
      title: 'Python Programming',
      img: '/assets/images/python.gif',
      price: '629',
    },
    {
      title: 'Cyber Security Course',
      img: '/assets/images/cyber.gif',
      price: '499',
    },
    {
      title: 'Digital Marketing',
      img: '/assets/images/digitalmarket.gif',
      price: '399',
    },
    {
      title: 'Cloud Computing',
      img: '/assets/images/cloud.gif',
      price: '399',
    },
    {
      title: 'Video Editing Course',
      img: '/assets/images/videoedit.gif',
      price: '299',
    },
  ]

  return (
    <section className='flex-start flex-col mt-4'>
      <div>
        <h1 className='text-3xl text-white font-semibold underline decoration-white underline-offset-8 textform text-center my-5'>
          Placement Guarantee Courses
        </h1>
        <p className='textnew text-center text-gray-200 text-2xl mb-8'>
          Master new skills from anywhere with our online courses
        </p>
        <Grid container spacing={3}>
          {list.map((item, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card
                className='hover:scale-110 duration-300 ease-in-out transition cursor-pointer p-2'
                sx={{ maxWidth: 500, borderRadius: '16px' }}
              >
                <CardMedia
                  sx={{ height: 170 }}
                  image={item.img}
                  title={item.title}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    p: 1,
                    '&:last-child': { pb: 0 },
                  }}
                >
                  <Typography
                    className='font-semibold'
                    sx={{ textAlign: 'left', marginY: 'auto' }}
                    gutterBottom
                    variant='subtitle1'
                    component='div'
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className='text-black font-bold '
                    sx={{ marginY: 'auto' }}
                    gutterBottom
                    variant='subtitle1'
                    component='div'
                  >
                    &#8377; {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Grid.Container gap={1}>
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable isHoverable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={140}
                alt={item.title}
                decoding="async"
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text css={{color:"$gray800", fontWeight: "$semibold",textAlign:"left"}}>{item.title}</Text>
                <Text css={{ color:"$red700", fontWeight: "$semibold",fontSize: "$sm" }}>
                &#8377; {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container> */}
      </div>
    </section>
  )
}
