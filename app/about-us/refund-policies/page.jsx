import styles from 'styles/Page.module.css'
export default function Refund() {
  return (
    <div className="{styles.container} w-screen my-10">
      <div className={styles.content}>
        <img className="float-right ml-10" src="/assets/icons/logo.png" alt="logo" height="60" width="65"></img>
        <p className="mb-4 text-md text-white textnew">Thanks for your interest in 8Tudem Tech Pvt. Ltd.. We ensure to provide an excellent experience and learning to all our users. As with any online purchase experience, some terms and conditions govern the Refund Policy. When you purchase a program or avail an offering on 8Tudem Tech Pvt. Ltd., you agree to our Terms & Conditions and Refund policy.</p>
      </div>
      <p className="{styles.head} text-white text-center text-2xl">Our Refund Policy is as follows-</p>
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
