import { Site } from '@rsuite/icons'
import React from 'react'
import Link from 'next/link'

const siteList=[
    {
        l:"http://gradup.in",
        name:"Website home"
    },
    {
        l:"http://gradup.in/jobs",
        name:"Jobs"
    },
    {
        l:"http://gradup.in/internships",
        name:"Internships"
    },
    {
        l:"http://gradup.in/courses",
        name:"Courses"
    },
    {
        l:"http://gradup.in/hackathons",
        name:"Hackathons"
    },
    {
        l:"http://gradup.in/about-us/our-services-content/career",
        name:"Career with us"
    },
    {
        l:"http://gradup.in/for-startUps",
        name:"For StartUps"
    },
    {
        l:"http://gradup.in/blogs",
        name:"Blog"
    },
    {
        l:"http://gradup.in/case-study",
        name:"Case studies"
    },
    {
        l:"http://gradup.in/mcqs",
        name:"MCQs"
    },
    {
        l:"http://gradup.in/alumni-network",
        name:"Alumni Network"
    },
    {
        l:"http://gradup.in/alumni-network/manage",
        name:"Alumni Network"
    },
    {
        l:"http://gradup.in/about-us",
        name:"About Us"
    },
    {
        l:"http://gradup.in/Institutes-in-touch",
        name:"Institutes in our touch"
    },
    {
        l:"http://gradup.in/about-us/privacy-policy",
        name:"Privacy Policy"
    },
    {
        l:"http://gradup.in/about-us/our-services-content",
        name:"Our Services"
    },
    {
        l:"http://gradup.in/about-us/terms-and-condition",
        name:"Terms and Condition"
    },
    {
        l:"http://gradup.in/about-us/cancellation-policy",
        name:"Cancellation policy"
    },
    {
        l:"http://gradup.in/faq",
        name:"FAQ"
    },
    {
        l:"http://gradup.in/gallery",
        name:"Gallery"
    },
    {
        l:"http://gradup.in/ContactUs",
        name:"Contact us"
    },
    {
        l:"http://gradup.in/problem-statement",
        name:"Problem Statement"
    }
]
const page = () => {

  return (
    <div>
        <p className='text-5xl animate-charcter justice textform mb-6 text-sky-500'>Sitemap</p>
        {
            siteList.map((link)=>(
                <>
                <li className='text-white text-justify justify-start'>
                <Link href={link.l}>
                    {link.name}
                </Link>
                </li> <br/>
                </>
            ))
        }
    </div>
  )
}

export default page