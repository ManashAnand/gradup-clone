import styles from 'styles/Page.module.css'

export default function Partner() {
  return (
    <div>
      <div className={styles.videos}>
        <div className={styles.video1}>
          <iframe className={styles.frame1} src="https://www.youtube.com/embed/UrRyWUOmNJw?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className={styles.video2}>
          <iframe className={styles.frame2} src="https://www.youtube.com/embed/KVvNAZtxf_k?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      </div>
      <div className={styles.box}>
        <div>
          <h1 className={styles.heading}>About Attitude matterZ</h1>
          <p className={styles.partnerpara}>Attitude matterZ is a unit of 8TUDEM TECH PRIVATE LIMITED. We are a Government of India recognized Start-up. We are dedicated towards serving students to land up to their dream career by assisting them via our placement preparation modules, supporting working professionals via our upskilling courses and partnering with companies to provide digital marketing services. We extensively conduct workshops-seminars and webinars for placement preparation at premier institutes across India. All our workshops are conducted by IIM/ISB/XLRI/MDI/FMS/IIFT/IMT Alumni only. Our mentors work at top-tier firms including Google, Facebook, Amazon, BCG, Goldman Sachs, Big 4, TATAs and many more.</p>
          <button className={styles.btn1}><a className="link" href="brochure.pdf" download >Download Brochure</a></button>
        </div>
        <img className={styles.image} src="/assets/images/book.png" alt="book"></img>
      </div>
      <div className={styles.box}>
        <img className={styles.image1} src="/assets/images/ypay.png" alt="ypay"></img>
        <div>
          <h1 className={styles.heading}>About YPAY</h1>
          <p className={styles.partnerpara}>YPAY is a prepaid smart card that offers Indian teens and young adults the option to make payments independently. It also provides parents and schools with a secure and monitored means of financial transactions. YPAY, through its prepaid cards available on its app, makes it convenient for teenagers to make both online and offline payments. The app enables kids to learn money management and earn points along with attractive cashback and discounts from more than 300 brands. Fintech industry in India is growing at a compound annual growth rate of 20%, valued at more than $31 billion. With an ambition to own a large portion of the entire fintech pie, YPAY aims to provide a diversified bouquet of products and services to the Indian youth and professionals.</p>
          <button className={styles.btn1}><a className="link" target="_blank" href="https://ypaycard.com/">About YPAY</a></button>
        </div>
      </div>
      <div className={styles.box1}>
        <div className={styles.task1}>
          <div className={styles.circle}>1</div>
          The fellowship programme offers rich and comprehensive training on sales, financial products, consultative B2B selling and practical learning experience via a live project where the batch participants will undergo real-life exposure to B2B consultations and deal closure.</div>
        <div className={styles.task2}>
          <div className={styles.circle}>2</div>
          The Batch would be under the closed supervision of founders of both the companies and would also get a chance to interact with 4-5 Industry Leaders including CXOs of top companies across the globe.</div>
        <div className={styles.task3}>
          <div className={styles.circle}>3</div>
          At the end of the programme, depending on the performance of the enrolled participants, YPay and Attitude matterZ shall offer PPIs (Pre-placement Interviews) for various positions in Engineering, Finance and Marketing. The CTC details shall be on a mutual agreement between the company founders and the Placement records of the college.</div>
        <div className={styles.task4}>
          <div className={styles.circle}>4</div>
          Attitude matterZ would also sign an MOU with the college for Interview preparation, training and placement related support to the colleges depending on the programme effectiveness, interest level of the students, placement committee and performance of the enrolled candidates.</div>
      </div>
    </div>
  )
}
