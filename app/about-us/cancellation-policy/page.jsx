
import styles from 'styles/Page.module.css'
export default function Cancellation() {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0047ab" fill-opacity="0.9" d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,144C840,160,960,224,1080,256C1200,288,1320,288,1380,288L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className={styles.content}>
        <img className="float-right ml-10" src="/assets/images/att.png" alt="logo" height="60" width="65"></img>
        <p className="text-white text-lg">If for any reason and at any time the Student withdraws from the Attitude matterZ Program, then the Student shall be under an obligation to provide the Company and the Company Agent with a prior written notice of 10 (ten) days’ notice of such withdrawal from the Attitude matterZ program and the effective date of such withdrawal thereto.</p>
        <br />
        <p className="text-white text-lg">The following conditions shall apply in case of withdrawal by the Student from the Attitude matterZ Program within 3 (three) days of commencement of the Attitude matterZ program, the student is liable for cost of training and support received, and no refund of tuition fee shall be processed. If the Student drops out after 10 (ten) days after commencement of the Attitude matterZ Program, then, in such case, the Student shall be liable to fulfil all its payment obligations and other terms and conditions as set out in this Agreement. For avoidance of doubt, it is hereby clarified that the Payment Term shall commence from the date the Student leaves the Attitude matterZ Program.</p>
      </div>
     </div>
   )
}
