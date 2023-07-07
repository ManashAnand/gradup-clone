import styles from 'styles/Page.module.css'
export default function Cancellation() {
  return (
    <div className="{styles.container} w-screen my-10">
      <p className="text-5xl font-semibold textnew mt-6 animate-charcter text-center">REFUND & CANCELLATION POLICY</p>
      <div className={styles.content}>
        <img className="float-right ml-10" src="/assets/icons/logo.png" alt="logo" height="60" width="65"></img>
        <p className="text-md mb-2 textnew text-justify text-white">For individual training programs offered on GradUp Trainings, except for Internet of Things training, a user may request a refund anytime before their chosen batch commencement date. A transaction processing charge of 20% of the training fee paid by the user will be deducted and the remaining will be refunded within 15 working days (Monday to Friday, excluding national holidays) of the refund request being raised by the user. </p>
        <p className="text-md mb-2 textnew text-justify text-white">However, once the user has made the payment and accessed the training content, no refund would be permitted. No refund will be provided for the Internet of Things training offered on GradUp Trainings once the payment has been made.</p>
        <p className="text-md mb-2 textnew text-justify text-white">If a user is enrolled in a training that has been withdrawn by GradUp Trainings, he/she will be entitled to 100% refund within 15 working days (Monday to Friday, excluding national holidays) of the training program being withdrawn and the refund would be initiated by GradUp Trainings.</p>
        <p className="text-md mb-2 textnew text-justify text-white">For Gradup Skill Pass, no refund/cancellation would be permitted after payment.</p>
        <p className="text-md mb-2 textnew text-justify text-white">For GradUp  Student Premium, no refund/cancellation would be permitted after payment.</p>
        <p className="text-md mb-2 textnew text-justify text-white">For Placement Guarantee courses, no refund/cancellation would be permitted after payment. To claim a refund under the placement guarantee, please refer to the Guaranteed Job/Internship Program in the FAQ of the Placement Guarantee courses.</p>
        <p className="text-md mb-2 textnew text-justify text-white">For individual fresher job posts and premium internship upgrades, an employer may request a 100% refund within 30 days of their purchase, if they are not able to hire even 1 candidate. The entire amount will be refunded within 15 working days (Monday to Friday, excluding national holidays) of refund request being raised by the user. </p>
        <p className="text-md mb-1 textnew text-justify text-white">Please note:</p>
        <p className="text-md mb-2 textnew text-justify text-white">In case of violation of any Terms and Conditions, GradUp  reserves the right to refuse or cancel the refund request.</p>
        <p className="text-md mb-2 textnew text-justify text-white">Refund isn't available for Premium Plan and bulk plans.</p>
        <p className="text-md mb-2 textnew text-justify text-white">For advertisers who advertise their products, offerings, and services on different GradUp  channels (Website, Newsletter, Facebook page, other social media channels etc.), no refund/cancellation would be permitted after the advertising campaign has begun or the payment is received, whichever is earlier. If an advertising campaign is cancelled by GradUp due to its internal policies, the advertiser would be entitled to a refund on a pro-rata basis (after deducting the amount for the deliverables already served)</p>
        <p className="text-md mb-2 textnew text-justify text-white">Not with-standing this policy, any specific terms and conditions mentioned on individual product & service page, and/or as agreed with a user before/during/after the transaction, will override the terms and conditions mentioned here in case of a conflict.</p>
        <p className="text-md mb-2 textnew text-justify text-white">We may make changes to our products & services, and associated terms & conditions (including terms and conditions on refund and cancellation), from time to time. You are advised to refer to our latest terms and conditions on this page and associated product/service specific terms and conditions page before making a purchase.</p>
      </div>
    </div>
  )
}
