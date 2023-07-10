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
            <p className='text-white mb-1 textnew width-full text-justify'>Welcome to GradUp, the premier platform connecting talented students with top-tier companies. Our platform
              provides students with a unique opportunity to unlock
              their potential by finding internships tailored to their
              individual skill sets and interests. We solve the problem
              of finding quality internships by offering a user-friendly
              and comprehensive platform that connects students
              with companies across India.
            </p>
            <li className='text-white mb-1 textnew width-full text-justify'>Looking for talented and motivated interns who can add value to your startup? Want to save time and resources in finding and training the best candidates? Want to contribute to the skill development and career growth of India’s next generation of innovators and leaders?</li>
            <li className='text-white mb-1 textnew width-full text-justify'>Partner with GradUp, the platform that connects you with the best students from engineering as well as business schools who are eager to learn from you. Post your internship requirements and we'll help you select the students who match your interests, skills, and goals. Get instant access to top-quality students who are productive from the start. Scale up or down your workforce based on your needs, ensuring an efficient and high-yielding workforce.</li>
            <li className='text-white mb-1 textnew width-full text-justify'>Our platform has helped multiple companies to find and nurture the best interns who can contribute to their growth and success. We also provide you with tools and support to manage your internships effectively. We believe that internships are a win-win situation for both businesses and students, but you also need to find the right match. Partner with us today and discover the benefits of working with GradUp.</li>
          </div>
        </div>
        <div className='yes ml-12 mt-40'>
          <img width="2000" src="/assets/images/employee.png" alt="company"></img>
        </div>
      </div>
      <div className={styles.values}>
        <h1 className={styles.heading1}><strong><u>Our Core Values</u></strong></h1>
        <h1 className={styles.sizing}>Be Different From Others</h1>
        <div className={styles.core}>
          <div className={styles.contain1}>
            <RocketIcon sx={{ color: "deepskyblue", fontSize: "70px" }} fontSize="large" />
            <p className="text-sky-400 text-center text-2xl mb-4 font-semibold">Our Story</p>
            <p className="text-center">GradUp roots go back to 2018,since then, hundreds of students have found their dream companies, hence fulfilling our promises to transform dreams to reality</p>
          </div>
          <div className={styles.contain2}>
            <Diversity2Icon sx={{ color: "deepskyblue", fontSize: "60px" }} />
            <p className="text-sky-400 text-center text-2xl mb-4 font-semibold">Our Solution</p>
            <p className="text-center">A comprehensive platform with user friendly interface,solving for internships,profile matching and simplifying the recruitment process.</p>
          </div>
          <div className={styles.contain3}>
            <TravelExploreIcon sx={{ color: "deepskyblue", fontSize: "60px" }} />
            <p className="text-sky-400 text-2xl text-center mb-4 font-semibold">Our Vision</p>
            <p className="text-center">We want to make the Youth of India more employable and future ready.</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl text mb-4 mt-8 text-blue-500">Meet Our Founder</h1>
      <div className="founderbox">
        <img className="founderimg" width="400" src="/assets/images/NEW PICS.jpg" alt="founder"></img>
        <div className="ml-6 mt-7 textnew text-justify">
          <p className="text-white text-sm mb-2" >Mr. Tanmay is a trailblazer, who is a 25 yr old entrepreneur whose meteoric rise from humble beginnings to becoming a well-known entreprenaur has been an inspiration to the students of the country. Failing consistently, being unable to face their fears, Mr. Tanmay couldn’t do what they wished for and unfortunately being at the lowest was their thing. Being named in the failure list, used to be no new for them until they discovered their inner own self. Starting from scratch, he embraced the challenges that awaited him, transforming adversity into opportunity.  Now, this young and budding entrepreneur has also received the award for India’s Top 100 Emerging Entrepreneurs-2023 by Fox Story India! They had a trailblazing Journey from Ground Zero to Remarkable Heights.</p>
          <p className="text-white text-sm mb-2">Coming from a family of educationists, our founder Mr Tanmay had the chance to interact with many students and parents. His interaction with the students helped him understand the most common problems faced by them  in their career initial phase of career after completing their degree. To provide a solution to this, GradUp (formerly, Attitude matterZ) was born.</p>
          <p className="text-white text-sm mb-2">Mr. Tanmay believes in continuous learning for everyone including their own self. Their story is a testament to resilience, unwavering determination, and an unparalleled drive for success. Tanmay is alumnus of NIT-IIM. He holds an Engineering degree, MBA degree and an Advanced degree in Digital Marketing & Entrepreneurship. Currently, Mr. Tanmay is pursuing Executive entrepreneurship Program at The Wharton School, University of Pennsylvania.</p>
          <p className="text-white text-sm mb-2">Mr. Tanmay has worked so hard despite facing several difficulties & being unvalued, still they manage to collaborate with some esteemed companies like PhonePe, Genpact, Toyota, LiuGong, Tata Steel Aashiyana, and PepsiCo (VBL) and has rich experience in framing digital marketing strategies for MSME clients.</p>
          <p className="text-white text-sm mb-2">Mr. Tanmay is rightly known for his networking, down to earth nature and leadership skills. He is presently a member of the International Youth Council, United Nations, and has been elected as the General Secretary and Vice President at various clubs and societies. Before GradUp (formerly Attitude matterZ), Tanmay co-founded a startup namely Business garage which aimed at providing digital marketing strategies to MSMEs.</p>
          <p className='text-white text-sm mb-2'><em>Tanmay is also a guest speaker, and he has been invited as a guest speaker by many premier institutions of India.</em></p>
          <p className="text-white text-sm mb-2"><em>Tanmay has a vision to nurture the youth of “BHARAT” to be industry and future ready.</em></p>
          <p className="text-white text-sm mb-2"><em>Tanmay’s Director Identification No is  09687950.</em></p>
          <br />
        </div>
      </div>
      {/* <img className='mx-auto mt-16 mb-16' src="/assets/images/certify.png" alt="certificate"></img> */}
      <p className='text-white textnew text-2xl mt-5'>Join GradUp Today</p>
      <p className='text-white textnew mt-1'>Thank you for considering GradUp as your go-to platform for internships. We're confident that our
        comprehensive features and flexible pricing model make us the best choice for students and businesses alike.
        To take advantage of our platform, simply sign up for free and start exploring the many opportunities available
        to you. If you have any questions or concerns, our dedicated support team is always available to help.
        Join GradUp today and transform your dreams in the world of internships.</p>
      <p className="text-white text-3xl text-center mt-12 mb-9">Recognized by Startup India</p>
      <img className='mx-auto mb-16' width="300" src="/assets/images/startup.jpg"></img>
    </div>
  )
}
