import React from "react";


export default function Download(){
    return(
        <div style={{background:"linear-gradient(260deg, rgba(126, 227, 90, 0.94) 0%, rgba(4, 78, 131, 0.98) 35.32%, rgba(4, 78, 131, 0.97) 20.79%, rgba(4, 78, 131, 0.96) 27.13%, rgba(4, 78, 131, 0.95) 60.90%, rgba(126, 227, 90, 0.94) 99.86%)"}}
className="w-screen p-10 flex flex-col items-center">
            <img className="mb-6" width="500" src="/assets/images/mobileapp.png" alt="mobile-app"></img>
            <p className="mobilepara mb-5 text-center textnew text-md text-white">Apply for Jobs and Internships, Participate in Hackathons and do much more from the gadget you adore- Your Smartphone</p>
            <a href=""><img src="/assets/images/playstore.png" alt="download"></img></a>
        </div>
    )
}