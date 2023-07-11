"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const HomeFirstComponent = () => {

  const [providers, setProviders] = useState(null);
  const [current,setCurrent]=useState(0)
  useEffect(() => {
    const setUpProviders = async()=> {
        const response = await getProviders();
        setProviders(response);
    }
    setUpProviders();
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
      current<4?setCurrent(current+1):setCurrent(0)
    },1500)
  },[current])
  let arr=["/assets/images/home1.png","/assets/images/home2.png","/assets/images/home3.png","/assets/images/home4.png","/assets/images/home5.png"]
  return (
    <section className='w-screen flex justify-around headingbox'>
      <div className="my-12 flex flex-col justify-center">
        <p className="text text-2xl text-white">Welcome to <span className='animate-charcter'>GradUp</span></p>
        <div style={{overflow:"hidden"}} className='text-5xl text-white textnew text-left'>
            <p style={{overflow:""}}>Connecting Talent with us to</p>
            <p style={{overflow:"hidden"}} className='mt-2'>Explore new <span className='animate-charcter font-semibold'>Opportunities</span></p>
        </div>
        <div className='text-left text-white textnew'>
            <h1 className='mt-10 ml-1'>One-step career solution. Grow your skills, get career help, and get hired.
            <br/>Your go-to destination to transform your dreams into reality
</h1> 
        </div>
        {/* <Link href='/courses' className="area">
              <button className='rounded-2xl py-1 px-6 border-2 textnew border-sky-500 bg-white text-sky-700 mt-6 mb-10 hover:bg-sky-400 hover:text-white hover:border-white' onClick={() =>
                signIn()}>Sign In to Explore</button>
        </Link> */}
        {providers &&
              Object.values(providers).map((provider) => (
                <button 
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='rounded-2xl py-1 px-6 border-2 textnew border-sky-500 bg-white text-sky-700 mt-6 mb-10 hover:bg-sky-400 hover:text-white hover:border-white'
                >
                  Sign In to get the proper access of the website
                </button>
              ))}
        </div> 
        <div className="block mt-5">
          {arr.map((ele,i)=>{
            return(current===i &&
              <>
               <img className="mt-8" width="350" src={ele} alt="home-gif"></img>
              </>
            )
          })}
          </div>
    </section>
  )
}

export default HomeFirstComponent