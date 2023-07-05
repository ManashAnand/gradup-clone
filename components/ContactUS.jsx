"use-client"
import React from "react"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
export default function Contact(){
  return(
//     <div class="landing_page w-screen">
//     <div class="responsive-container-block big-container">
//     <img class="bg-img" id="iq5bf" src="/assets/images/conback.png"/>
//     <div class="responsive-container-block container">
//       <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
//         <div class="content-box">
//           <p class="text-blk section-head">
//             Get in touch with us!
//           </p>
//           <p class="text-blk section-subhead">
//             Gradup is a platform aimed at nurturing students to be industry ready and future ready.
//           </p>
//           <div class="icons-container">
//             <a class="share-icon" href="">
//               <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
//             </a>
//             <a class="share-icon" href="">
//               <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
//             </a>
//             <a class="share-icon" href="">
//               <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/>
//             </a>
//             <a class="share-icon" href="">
//               <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
//         <form class="form-box">
//           <div class="container-block form-wrapper">
//             <p class="text-blk contactus-head">
//               <a class="link" href="">
//               </a>
//               Contact Us
//             </p>
//             <p class="text-blk contactus-subhead">
//               We will get back to you in 24 hours
//             </p>
//             <div class="responsive-container-block">
//               <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-7">
//                 <input type="text" class="input" id="ijowk-7" name="Name" placeholder="Name" required/>
//               </div>
//               <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 email" id="ityct">
//                 <input type="email" class="input" id="ipmgh-7" name="Email" placeholder="Email" required/>
//               </div>
//               <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                 <input type="text" class="input" id="imgis-6" name="PhoneNumber" placeholder="10 Digit Mobile Number" required/>
//               </div>
//               <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-7">
//                 <textarea rows="3" aria-placeholder="Type message here" class="textinput" id="i5vyy-7" placeholder="Type message here" required></textarea>
//               </div>
//             </div>
//             <button class="submit-btn">
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//       <div className="contactdetails text-white m-auto">
//          <div className="mb-6"><PhoneAndroidIcon color="primary"/> +91- 9771040702</div>
//          <div className="mb-6"><EmailIcon color="primary"/> info@attitudematterz.com <br/><p className="ml-7">attitudematterz.ops@gmail.com</p></div>
//          <div><BusinessIcon color="primary"/> UG Floor, Regus, TOWER-2,<br/><p className="ml-7">Assotech Business Cresterra</p><br/><p className="ml-7 -mt-5">Plot No.22, Sector 135, Noida,</p><br/><p className="ml-7 -mt-5">Uttar Pradesh 201301</p></div>
//       </div>
//     </div>
//   </div>
// </div>
<div class="containercontact my-12">
  <div class="form-container">
    <div class="left-container">
      <div class="left-inner-container">
      <h2 className="h2contact textnew">Let's Chat</h2>
      <p>Whether you have a question,or simply want to connect.</p>
      <p>Feel free to send us a message.</p>
      <div className="text-white mt-10">
      <div className="mb-4 textnew flex flex-col text-sm"><PhoneAndroidIcon sx={{margin:"auto"}} color="white" fontSize="small"/>+91- 7428376300</div>
      <hr/>
      <div className="mt-4 textnew mb-3 flex flex-col text-sm"><EmailIcon sx={{margin:"auto"}} color="white" fontSize="small"/>info@attitudematterz.com <br/>attitudematterz.ops@gmail.com</div>
      <hr/>
      <div className="text-sm textnew mt-4 flex flex-col"><BusinessIcon sx={{margin:"auto"}} color="white" fontSize="small"/> UG Floor, Regus, TOWER-2,<br/>Assotech Business Cresterra<br/>Plot No.22, Sector 135, Noida,<br/>Uttar Pradesh 201301</div>
      </div>
    </div>
      </div>
    <div class="right-container">
      <div class="right-inner-container">
        <form action="#">
			<h2 class="lg-view h2contact">Contact Us</h2>
      <input className="inputcontact" type="text" placeholder="Name *" required  />
      <input className="inputcontact" type="email" placeholder="Email *" required />
			<input className="inputcontact" type="phone" placeholder="Phone *" required/>
          <textarea className="textareacontact" rows="4" placeholder="Message"></textarea>
			<button className="buttoncontact">Submit</button>
		</form>
      </div>
    </div>
  </div>
</div>
  )
}
