'use client'
import React from 'react'
import styles from 'styles/Page.module.css'
import { useState, useEffect } from 'react'
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
      <div className={styles.box}>
        <img
          className={styles.groupimg}
          src='/assets/images/GDmodule.png'
          alt='group'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>GD Module</h1>
          <p className={styles.paragraph}>
            Group Discussion is a crucial step in hiring for corporate jobs
            where members are assessed for their participation and leadership
            skills, their ability to take decisions in the stipulated time
            frame, and their thinking approach. We prepare you to step by step
            to ACE GD for any company. Comprehensive Course Highlights:
          </p>
          <h1 className={styles.enroll}>
            GET FREE GradUp GD Handbook worth Rs. 599/-
          </h1>
        </div>
      </div>
      {/* {status1?<div className={styles.desc}>
        <div className="text-3xl text-center font-semibold mb-12 mt-6">Book A Slot Now @ Just <s className="text-white">Rs 1499/-</s> Rs 999/- Per Participant.</div>
        <div className="mt-3">
          <label className={styles.name}>Session Time :</label><label className={styles.value}>150-180 mins</label>
          <label className={styles.name}>Mock GD :</label><label className={styles.value}>15-20 mins mins per slot (slot size- 6 to 8 members)</label>
          <label className={styles.name}>Total Batch Size :</label><label className={styles.value}>40-60 Partcipants</label>
          <label className={styles.name}>0-30 min :</label><label className={styles.value}>What Is Group Discussion? Its importance in hiring process and relevance to the company; Skills assesed via GD</label>
          <label className={styles.name}>30-60 min :</label><label className={styles.value}>Power dressing, GD postures, Do’s and Don’t’s, Common GD types Slot wise GD breakup and ideal pitching</label>
          <label className={styles.name}>60-120 min :</label><label className={styles.value}>Idea generation via Mind Map and introduction to tools and points structuring</label>
          <label className={styles.name}>120-150 min :</label><label className={styles.value}>Introduction to numbers, GD introduction and conclusion. How to Ace GD even when you don’t know a word about topic!</label>
          <label className={styles.name}>150-180 min :</label><label className={styles.value}>2/3 Live GDs covering major types and all points discussed above</label>
          <label className={styles.name}>Mock GD :</label><label className={styles.value}>Participants will be grouped in a Team Size of 6-8 members randomly and will be prepared for Mock GD rounds of 15-20 mins each</label>
          <label className={styles.name}>a-Z GD Handbook :</label><label className={styles.value}>Free handbook covering the tips and tricks to ace GD loaded with GD contents like current affairs, general awareness and Abstract GD topics</label>
        </div>
      </div>:""} */}
      <div className={styles.box}>
        <img
          className={styles.groupimg1}
          src='/assets/images/pimodule.jpg'
          alt='interview'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>Personal Interview Module</h1>
          <p className={styles.paragraph}>
            Personal Interview is the Ultimate step in hiring for corporate jobs
            where candidates are the assessed basis of their technical skills,
            leadership skills, thinking approach, and many others. We prepare
            you to step by step to ACE PI for any company you sit for.
          </p>
          {/* <p className={styles.partnerpara}>Comprehensive Course Highlights:</p> */}
          <h1 className={styles.enroll}>
            GET FREE GradUp GD Handbook worth Rs. 599/- by enrolling:
          </h1>
          <h1 className={styles.enroll}>
            Never before- 1 Free Mock Interview(One-to-One) by Professional: 15
            mins
          </h1>
          <button onClick={handleClick2} className={styles.btn1}>
            {status2 ? 'Show Less' : 'Show More'}
          </button>
        </div>
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
      <div className={styles.box}>
        <img
          className={styles.groupimg2}
          src='/assets/images/Resumeee.png'
          alt='interview'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>Resume Building</h1>
          <p className={styles.paragraph}>
            It is often said that the First impression is the last. We believe
            that the FIRST IMPRESSION IS THE LASTING IMPRESSION. Your resume is
            your first face to the company you apply for. Is it good enough?
            Come get it checked, revised, or even get it built from scratch by
            our resume-writing experts.
          </p>
          {/* <button className={styles.btn1}><a href="">Get Service</a></button> */}
        </div>
      </div>
      <div>
        <div className='text-2xl text-white text-center font-semibold mb-12 mt-12'>
          Audio And Video Resumes On Demand
        </div>
        <div className={styles.resumegroup}>
          <div className={styles.resume1}>
            <h1 className='text-xl mb-4 font-semibold'>College Students(UG)</h1>
            <ul>
              <li className=' ml-2 '>ATS friendly resume</li>
              <li className=' ml-2 '>Crafted as per your dream profile</li>
              <li className=' ml-2 '>Cover letter</li>
              <li className=' ml-2 '>Professional Photo</li>
              <li className=' ml-2 '>Email Body Snapshot</li>
            </ul>
            <p className='mt-6 text-lg font-semibold text-white'> Rs 700/-</p>
          </div>
          <div className={styles.resume1}>
            <h1 className='text-xl mb-4 font-semibold'>College Students(PG)</h1>
            <ul>
              <li className=' ml-2 '>ATS friendly resume</li>
              <li className=' ml-2 '>2 resumes for 2 different people</li>
              <li className=' ml-2 '>2 copies- WORD/PDF and Visual resume</li>
              <li className=' ml-2 '>Cover Letter</li>
              <li className=' ml-2 '>Professional Photo</li>
            </ul>
            <p className='mt-6 text-lg font-semibold text-white'> Rs 800</p>
          </div>
          <div className={styles.resume1}>
            <h1 className='text-xl mb-4 font-semibold'>
              Working Professionals (0-3 Years)
            </h1>
            <ul>
              <li className=' ml-2 '>ATS friendly resume</li>
              <li className=' ml-2 '>2 resumes for 2 different people</li>
              <li className=' ml-2 '>Profile Summary</li>
              <li className=' ml-2 '>2 copies- WORD/PDF and Visual resume</li>
              <li className=' ml-2 '>Cover letter</li>
              <li className=' ml-2 '>Professional Photo</li>
            </ul>
            <p className='mt-6 text-lg font-semibold text-white'> Rs 1800</p>
          </div>
          <div className={styles.resume1}>
            <h1 className='text-xl mb-4 font-semibold'>
              Working Professionals (3-8 Years)
            </h1>
            <ul>
              <li className=' ml-2 '>ATS friendly resume</li>
              <li className=' ml-2 '>
                2 or more copies as per targeted industries
              </li>
              <li className=' ml-2 '>Profile Summary</li>
              <li className=' ml-2 '>2 copies- WORD/PDF and Visual resume</li>
              <li className=' ml-2 '>Cover Letter</li>
              <li className=' ml-2 '>Professional Photo</li>
            </ul>
            <p className='mt-6 text-lg font-semibold text-white'> Rs 2300</p>
          </div>
          <div className={styles.resume1}>
            <h1 className='text-xl mb-4 font-semibold'>
              Working Professionals (8+ Years)
            </h1>
            <ul>
              <li className=' ml-2 '>ATS friendly resume</li>
              <li className=' ml-2 '>
                2 or more copies as per targeted industries
              </li>
              <li className=' ml-2 '>Profile Summary</li>
              <li className=' ml-2 '>2 copies- WORD/PDF and Visual resume</li>
              <li className=' ml-2 '>Cover Letter</li>
              <li className=' ml-2 '>Professional Photo</li>
            </ul>
            <p className='mt-6 text-lg font-semibold text-white'> Rs 3350</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <img
          className={styles.groupimg4}
          src='/assets/images/guesstimates.png'
          alt='group'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>
            Consulting Case Preparation and Guesstimate
          </h1>
          <p className={styles.paragraph}>
            Have you ever come across questions like “ Tell me the number of
            people in Delhi wearing white shirts on a Tuesday” OR “ A company is
            witnessing reduced profits for last 6 months; find out the reason
            and suggest a solution” and you might have wondered what this
            question is all about and how to even get started about it? At
            GradUp , we will take you on a journey that would start from
            understanding these short cases and guesstimates to producing the
            best possible approach to solve them. We will train you in the basic
            techniques to handle questions of all types which will help you
            crack your case study round for the interview plus give you an edge
            over others in Corporate Case Competitions.
          </p>
          <button onClick={handleClick3} className={styles.btn1}>
            {status3 ? 'Show Less' : 'Show More'}
          </button>
        </div>
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
      <div className={styles.box}>
        <img
          className={styles.groupimg4}
          src='/assets/images/corporatecom.png'
          alt='group'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>Winning Corporate Competition</h1>
          <p className={styles.paragraph}>
            Being a National Winner in B-School Case Competitions not only adds
            a star point to your resume but enables you to stand out from the
            crowd and showcase your real-life problem-solving abilities. Be a
            part of this 2-hour journey and learn from the winners to Ace all
            Corporate, Intra Campus, and Inter college competitions.
          </p>
          <p className={styles.paragraph}>
            You get a FREE GradUp Handbook to guide you on upcoming competitions
            and access to 4 winning case study briefs with a solution.
          </p>
          <button onClick={handleClick4} className={styles.btn1}>
            {status4 ? 'Show Less' : 'Show More'}
          </button>
        </div>
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
      <div className={styles.box}>
        <img
          className={styles.groupimg4}
          src='/assets/images/digpro.png'
          alt='group'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>Digital Profile building</h1>
          <p className={styles.paragraph}>
            The world knows you even before you meet. Your digital profile is
            your first impression of the outside world. With platforms like
            LinkedIn especially curated for professionals, the worst thing you
            can do to your image is not effectively utilized and explore it.
            With companies like Google reaching out to you directly for a job
            via LinkedIn, why are you still not using it effectively for landing
            up to your dream job? Come and learn with us on the dos and Don’ts
            of building up a powerful LinkedIn profile, the most effective way
            of getting connected to people and groups who matches our interests,
            and effective posts and blogs that will make you stand out from the
            crowd. For businesses, having a LinkedIn profile is a must when you
            want your existing clients to perceive high of you or you are
            looking for new clients. When job seekers land on your page, this is
            the best time to showcase your company culture, events, and your
            vision.
          </p>
          {/* <button className={styles.btn1}>Get Service</button> */}
        </div>
      </div>
      <div>
        <div className={styles.digitalgrid}>
          <div className={styles.digitalbox}>
            LinkedIn Tips and Tricks for Working Professionals
            <p className='text-black mt-4'>
              @<s>Rs 999/-</s>@ Rs 599/- per participant
            </p>
          </div>
          <div className={styles.digitalbox}>
            LinkedIn Tips and Tricks for Students
            <p className='text-black mt-4'>
              @<s>Rs 599/-</s>@ Rs 399/- per participant
            </p>
          </div>
          <div className={styles.digitalbox}>
            LinkedIn Tips and Tricks for Businesses
            <p className='text-black mt-4'>
              @<s>Rs 1999/-</s>@ Rs 999/- per participant
            </p>
          </div>
          <div className={styles.digitalbox}>
            LinkedIn Profile Building for Working Professionals
            <p className='text-black mt-4'>@ Rs 1499/-</p>
          </div>
          <div className={styles.digitalbox}>
            LinkedIn Profile Building for Students
            <p className='text-black mt-4'>@ Rs 799/-</p>
          </div>
          <div className={styles.digitalbox}>
            LinkedIn Profile Building for Businesses
            <p className='text-black mt-4'>@ Rs 1999/-</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <img
          className={styles.groupimg1}
          src='/assets/images/commskills.png'
          alt='interview'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>Communication Skills</h1>
          <p className={styles.paragraph}>
            Effective communication is a key to success and if you don’t
            communicate your ideas well, the audience would never be able to
            connect the impact your idea could bring to the world. Have you ever
            wondered how these eloquent speakers just move the crowd by their
            words?
          </p>
          <p className={styles.paragraph}>
            Have you ever noticed some of your college mates with an amazing
            presentation and communication skills grabbing all the attention
            even if the point they are trying to make is not impactful enough?
            That is the magic of communication where you make yourselves heard!
            Burst the myth now- A person fluent in English does not imply that
            he/she is a good communicator. Learn the fundamentals of effective
            communication, listening skills, note making in mind and touching
            all aspects of a topic via creating a mind tree in just an hour with
            our mentors.
          </p>
          <button onClick={handleClick5} className={styles.btn1}>
            {status5 ? 'Show Less' : 'Show More'}
          </button>
        </div>
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
      <div className={styles.box}>
        <img
          className={styles.groupimg4}
          src='/assets/images/careerguide.png'
          alt='interview'
        ></img>
        <div>
          <h1 className={styles.heading}>--Services</h1>
          <h1 className={styles.subhead}>Career Guidance</h1>
          <p className={styles.paragraph}>
            The biggest mistake one can do in life is not follow his passion and
            join a college without an aim. We have all seen students taking a
            B.Tech degree just because other’s are doing the same, students
            taking commerce as subjects in class 11 only because they didn’t had
            a good physics teacher in class 10, students taking up any branch/
            specialization without knowing the career progression and also
            sitting for college placements only by looking at CTC and not
            company/job profile- and trust me this is even prevalent in good
            colleges including IITs and IIMs.
          </p>
          <p className={styles.paragraph}>
            To have a clear cut discussion on what subjects /specialization
            /jobs is best suitable for you- GradUp presents a close knitted
            career guidance program where small group of participants are heard,
            their career path and interests is understood by our professionally
            certified career counsellors and accordingly best decision in taken.
            Come, let’s chat around your career discussion plans!
          </p>
          {/* <button className={styles.btn1}><a href="">Book A Slot</a></button> */}
        </div>
      </div>
    </div>
  )
}
