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

  useEffect(()=>{
    setTimeout(()=>{
      current<4?setCurrent(current+1):setCurrent(0)
    },1500)
  },[current])
  let arr=["/assets/images/home1.png","/assets/images/home2.png","/assets/images/home3.png","/assets/images/home4.png","/assets/images/home5.png"]
  return (
    <section className='w-screen flex justify-around headingbox'>
      <div className="mb-12 flex flex-col justify-center">
        {/* <p className="text-left text-3xl text-white mb-3">Welcome to <span className='animate-charcter'>GradUp</span></p> */}
        <div style={{overflow:"hidden"}} className='text-xl sm:text-5xl text-white textnew text-left'>
            <p className=''>Connecting talent to</p>
            <p style={{overflow:"hidden"}} className=''>explore new <span className='animate-charcter font-semibold'>Opportunities</span></p>
        </div>
        <div className='text-left text-white textnew'>
            <h1 className='mt-6 text-xl mb-2'>Transform your dreams: the ultimate platform for college-to-career success, offering<br/> skill-suited internships, upskilling courses, and expert guidance all in one place.
            <br/></h1> 
        </div>
        {/* <Link href='/courses' className="area">
              <button className='rounded-2xl py-1 px-6 border-2 textnew border-sky-500 bg-white text-sky-700 mt-6 mb-10 hover:bg-sky-400 hover:text-white hover:border-white' onClick={() =>
                signIn()}>Sign In to Explore</button>
        </Link> */}
        {session?.user.id ? <></>
        :<>
          {providers &&
              Object.values(providers).map((provider) => (
                <button 
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='animated-button1 rounded-2xl py-1 px-6 textnew text-xl mt-6'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  Sign In to Know More
                </button>
              ))}
        </>}
        
        </div> 
        <div className="hideimage">
          {arr.map((ele,i)=>{
            return(current===i &&
              <>
               <img className="" width="350" src={ele} alt="home-gif"></img>
              </>
            )
          })}
          </div>
    </section>
  )
}

export default HomeFirstComponent