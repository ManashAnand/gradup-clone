import styles from 'styles/Page.module.css'
export default function Refund() {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0369a1" fill-opacity="0.9" d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,144C840,160,960,224,1080,256C1200,288,1320,288,1380,288L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className={styles.content}>
        <img className="float-right ml-10" src="/assets/icons/logo.png" alt="logo" height="60" width="65"></img>
        <p className="mb-4 text-lg">Thanks for your interest in 8Tudem Tech Pvt. Ltd.. We ensure to provide an excellent experience and learning to all our users. As with any online purchase experience, some terms and conditions govern the Refund Policy. When you purchase a program or avail an offering on 8Tudem Tech Pvt. Ltd., you agree to our Terms & Conditions and Refund policy.</p>
      </div>
      <p className={styles.head}>Our Refund Policy is as follows-</p>
      <div className={styles.grid}>
        <div className={styles.pol1}>
          Once you purchase and make the required or partial payment, there will not be any changes or modifications to the same, nor will there be any refund.</div>
        <div className={styles.pol2}>

          8Tudem Tech Pvt. Ltd. reserves the right to postpone/cancel the course, change the structure of the course or change the list of speakers. If 8Tudem Tech Pvt. Ltd. cancels the entire course, we’ll refund 100% of the course fees to the Subscriber.</div>
        <div className={styles.pol3}>

          Once the program begins, we will initiate no refund if the course timeline is extended.</div>
        <div className={styles.pol4}>

          We will issue no refund if the course commencement date is changed.</div>
        <div className={styles.pol5}>

          No refunds or credits will be available for participants who fail to attend the course.</div>
        <div className={styles.pol6}>

          There will be no refunds if the structure/content of the course is altered.</div>
        <div className={styles.pol7}>
          8Tudem Tech Pvt. Ltd. reserves the right to revise the terms & conditions of this policy without any prior notice.</div>
        <div className={styles.pol8}>

          The course is non-transferable.</div>
        <div className={styles.pol9}>

          The course cannot be transferred to others in case you are unable to take the course under any circumstances.</div>
      </div>
    </div>
  )
}
