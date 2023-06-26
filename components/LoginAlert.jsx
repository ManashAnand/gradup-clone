import React from "react"
import {useState,useEffect} from "react"
import { signIn} from "next-auth/react";
export default function LoginAlert(){
    return(
        <div className="my-16 w-full bg-white">
            <img className="m-auto" width="600" src="/assets/images/welcome.png" alt="Welcome"></img>
            <p className="text text-center font-semibold text-black my-2 text-3xl">Hello Folks!</p>
            <p className="textnew text-center text-gray-900 text-xl mt-5">Please login or signup to continue.</p>
            <p className="textnew text-center text-gray-700 mt-8">Check out various Jobs and Internship Opportunities.</p>
            <p className="textnew text-center text-gray-700">Challenge yourself with the Hackathon challenges.</p>
            <p className="textnew text-center text-gray-700">Upgrade yourself with different Courses available and practice MCQ's to check your progress.</p>
            {<div className="text-center my-10 mb-14"><a href=""><button className="bg-blue-700 text-white px-10 py-2 rounded-md" onClick={() => {
                signIn();
              }}>Signup into your Account</button></a></div>}
        </div>
    )
}