import React from "react";


export default function Download(){
    return(
        <div style={{backgroundColor:"cornflowerblue"}} className=" w-screen pt-10 flex items-center justify-evenly">
            <img className="mb-6" width="500" src="/assets/images/mobileapp.png" alt="mobile-app"></img>
            <div className="flex mc-8 flex-col">
                <p className="textform text-left ml-4 text-lg text-white">Apply for Jobs and Internships, enhance your careers by our upskilling <br/> courses & trainings modules and do much more from the gadget <br/> you adore - <span className="font-bold">Your Smartphone</span> </p>
                <img width="220" className="-mt-6" src="/assets/images/plays.png" alt="download"></img>
            </div>
        </div>
    )
}