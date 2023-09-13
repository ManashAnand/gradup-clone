'use client'

import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import useSWR from 'swr'
import Spinner from '@components/Spinner'
import CustomCard from '@components/CustomCard'

async function fetcher(url) {
  const res = await fetch(url, { cache: 'no-store' })
  return await res.json()
}

export default function CoursesOnHome() {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/courses`,
    fetcher
  )

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='flex-start flex-col mt-4'>
      <div>
        <h1 className='text-3xl text-white font-semibold underline decoration-white underline-offset-8 textform text-center my-5'>
          Placement Guarantee Courses
        </h1>
        <p className='textnew text-center text-gray-200 text-2xl mb-8'>
          Master new skills from anywhere with our online courses
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'popular')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <CustomCard
                  className='w-[50%]'
                  kye={index}
                  image={item.imageURL}
                  title={item.title}
                  url={`/courses/${item._id}`}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </section>
  )
}

{
  /* <Grid.Container gap={1}>
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
    </Grid.Container> */
}
