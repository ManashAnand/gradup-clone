import styles from 'styles/Page.module.css'
import Head from 'next/head'
export default function About() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"></link>
      </Head>
      <div className={styles.box}>
        <img className={styles.groupimg4} src="/assets/images/employee.png" alt="group"></img>
        <div>
          <h1 className={styles.heading}>--Attitude matterZ</h1>
          <h1 className={styles.subhead}>About Company</h1>
          <div className="flex -mt-2">
            <img className={styles.logo} src="att.png" height="70" width="70" aly="logo"></img>
            <p className="text-white text-xl mt-4 w-3/5 pb-6">We are a Government of India-recognized Startup.</p>
          </div>
          <p className={styles.partnerpara}><span className={styles.light}><strong>Attitude matterZ</strong></span> is a platform that was founded with the aim of seamlessly matching individual expertise with the right opportunities. We empower talented students by providing them with relevant experience at fast-growing startups based on competencies and aspirations. These opportunities have a significant impact on their career success and help them become their best self. On the other hand, startups get instant access to top-quality students with guaranteed productivity from the very beginning. We help them to scale up/down based on their needs, thus ensuring an efficient and high-yielding workforce. Our advanced course includes Power BI, Artificial Intelligence, Robotics, Digital Marketing, and many more. Our dedicated modules and one-to-one connections with students in their placement preparation journey ensure that these aspirants get landed up to their dream jobs and dream profiles. In this information age, students do have a plethora of disorganized preparatory materials available online but systematic and step-by-step preparation and upskilling is what we plan to provide to our students. We do believe that there is practically no end to learning- but given the time constraints and the competition in this generation- you must learn and prioritize only what is the need of the hour. Come and enjoy being a part of our successful community. The CIN of the company is <span className={styles.light}>U80903JH2022PTC019112</span> and GST No. is <span className={styles.light}>20AACCZ0257F1ZS</span>.</p>
          <button className={styles.btn1}><a href="">Contact Us</a></button>
        </div>
      </div>
      <div className={styles.values}>
        <h1 className={styles.heading1}><strong><u>Our Business</u></strong></h1>
        <h1 className={styles.sizing}>Be Different From Others</h1>
        <div className={styles.core}>
          <div className={styles.contain}>
            <i class='fa mb-4 text-blue-900 fa-4x fa-rocket'></i>
            <p className="text-blue-900 text-2xl mb-4 font-semibold">Our Mission</p>
            <p className="text-center">To be a one-stop solution for all upskilling and placement preparation needs.</p>
          </div>
          <div className={styles.contain}>
            <i class='fa mb-4 text-blue-900 fa-4x fa-heart'></i>
            <p className="text-blue-900 text-2xl mb-4 font-semibold">Our Core Values</p>
            <li className={styles.list1}><i class='fa text-blue-900 mr-2 fa-check'></i>Integrity</li>
            <li className={styles.list1}><i class='fa text-blue-900 mr-2 fa-check'></i>Accountability</li>
            <li className={styles.list1}><i class='fa text-blue-900 mr-2 fa-check'></i>Teamwork</li>
            <li className={styles.list1}><i class='fa text-blue-900 mr-2 fa-check'></i>Respect</li>
            <li className={styles.list1}><i class='fa text-blue-900 mr-2 fa-check'></i>Honesty</li>
          </div>
          <div className={styles.contain}>
            <i class='fa mb-4 text-blue-900 fa-4x fa-binoculars'></i>
            <p className="text-blue-900 text-2xl mb-4 font-semibold">Our Vision</p>
            <p className="text-center">We want to make the Youth of India more employable and future ready.</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.founderimg} src="/assets/images/founder.png" alt="founder"></img>
        <div>
          <h1 className={styles.headingfounder}>Meet Our Founder</h1>
          <p className={styles.para}>Mr. Tanmay is a young and budding entrepreneur who has received the award for India’s Top 100 Emerging Entrepreneurs-2023 by Fox Story India!</p>
          <p className={styles.para}>Tanmay has been also featured in many newspapers like Hindustan Times, Hindustan, Outlook, Dainik Bhaskar, Dainik Jagran & many more…</p>
          <p className={styles.para}>Tanmay believes in continuous learning for everyone including himself. Currently, Tanmay has been enrolled in Executive Digital Marketing Program at The Wharton School, University of Pennsylvania.</p>
          <p className={styles.para}>Tanmay is alumnus of NIT-IIM. He holds an Engineering degree, MBA degree and an Advanced degree in Digital Marketing & Entrepreneurship. Tanmay has worked and collaborated with esteemed companies like PhonePe, Genpact, Toyota, LiuGong, Tata Steel Aashiyana, and PepsiCo (VBL) and has rich experience in framing digital marketing strategies for MSME clients.</p>
          <p className={styles.para}>Tanmay is rightly known for his networking and leadership skills. He is presently a member of the International Youth Council, United Nations, and has been elected as the General Secretary and Vice President at various clubs and societies. Before Attitude matterZ, Tanmay co-founded a startup namely Business garage which aimed at providing digital marketing strategies to MSMEs.</p>            <p className={styles.para}><em>Tanmay is also a guest speaker, and he has been invited as a guest speaker by many premier institutions of India.</em></p>
          <p className={styles.para}><em>Tanmay has a vision to nurture the youth of “BHARAT” to be industry- and future-ready.</em></p>
          <p className={styles.para}><em>Tanmay’s Director Identification No is  09687950.</em></p>
          <br />
        </div>
      </div>
    </div>
  )
}
