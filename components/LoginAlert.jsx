import React from "react"
import {useState,useEffect} from "react"
import { signIn} from "next-auth/react";
export default function LoginAlert(){
    return(
        <div className="my-16 w-full pb-2 bg-white">
            <img className="m-auto" width="600" src="/assets/images/welcome.png" alt="Welcome"></img>
            <p className="text text-center font-semibold text-black my-2 text-3xl">Hello Folks!</p>
            {<div className="text-center my-10 mb-14"><a href=""><button className="bg-blue-700 text-white px-10 py-2 rounded-md" onClick={() => {
                signIn();
              }}>Signup into your Account</button></a></div>}
        </div>
    )
}