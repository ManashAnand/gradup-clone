import React from "react";


export default function Download(){
    return(
        <div style={{backgroundColor:"cornflowerblue"}} className=" w-screen p-10 flex flex-col items-center">
            <img className="mb-6" width="500" src="/assets/images/mobileapp.png" alt="mobile-app"></img>
            <p className="mobilepara mb-5 text-center textform text-2xl text-white">Apply for Jobs and Internships, participate in Hackathons and do much more from the gadget you adore- Your Smartphone</p>
            <a href=""><img src="/assets/images/playstore.png" alt="download"></img></a>
        </div>
    )
}