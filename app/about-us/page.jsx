"use client"
import styles from 'styles/Page.module.css'
import RocketIcon from '@mui/icons-material/Rocket';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactUS from "@components/ContactUS"
export default function About() {
  return (
    <div className='mb-10 w-screen padded2'>
      <div className="aboutbox">
        <div>
          <div>
            <p className='text-5xl justice textnew mb-6 text-sky-500'>About Us</p>
            <p className='text-white mb-1 textnew width-full text-justify font-semibold'>Welcome to GradUp, the premier platform connecting talented students with top-tier companies. GradUp is a Government of India recognized startup. Our platform
              provides students with a unique opportunity to unlock
              their potential by finding internships tailored to their
              individual skill sets and interests. We solve the problem
              of finding quality internships by offering a user-friendly
              and comprehensive platform that connects students
              with companies across India.
            </p>
            <br/>
            <li className='text-white mb-1 textnew width-full text-justify'>Looking for talented and motivated interns who can add value to your startup? Want to save time and resources in finding and training the best candidates? Want to contribute to the skill development and career growth of India’s next generation of innovators and leaders?</li>
             <br/>
            <li className='text-white mb-1 textnew width-full text-justify'>Partner with GradUp, the platform that connects you with the best students from engineering as well as business schools who are eager to learn from you. Post your internship requirements and we'll help you select the students who match your interests, skills, and goals. Get instant access to top-quality students who are productive from the start. Scale up or down your workforce based on your needs, ensuring an efficient and high-yielding workforce.</li>
            <br/>
            <li className='text-white mb-1 textnew width-full text-justify'>Our platform has helped multiple companies to find and nurture the best interns who can contribute to their growth and success. We also provide you with tools and support to manage your internships effectively. We believe that internships are a win-win situation for both businesses and students, but you also need to find the right match. Partner with us today and discover the benefits of working with GradUp.</li>
          </div>
        </div>
        <div className='yes grid grid-cols-2 ml-12 my-auto gap-2'>
          <img width="1300" src="/assets/images/about5.png" alt="company"></img>
          <img width="1300" src="/assets/images/about2.png" alt="company"></img>
          <img width="1300" src="/assets/images/about4.png" alt="company"></img>
          <img className='mart' width="1300" src="/assets/images/about3.png" alt="company"></img>
        </div>
      </div>
      <div className={styles.values}>
        <h1 className={styles.heading1}><strong><u>Our Core Values</u></strong></h1>
        <h1 className={styles.sizing}>Be Different From Others</h1>
        <div className={styles.core}>
          <div className={styles.contain1}>
            <RocketIcon sx={{ color: "deepskyblue", fontSize: "70px" }} fontSize="large" />
            <p className="text-sky-400 text-center text-2xl mb-4 font-semibold">Our Story</p>
            <p className="text-center text-white">GradUp roots go back to 2017,since then, hundreds of students have found their dream companies, hence fulfilling our promises to transform dreams to reality</p>
          </div>
          <div className={styles.contain2}>
            <Diversity2Icon sx={{ color: "deepskyblue", fontSize: "60px" }} />
            <p className="text-sky-400 text-center text-2xl mb-4 font-semibold">Our Solution</p>
            <p className="text-center text-white">A comprehensive platform with user friendly interface,solving for internships,profile matching and simplifying the recruitment process.</p>
          </div>
          <div className={styles.contain3}>
            <TravelExploreIcon sx={{ color: "deepskyblue", fontSize: "60px" }} />
            <p className="text-sky-400 text-2xl text-center mb-4 font-semibold">Our Vision</p>
            <p className="text-center text-white">We want to make the Youth of India more employable and future ready.</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl underline underline-offset-8 decoration-white text mt-8 text-blue-500">Meet Our Founder</h1>
      <div className="founderbox">
        <div className='flex flex-col'>
        <img className="founderimg" width="400" src="/assets/images/NEW PICS.jpg" alt="founder"></img>
        <span className="flex gap-10 ml-8 mt-10">
              <a className="text-white my-auto" target="_blank" href="https://www.facebook.com/GradUp.in">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.instagram.com/gradup.in/">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.linkedin.com/company/gradup3/">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-7 h-7" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a href="https://www.threads.net/@tanmaysinghrajput3" className="ml-3 text-white my-auto" target="_blank">
                <img width="40" src="/assets/images/threadsbg.png"></img>
              </a>
            </span>
         </div>
        <div className="p-6 mt-7 textnew text-justify">
          <p className="text-white  mb-2" >Mr. Tanmay is a trailblazer, who is a 25 year young and budding entrepreneur whose meteoric rise from humble beginnings to becoming a well-known entrepreneur has been an inspiration to the students of the country. Failing consistently, being unable to face their fears, He couldn’t do what they wished for and unfortunately being at the lowest was their thing. Starting from scratch, he embraced the challenges that awaited him, transforming adversity into opportunity.  Now, this young and budding entrepreneur has also received the award for India’s Top 100 Emerging Entrepreneurs-2023 by Fox Story India! They had a trailblazing Journey from Ground Zero to Remarkable Heights.</p>
          {/* <p className="text-white  mb-2">Coming from a family of educationists, our founder Mr Tanmay had the chance to interact with many students and parents. His interaction with the students helped him understand the most common problems faced by them  in their career initial phase of career after completing their degree. To provide a solution to this, GradUp (formerly, Attitude matterZ) was born.</p> */}
          <p className="text-white  mb-2">Tanmay is alumnus of NIT-IIM. He holds an Engineering degree, MBA degree and an Advanced degree in Digital Marketing & Entrepreneurship. Currently, He is pursuing Executive entrepreneurship Program at The Wharton School, University of Pennsylvania.</p>
          {/* <p className="text-white  mb-2">He has worked so hard despite facing several difficulties & being unvalued, still they manage to collaborate with some esteemed companies like PhonePe, Genpact, Toyota, LiuGong, Tata Steel Aashiyana, and PepsiCo (VBL) and has rich experience in framing digital marketing strategies for MSME clients.</p> */}
          <p className="text-white  mb-2">He is rightly known for his networking, down to earth nature and leadership skills. He is presently a member of the International Youth Council, United Nations, and has been elected as the General Secretary and Vice President at various clubs and societies. Before GradUp (formerly Attitude matterZ), Tanmay co-founded a startup namely Business garage which aimed at providing digital marketing strategies to MSMEs.</p>
          {/* <p className='text-white  mb-2'>Tanmay is also a guest speaker, and he has been invited as a guest speaker by many premier institutions of India.</p> */}
          <p className="text-white  mb-2"><em>Tanmay has a vision to nurture the youth of “BHARAT” to be industry and future ready.</em></p>
          <br />
        </div>
      </div>
      {/* <img className='mx-auto mt-16 mb-16' src="/assets/images/certify.png" alt="certificate"></img> */}
      <p className='text-white text-center mb-6 textnew text-3xl mt-5'>Founder's Message</p>
      <p className='text-black text-xl textnew mt-1 widthsetter m-auto bg-white rounded-2xl p-10'>" Thank you for considering GradUp as your go-to platform for internships. We're confident that our
        comprehensive features and flexible pricing model make us the best choice for students and businesses alike.
        To take advantage of our platform, simply sign up for free and start exploring the many opportunities available
        to you. If you have any questions or concerns, our dedicated support team is always available to help.
        Join GradUp today and transform your dreams in the world of internships. "</p>
      {/* <p className="text-white text-3xl underline decoration-yellow-300 underline-offset-8 text-center mt-12 mb-9">Recognized By :-</p>
      <div className='flex flex-wrap justify-center gapmedia'>
      <img className=' mb-16' width="300" src="/assets/images/dept.jpg"></img>
      <img className=' mb-16' width="300" src="/assets/images/startup.jpg"></img>
      </div> */}
      {/* <div className='flex flex-wrap justify-center gapmedia'>
      <img className=' mb-16' width="200" src="/assets/achievements/media1.png"></img>
      <img className=' mb-16' width="200" src="/assets/achievements/media2.png"></img>
      <img className=' mb-16' width="200" src="/assets/achievements/media6.png"></img>
      <img className=' mb-16' width="200" src="/assets/achievements/media4.png"></img>
      <img className=' mb-16' width="200" src="/assets/achievements/media5.png"></img>
      <img className=' mb-16' width="200" src="/assets/achievements/media3.png"></img>
    </div> */}
    </div>
  )
}