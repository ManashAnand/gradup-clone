"use client"
import styles from 'styles/Page.module.css'
import RocketIcon from '@mui/icons-material/Rocket';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactUS from "@components/ContactUS"
export default function About() {
  return (
    <div className='mb-10'>
       <div className="aboutbox mt-10">
          <div>
            <div>
            <p className='text-3xl text my-6 text-sky-500'>About Company</p>
            <p className='textnew text-white w-full'>GradUp is a platform that was founded with the aim of seamlessly matching individual expertise with the right opportunities. We empower talented students by providing them with relevant experience at fast-growing startups based on competencies and aspirations. These opportunities have a significant impact on their career success and help them become their best self. On the other hand, startups get instant access to top-quality students with guaranteed productivity from the very beginning. We help them to scale up/down based on their needs, thus ensuring an efficient and high-yielding workforce. Our advanced course includes Power BI, Artificial Intelligence, Robotics, Digital Marketing, and many more. Our dedicated modules and one-to-one connections with students in their placement preparation journey ensure that these aspirants get landed up to their dream jobs and dream profiles. In this information age, students do have a plethora of disorganized preparatory materials available online but systematic and step-by-step preparation and upskilling is what we plan to provide to our students. We do believe that there is practically no end to learning- but given the time constraints and the competition in this generation- you must learn and prioritize only what is the need of the hour. Come and enjoy being a part of our successful community. The CIN of the company is U80903JH2022PTC019112 and GST No. is 20AACCZ0257F1ZS.</p>
            </div>
          </div>
          <div className='yes ml-12 mt-32'>
            <img width="7000" src="/assets/images/employee.png" alt="company"></img>
          </div>
       </div>
       <div className={styles.values}>
        <h1 className={styles.heading1}><strong><u>Our Business</u></strong></h1>
        <h1 className={styles.sizing}>Be Different From Others</h1>
        <div className={styles.core}>
          <div className={styles.contain1}>
            <RocketIcon sx={{color:"deepskyblue",fontSize:"70px"}} fontSize="large"/>
            <p className="text-sky-400 text-center text-2xl mb-4 font-semibold">Our Mission</p>
            <p className="text-center">To be a one-stop solution for all upskilling and placement preparation needs.</p>
          </div>
          <div className={styles.contain2}>
            <Diversity2Icon sx={{color:"deepskyblue",fontSize:"60px"}}/>
            <p className="text-sky-400 text-center text-2xl mb-4 font-semibold">Our Core Values</p>
            <li className={styles.list1}>Integrity</li>
            <li className={styles.list1}>Accountability</li>
            <li className={styles.list1}>Teamwork</li>
            <li className={styles.list1}>Respect</li>
            <li className={styles.list1}>Honesty</li>
          </div>
          <div className={styles.contain3}>
            <TravelExploreIcon sx={{color:"deepskyblue",fontSize:"60px"}}/>
            <p className="text-sky-400 text-2xl text-center mb-4 font-semibold">Our Vision</p>
            <p className="text-center">We want to make the Youth of India more employable and future ready.</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl text mb-4 mt-8 text-blue-500">Meet Our Founder</h1>
      <div className="founderbox">
        <img className="founderimg"width="400" src="/assets/images/founder.png" alt="founder"></img>
        <div className="ml-6 mt-7 textnew">
          <p className="text-white text-sm mb-2" >Mr. Tanmay is a young and budding entrepreneur who has received the award for India’s Top 100 Emerging Entrepreneurs-2023 by Fox Story India!</p>
          <p className="text-white text-sm mb-2">Tanmay has been also featured in many newspapers like Hindustan Times, Hindustan, Outlook, Dainik Bhaskar, Dainik Jagran & many more…</p>
          <p className="text-white text-sm mb-2">Tanmay believes in continuous learning for everyone including himself. Currently, Tanmay has been enrolled in Executive Digital Marketing Program at The Wharton School, University of Pennsylvania.</p>
          <p className="text-white text-sm mb-2">Tanmay is alumnus of NIT-IIM. He holds an Engineering degree, MBA degree and an Advanced degree in Digital Marketing & Entrepreneurship. Tanmay has worked and collaborated with esteemed companies like PhonePe, Genpact, Toyota, LiuGong, Tata Steel Aashiyana, and PepsiCo (VBL) and has rich experience in framing digital marketing strategies for MSME clients.</p>
          <p className="text-white text-sm mb-2">Tanmay is rightly known for his networking and leadership skills. He is presently a member of the International Youth Council, United Nations, and has been elected as the General Secretary and Vice President at various clubs and societies. Before GradUp, Tanmay co-founded a startup namely Business garage which aimed at providing digital marketing strategies to MSMEs.</p>
          <p className='text-white text-sm mb-2'><em>Tanmay is also a guest speaker, and he has been invited as a guest speaker by many premier institutions of India.</em></p>
          <p className="text-white text-sm mb-2"><em>Tanmay has a vision to nurture the youth of “BHARAT” to be industry- and future-ready.</em></p>
          <p className="text-white text-sm mb-2"><em>Tanmay’s Director Identification No is  09687950.</em></p>
          <br />
        </div>
      </div>
    </div>
  )
}
