"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { Session } from 'next-auth'; 
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const HomeFirstComponent = () => {

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [current,setCurrent]=useState(0)
  useEffect(() => {
    const setUpProviders = async()=> {
        const response = await getProviders();
        setProviders(response);
    }
    setUpProviders();
  }, []);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     current<4?setCurrent(current+1):setCurrent(0)
  //   },3500)
  // },[current])
  // let arr=["/assets/images/home1.png","/assets/images/home2.png","/assets/images/home3.png","/assets/images/home4.png","/assets/images/home5.png"]
  return (
    <section className='w-screen flex justify-between headingbox'>
      {/* <video id="filter" autoPlay loop muted>
        <source src="/assets/images/backvid.mp4" type="video/mp4"></source>
      </video> */}
      <div className='filter'></div>
      <div className="mb-6 z-10 flex flex-col justify-center">
        {/* <p className="text-left text-3xl text-white mb-3">Welcome to <span className='animate-charcter'>GradUp</span></p> */}
        <div style={{overflow:"hidden"}} className='text-2xl sm:text-5xl text-white textnew text-left'>
            <p className=''>Connecting talent to</p>
            <p style={{overflow:"hidden"}} className=''>Explore new <span className='animate-charcter font-semibold'>Opportunities</span></p>
        </div>
        <div className=' text-left text-white textnew'>
            <h1 className='mt-6 sm:text-xl mb-6'>The ultimate platform for college-to-career success, offering skill-suited internships, jobs, upskilling courses, and expert guidance all in one place.</h1> 
        </div>
        {/* <Link href='/courses' className="area">
              <button className='rounded-2xl py-1 px-6 border-2 textnew border-sky-500 bg-white text-sky-700 mt-6 mb-10 hover:bg-sky-400 hover:text-white hover:border-white' onClick={() =>
                signIn()}>Sign In to Explore</button>
        </Link> */}
        {session?.user.id ? <></>
        :<>
          {/* {providers && */}

              {/* // Object.values(providers).map((provider) => ( */}
              <Link href="/loginuser">
                <button 
                  className='animated-button1 float-left rounded-2xl py-1 px-6 textnew'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  Sign In for more opportunities
                </button>
                </Link>
              {/* // } */}
        </>}
        
        </div> 
        <div className=' hideimage z-10 grid grid-cols-2 my-auto gap-4'>
          <img width="240" src="/assets/images/gif1.gif" alt="company"></img>
          <img width="240" src="/assets/images/gif5.gif" alt="company"></img>
          <img width="240" src="/assets/images/gif3.gif" alt="company"></img>
          <img width="240" src="/assets/images/gif4.gif" alt="company"></img>
        </div>
    </section>
  )
}

export default HomeFirstComponent