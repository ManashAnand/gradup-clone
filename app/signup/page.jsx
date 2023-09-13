'use client';

import React,{useState} from 'react'
import Link from "next/link";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState("")
  const [Cpassword,setCPassword] = useState("")
  const [name,setName] = useState("")

  const handleSignup = async (e) => {
      e.preventDefault()
      // console.log(email+" "+password+" "+Cpassword)
      if(Cpassword != password){
        alert("Password are not matching")
      } else {
        try {
          const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password,name }),
          });
    
          if (response.status === 200) {
            console.log('Signup successful! Check your email for verification.');
          } else {
            console.log('Signup failed. Please try again.');
          }
        } catch (error) {
          console.log(error)
          console.log(`Signup failed. Please try again. ${error}` );
        }
      }

  }

  return (
    <>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full sm:w-[80%] md:w-[66%]">
  <Link href="/" className="flex items-center mb-6 text-2xl cursor-pointer hover:text-sky-500 font-semibold text-gray-900 dark:text-white">
    Gradup
  </Link>
  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-4"> 
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create account
      </h1>
      <form className="space-y-4 md:space-y- min-h-[20rem]">
        <div >
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  style={{display:"block !important"}}>Your name</label>
          <input
            type="text"
            name="text"
            id="text"
            className="block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name"
            style={{display:"block !important"}}
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />
        </div>
        <div >
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  style={{display:"block !important"}}>Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="xyz@gmail.com"
            style={{display:"block !important"}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  style={{display:"block !important"}}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{display:"block !important"}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  style={{display:"block !important"}}>Confirm password</label>
          <input
            type="confirm-password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            className="block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{display:"block !important"}}
            value={Cpassword}
            onChange={(e) => setCPassword(e.target.value)}

          />
        </div>
        <button
        //  onClick={() => { signIn("Credentials",{
        //   email,password,redirect:false   
        // }) }}
        onClick={handleSignup}
        
         className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account? <Link href="/loginuser" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</Link>
        </p>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default SignUp
