'use client'
import React from 'react'
import styles from 'styles/Page.module.css'
import { useState, useEffect } from 'react'
import {
  Typography,
  Grid,
  Box,
  CardContent,
  Card,
  Button,
  List,
  ListItem,
  Stack,
} from '@mui/material'

export default function Student() {
  const [status1, setStatus1] = useState(false)
  const [status2, setStatus2] = useState(false)
  const [status3, setStatus3] = useState(false)
  const [status4, setStatus4] = useState(false)
  const [status5, setStatus5] = useState(false)
  const [status6, setStatus6] = useState(false)
  function handleClick1() {
    status1 === false ? setStatus1(true) : setStatus1(false)
  }
  function handleClick2() {
    status2 === false ? setStatus2(true) : setStatus2(false)
  }
  function handleClick3() {
    status3 === false ? setStatus3(true) : setStatus3(false)
  }
  function handleClick4() {
    status4 === false ? setStatus4(true) : setStatus4(false)
  }
  function handleClick5() {
    status5 === false ? setStatus5(true) : setStatus5(false)
  }
  return (
    <div className='{styles.container} w-screen mb-10 text-left'>
      <Typography
        variant='h2'
        className=' text-center p-8 '
        style={{ fontFamily: 'Poppins', color: '#4B74C2', fontWeight: '600' }}
      >
        Career Services
      </Typography>

      <img src='/serviceasset/pro.jpg' alt='group'></img>
      <Typography
        variant='h3'
        className='text-blue-900 p-10'
        style={{ fontFamily: 'Poppins', color: '#4B74C2' }}
      >
        Services
      </Typography>
      <Grid container direction='row'>
        <Grid item xs={12} md={7}>
          <div className={styles.servicebox}>
            <Box>
              <h1 className={styles.servicehead}>GD Module</h1>
              <p className={styles.serviceparah}>
                GD Module Group Discussion is a crucial step in hiring for
                corporate jobs where members are assessed for their
                participation and leadership skills, their ability to take
                decisions in the stipulated time frame, and their thinking
                approach. We prepare you to step by step to ACE GD for any
                company. Comprehensive Course Highlights:
              </p>

              <h1 className={styles.serviceshell}>
                GET FREE GradUp GD Handbook worth Rs. 599/- by enrolling:
              </h1>
            </Box>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            className='shadow-md hover:shadow-lg rounded-lg'
            src='/serviceasset/service-model1.jpg'
            alt=''
          />
        </Grid>
      </Grid>
      <Grid container direction='row-reverse'>
        <Grid item xs={12} md={7} my={3}>
          <div className={styles.servicebox}>
            <Box>
              <h1 className={styles.servicehead}>Personal Interview Module </h1>
              <p className={styles.serviceparah}>
                Personal Interview is the Ultimate step in hiring for corporate
                jobs where candidates are the assessed basis of their technical
                skills, leadership skills, thinking approach, and many others.
                We prepare you to step by step to ACE PI for any company you sit
                for. GET FREE GradUp GD Handbook worth Rs. 599/- by enrolling:
              </p>

              <h1 className={styles.serviceshell}>
                Never before- 1 Free Mock Interview(One-to-One) by Professional:
                15 mins
              </h1>
              <button onClick={handleClick2} className={styles.btn1}>
                {status2 ? 'Show Less' : 'Show More'}
              </button>
            </Box>
          </div>
          {status2 ? (
            <img
              width='600'
              className='m-auto'
              src='/assets/images/pimodule1.png'
            ></img>
          ) : (
            ''
          )}
        </Grid>

        <Grid item xs={12} md={4} my={3}>
          <img
            className='rounded-lg '
            src='/serviceasset/asset2.jpg'
            alt=''
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
      <Grid container direction='row'>
        <Grid item xs={12} md={7} my={3}>
          <div className={styles.box}>
            <Box>
              <h1 className={styles.servicehead}>Resume Building </h1>
              <p className={styles.serviceparah}>
                It is often said that the First impression is the last. We
                believe that the FIRST IMPRESSION IS THE LASTING IMPRESSION.
                Your resume is your first face to the company you apply for. Is
                it good enough? Come get it checked, revised, or even get it
                built from scratch by our resume-writing experts.
              </p>

              <h1 className={styles.serviceshell}>
                GET YOUR RESUME UPGRADED WITH US
              </h1>
            </Box>
          </div>
        </Grid>

        <Grid item xs={12} md={4} my={3}>
          <img className='rounded-lg ' src='/serviceasset/asset3.jpg' alt='' />
        </Grid>
      </Grid>
      <div className={styles.serviceb}>
        <Grid
          container
          direction='row'
          my={2}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Grid items mx={4}>
            <Card sx={{ borderRadius: 8, bgcolor: '#4B74C2' }}>
              <CardContent>
                <Typography my={1} variant='h4' sx={{ fontWeight: 700 }}>
                  College Student (UG)
                </Typography>
                <div>
                  <List sx={{ color: 'white' }}>
                    <ListItem>ATS friendly resume</ListItem>
                    <ListItem>Crafted as per your dream profile</ListItem>
                    <ListItem>Cover Letter</ListItem>
                    <ListItem>Professional Photo</ListItem>
                    <ListItem>Email Body Snapshot</ListItem>
                  </List>
                  <div className='flex flex-col items-center justify-center '>
                    <Button variant='contained'>Rs 700/-</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item spacing={2} mx={4}>
            <Card sx={{ borderRadius: 8, bgcolor: '#4B74C2' }}>
              <CardContent>
                <Typography my={1} variant='h4' sx={{ fontWeight: 700 }}>
                  College Student (PG)
                </Typography>
                <div>
                  <List sx={{ color: 'white' }}>
                    <ListItem>ATS friendly resume</ListItem>
                    <ListItem>2 Resume for 2 different people</ListItem>
                    <ListItem>2 Copies Word/PDF and Visual Resume</ListItem>
                    <ListItem>Cover Letter</ListItem>
                    <ListItem>Professional Photo</ListItem>
                  </List>
                  <div className='flex flex-col items-center justify-center '>
                    <Button variant='contained'>Rs 800/-</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Grid container direction='row-reverse' my={3}>
        <Grid item xs={12} md={7} my={3}>
          <div className={styles.servicebox}>
            <Box>
              <h1 className={styles.servicehead}>
                Consulting Case Preparation And Guesstimate
              </h1>
              <p className={styles.serviceparah}>
                Have you ever come across questions like “ Tell me the number of
                people in Delhi wearing white shirts on a Tuesday” OR “ A
                company is witnessing reduced profits for last 6 months; find
                out the reason and suggest a solution” and you might have
                wondered what this question is all about and how to even get
                started about it? At GradUp , we will take you on a journey that
                would start from understanding these short cases and
                guesstimates to producing the best possible approach to solve
                them. We will train you in the basic techniques to handle
                questions of all types which will help you crack your case study
                round for the interview plus give you an edge over others in
                Corporate Case Competitions.
              </p>
              <button onClick={handleClick3} className={styles.btn1}>
                {status3 ? 'Show Less' : 'Show More'}
              </button>
            </Box>
          </div>
          {status3 ? (
            <img
              width='600'
              className='m-auto'
              src='/assets/images/Guesstimate1.png'
            ></img>
          ) : (
            ''
          )}
        </Grid>

        <Grid item xs={12} md={4} my={3}>
          <img
            className='rounded-lg '
            src='/serviceasset/asset4.jpg'
            alt=''
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              marginTop: '7px',
            }}
          />
        </Grid>
      </Grid>
      <Grid container direction='row'>
        <Grid item xs={12} md={7} my={3}>
          <div className={styles.servicebox}>
            <Box>
              <h1 className={styles.servicehead}>
                Winning Corporate Competition
              </h1>
              <p className={styles.serviceparah}>
                Being a National Winner in B-School Case Competitions not only
                adds a star point to your resume but enables you to stand out
                from the crowd and showcase your real-life problem-solving
                abilities. Be a part of this 2-hour journey and learn from the
                winners to Ace all Corporate, Intra Campus, and Inter college
                competitions. You get a FREE GradUp Handbook to guide you on
                upcoming competitions and access to 4 winning case study briefs
                with a solution.
              </p>
              <button onClick={handleClick4} className={styles.btn1}>
                {status4 ? 'Show Less' : 'Show More'}
              </button>
            </Box>
          </div>
          {status4 ? (
            <img
              width='600'
              className='mx-auto -mb-40'
              src='/assets/images/Corporate1.png'
            ></img>
          ) : (
            ''
          )}
        </Grid>

        <Grid item xs={12} md={4} my={3}>
          <img
            className='rounded-lg '
            src='/serviceasset/asset5.jpg'
            alt=''
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
      <Grid container direction='row-reverse'>
        <Grid item xs={12} md={7} my={3}>
          <div className={styles.servicebox}>
            <Box>
              <h1 className={styles.servicehead}>Digital Profile Building</h1>
              <p className={styles.serviceparah}>
                The world knows you even before you meet. Your digital profile
                is your first impression of the outside world. With platforms
                like LinkedIn especially curated for professionals, the worst
                thing you can do to your image is not effectively utilized and
                explore it. With companies like Google reaching out to you
                directly for a job via LinkedIn, why are you still not using it
                effectively for landing up to your dream job? Come and learn
                with us on the dos and Don’ts of building up a powerful LinkedIn
                profile, the most effective way of getting connected to people
                and groups who matches our interests, and effective posts and
                blogs that will make you stand out from the crowd. For
                businesses, having a LinkedIn profile is a must when you want
                your existing clients to perceive high of you or you are looking
                for new clients. When job seekers land on your page, this is the
                best time to showcase your company culture, events, and your
                vision.
              </p>
            </Box>
          </div>
        </Grid>

        <Grid item xs={12} md={4} my={3}>
          <img
            className='rounded-lg '
            src='/serviceasset/asset6.jpg'
            alt=''
            style={{ width: '100%', height: '450px', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
      <div>
        <div className={styles.digitalgrid}>
          <div className={styles.linkedincard}>
            LinkedIn Tips and Tricks for Working Professionals
            <p className='text-black mt-4'>
              @<s>Rs 999/-</s>@ Rs 599/- per participant
            </p>
          </div>
          <div className={styles.linkedincard}>
            LinkedIn Tips and Tricks for Students
            <p className='text-black mt-4 '>
              @<s>Rs 599/-</s>@ Rs 399/- per participant
            </p>
          </div>
          <div className={styles.linkedincard}>
            LinkedIn Tips and Tricks for Businesses
            <p className='text-black mt-4 '>
              @<s>Rs 1999/-</s>@ Rs 999/- per participant
            </p>
          </div>
          <div className={styles.linkedincard}>
            LinkedIn Profile Building for Working Professionals
            <p className='text-black mt-4 '>@ Rs 1499/-</p>
          </div>
          <div className={styles.linkedincard}>
            LinkedIn Profile Building for Students
            <p className='text-black mt-4 '>@ Rs 799/-</p>
          </div>
          <div className={styles.linkedincard}>
            LinkedIn Profile Building for Businesses
            <p className='text-black mt-4 '>@ Rs 1999/-</p>
          </div>
        </div>
      </div>
      {/*
      <div className={styles.serviceb}>
        <Grid container sm={12} direction='row' ml={4}>
          <Grid item>
            <Card className={styles.linkedincard}>
              <CardContent className='pt-5'>
                <Typography fontSize={20}>
                  LinkedIn Tips and Tricks for Working Professionals
                </Typography>
                <Typography className='pt-10'>
                  @Rs 599/- per participant
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item mt={30}>
            <Card className={styles.linkedincard}>
              <CardContent className='pt-5'>
                <Typography fontSize={20}>
                  LinkedIn Profile Building for Working Professionals
                </Typography>
                <Typography className='pt-10'>
                  @Rs 1499/- per participant
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={styles.linkedincard}>
              <CardContent className='pt-5'>
                <Typography fontSize={20}>
                  LinkedIn Tips and Tricks for Students
                </Typography>
                <Typography className='pt-10'>
                  @Rs 399/- per participant
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item mt={30}>
            <Card className={styles.linkedincard}>
              <CardContent className='pt-5'>
                <Typography fontSize={20}>
                  LinkedIn Profile Building for Students
                </Typography>
                <Typography className='pt-10'>
                  @Rs 799/- per participant
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={styles.linkedincard}>
              <CardContent className='pt-5'>
                <Typography fontSize={20}>
                  LinkedIn Tips and Tricks for Businesses
                </Typography>
                <Typography className='pt-10'>
                  @Rs 999/- per participant
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item mt={30}>
            <Card className={styles.linkedincard}>
              <CardContent className='pt-5'>
                <Typography fontSize={20}>
                  LinkedIn Profile Building For Businesses
                </Typography>
                <Typography className='pt-10'>
                  @Rs 1999/- per participant
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      */}
      <Grid container direction='row' my={3}>
        <Grid item xs={12} md={7} my={3}>
          <div className={styles.servicebox}>
            <Box>
              <h1 className={styles.servicehead}>Communication Skills</h1>
              <p className={`${styles.serviceparah} overflow-hidden`}>
                Effective communication is a key to success and if you don’t
                communicate your ideas well, the audience would never be able to
                connect the impact your idea could bring to the world. Have you
                ever wondered how these eloquent speakers just move the crowd by
                their words? Have you ever noticed some of your college mates
                with an amazing presentation and communication skills grabbing
                all the attention even if the point they are trying to make is
                not impactful enough? That is the magic of communication where
                you make yourselves heard! Burst the myth now- A person fluent
                in English does not imply that he/she is a good communicator.
                Learn the fundamentals of effective communication, listening
                skills, note making in mind and touching all aspects of a topic
                via creating a mind tree in just an hour with our mentors.
              </p>
              <button onClick={handleClick5} className={styles.btn1}>
                {status5 ? 'Show Less' : 'Show More'}
              </button>
            </Box>
          </div>
          {status5 ? (
            <img
              width='600'
              className='m-auto'
              src='/assets/images/Communication1.png'
            ></img>
          ) : (
            ''
          )}
        </Grid>

        <Grid item xs={12} md={4} my={3}>
          <img
            className='rounded-lg '
            src='/serviceasset/asset7.jpg'
            alt=''
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
      <Grid container direction='row-reverse'>
        <Grid item xs={12} md={7} my={3}>
          <div className={styles.servicebox}>
            <Box>
              <h1 className={styles.servicehead}>Career Guidance </h1>
              <p className={styles.serviceparah}>
                The biggest mistake one can do in life is not follow his passion
                and join a college without an aim. We have all seen students
                taking a B.Tech degree just because other’s are doing the same,
                students taking commerce as subjects in class 11 only because
                they didn’t had a good physics teacher in class 10, students
                taking up any branch/ specialization without knowing the career
                progression and also sitting for college placements only by
                looking at CTC and not company/job profile- and trust me this is
                even prevalent in good colleges including IITs and IIMs. To have
                a clear cut discussion on what subjects /specialization /jobs is
                best suitable for you- GradUp presents a close knitted career
                guidance program where small group of participants are heard,
                their career path and interests is understood by our
                professionally certified career counsellors and accordingly best
                decision in taken. Come, let’s chat around your career
                discussion plans!
              </p>
            </Box>
          </div>
        </Grid>

        <Grid item xs={12} md={4} my={3}>
          <img
            className='rounded-lg '
            src='/serviceasset/asset8.jpg'
            alt=''
            style={{ width: '100%', height: '450px', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </div>
  )
}
