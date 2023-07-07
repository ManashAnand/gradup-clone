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
            <p className='text-3xl text my-6 text-sky-500'>About Us</p>
            <p className='text-white mb-1 textnew width-full text-justify'>Looking for talented and motivated interns who can add value to your startup? Want to save time and resources in finding and training the best candidates? Want to contribute to the skill development and career growth of India’s next generation of innovators and leaders?</p>
            <p className='text-white mb-1 textnew width-full text-justify'>Partner with GradUp, the platform that connects you with the best students from engineering as well as business schools who are eager to learn from you. Post your internship requirements and we'll help you select the students who match your interests, skills, and goals. Get instant access to top-quality students who are productive from the start. Scale up or down your workforce based on your needs, ensuring an efficient and high-yielding workforce.</p>
            <p className='text-white mb-1 textnew width-full text-justify'>Our platform has helped multiple companies to find and nurture the best interns who can contribute to their growth and success. We also provide you with tools and support to manage your internships effectively. We believe that internships are a win-win situation for both businesses and students, but you also need to find the right match. Partner with us today and discover the benefits of working with GradUp.</p>
            </div>
          </div>
          <div className='yes ml-12 mt-32'>
            <img width="2000" src="/assets/images/employee.png" alt="company"></img>
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
        <div className="ml-6 mt-7 textnew text-justify">
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
