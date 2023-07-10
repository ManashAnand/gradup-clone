"use client"
import React from "react"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
export default function Contact() {
    return (
        <div class="containercontact my-24">
            <div class="form-container">
                <div class="left-container">
                    <div class="left-inner-container">
                        <h2 className="h2contact textnew mt-5 underline decoration-2 decoration-white underline-offset-4">Let's Chat</h2>
                        <div className="text-white mt-6">
                            <div className="mb-2 textnew flex flex-col text-sm"><PhoneAndroidIcon sx={{ margin: "auto" }} color="white" fontSize="small" />+91-7428376300</div>
                            <hr />
                            <div className="mt-2 textnew mb-2 flex flex-col text-sm"><EmailIcon sx={{ margin: "auto" }} color="white" fontSize="small" />info@gradup.in </div>
                            <hr />
                            <div className="text-sm textnew my-2 flex flex-col"><BusinessIcon sx={{ margin: "auto" }} color="white" fontSize="small" /><div className="decoration-white underline underline-offset-4 mb-2">Head Office</div>UG Floor, Regus, TOWER-2,<br />Assotech Business Cresterra Plot<br />No.22, Sector 135, Noida, <br />Uttar Pradesh, 201301</div>
                            <hr />
                            <div className="text-sm textnew my-2 flex flex-col"><BusinessIcon sx={{ margin: "auto" }} color="white" fontSize="small" /><div className="decoration-white underline underline-offset-4 mb-2">Branch Office</div>4 Fairlie Place, HMP House,<br />1st Floor, Room No 113<br />Kolkata, 700001</div>
                        </div>
                    </div>
                </div>
                <div class="right-container">
                    <div class="right-inner-container">

                    </div>
                </div>
            </div>
            <p className="text-center text-green-600 mt-6 text-2xl">Follow Us</p>
            <span className="flex justify-center my-5">
              <a className="text-white my-auto" target="_blank" href="https://www.facebook.com/GradUp.in">
                <svg fill="lime" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" href="https://twitter.com/gradup333" target="_blank">
                <svg fill="lime" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.instagram.com/gradup.in/">
                <svg fill="lime" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.linkedin.com/company/gradup3/">
                <svg fill="lime" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-7 h-7" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.youtube.com/@gradup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="lime" className="bi bi-youtube w-8 h-8" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
            </span>
        </div>
    )
}