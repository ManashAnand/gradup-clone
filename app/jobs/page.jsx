'use client'
import ListContentCard from '@components/ListContentCard'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Input } from '@nextui-org/react'
import Select from 'react-select'
import Spinner from '@components/Spinner'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from "./styles.module.css"

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
import { useSearchParams } from 'next/navigation'
import FilterJobs from '@components/jobs/FilterJobs'
import ShowJobs from '@components/jobs/ShowJobs'
// const cityList = [
//   { value: "delhi", label: "delhi" },
//   { value: "mumbai", label: "mumbai" },
//   { value: "dehradun", label: "dehradun" },
//   { value: "patna", label: "patna" },
//   { value: "gaya", label: "gaya" },
//   { value: "remote", label: "remote" },
// ];
// const titleList = [
//   { value: "SDE", label: "SDE" },
//   { value: "business analyst", label: "business analyst" },
//   { value: "hr", label: "hr" },
//   { value: "ml intern", label: "ml intern" },
//   { value: "software engineer", label: "software engineer" },
// ];

function Page({ index, setPage }) {
  const [selectedCity, setSelectedCity] = useState([])
  const [selectedTitle, setSelectedTitle] = useState([])
  const [salaryExp, setSalaryExp] = useState(0)
  const [searchresults, setSearchresults] = useState([])
  const [search, setSearch] = useState('')
  return (
    <section className='w-screen px-16'>
      <div className={styles["headerpos"]}>
        <div>
          <div className={`font-bold ${styles["jobpos"]}`}>
            <h1 className={`text-white ${styles["sizetext"]} text-left`}>
              Find your <span className={styles["animate-charcter"]}>job</span> &
            </h1>
            <h1
              style={{ overflow: 'hidden' }}
              className={`text-blue-400 ${styles["sizetext"]} text-left`}
            >
              grab
              <span className='underline decoration-white underline-offset-8'>
                {' '}
                the<span className={styles["animate-charcter"]}> opportunities</span>
              </span>
            </h1>
            <p className='mt-10 text-xl text-white text-left'>
              Just one step to change your career. Apply to thousands of Job
              opportunities across top Companies and Startups.
            </p>
          </div>
          {/* <div className="inputcontainer">
            <input className="inputbox"  type="search" placeholder="🔍 Search Job Title"></input>
          </div> */}
        </div>
        <img
          className={`${styles["giphy"]} mt-6`}
          src='assets/images/image.gif'
          alt='work-img'
        ></img>
      </div>
      <div>
        <p className={styles["heading"]}></p>
      </div>
      {/* <div className="sortpos">
            <p className="-ml-10 text-white text-sm">Sort by:</p>
            <button className="btn6">Recently Released</button>
            <button className="btn6">Alphabetical</button>
          </div> */}
          
            <div className={styles["main-content"]}>
            <div className=" -translate-x-10 sm:-translate-x-0">

              <FilterJobs
                setSelectedCity={setSelectedCity}
                setSelectedTitle={setSelectedTitle}
                setSalaryExp={setSalaryExp}
                selectedCity={selectedCity}
                selectedTitle={selectedTitle}
                setPage={setPage}
                salaryExp={salaryExp}
              />
            </div>
              <ShowJobs
                selectedCity={selectedCity}
                selectedTitle={selectedTitle}
                salaryExp={salaryExp}
                search={search}
                index={index}
                setPage={setPage}
              />
            </div>
    </section>
  )
}

export default function App() {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])
  const [pageIndex, setPageIndex] = useState(1)
  return (
    <div className=''>
      {session?.user ? (
        <>
          <div className='mb-10'>
            <div className='justify-center flex-center'>
              <Page index={pageIndex} setPage={setPageIndex} />
            </div>
            <div style={{ display: 'none' }}>
              <Page index={pageIndex + 1} setPage={setPageIndex} />
            </div>
            {/* <div className="flex buttonpos">
        <button style={{backgroundColor:"#0076ce"}} class="btn2" onClick={() => setPageIndex(pageIndex - 1)}>
          Prev
        </button>
        <button style={{backgroundColor:"#0076ce"}} class="btn3" onClick={() => setPageIndex(pageIndex + 1)}>
          Next
        </button>
      </div> */}
          </div>
        </>
      ) : (
        <div className=''>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id)
                }}
                className={`rounded-2xl my-5 py-1 px-6 border-2 ${styles["textnew"]} border-sky-500 bg-white text-sky-700 hover:bg-sky-400 hover:text-white hover:border-white`}
              >
                Sign In to access jobs
              </button>
            ))}{' '}
        </div>
      )}
    </div>
  )
}

// "use client"
// import ListContentCard from "@components/ListContentCard";

// async function getData() {
//   const response = await fetch("https://api.jsonbin.io/v3/b/645b79d98e4aa6225e9a3925");
//   if (!response.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// }

// export default async function Jobs ()  {
//   const data = await getData();
//   const jobs=data.record.jobs;

//   return (
//     <section className='w-full'>
//       <h1 className='head_text text-left'>
//         <span className='blue_gradient'>Jobs for you</span>
//       </h1>

//       <div className='mt-10 prompt_layout'>
//         {jobs.map((job) => (
//           <ListContentCard
//             post={job}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// "use client"
// import Head from 'next/head'
// import axios from 'axios'
// import { useState } from 'react'

// export async function getStaticProps(){
// const data = await axios.get('https://restcountries.com/v3.1/all')
// return {
// props: {
// countries: data.data
// }
// }
// }

// export default function Home({countries}) {
// const [query, setQuery] = useState('');

// // set the value of our useState query anytime the user types on our input
// const handleChange = (e) => {
// setQuery(e.target.value)
// }

// return (
// <div className={`font-nunito bg-gray-100`}>
// <Head>
// <title>Rest Countries</title>
// <meta name="description" content="Generated by create next app" />
// <link rel="icon" href="/favicon.ico" />
// </Head>
// <div className='w-11/12 m-auto mt-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0'>
// <input onchange={handleChange} type='text'/>
// </div>

// <div className='w-11/12 m-auto md:grid mt-10 gap-10 md:grid-cols-4 flex flex-col'>
//  /* here we map over the element and display each item as a card  */
// {countries.map((country) => (
// <div className='bg-white shadow-lg rounded-md overflow-hidden h-[25rem] cursor-pointer'>
// <img src={country.flags.png} alt='Country card' class='h-56 w-full object-cover'/>
// <span className='px-3 py-2 block font-bold text-xl'>{country.name.common}</span>
// <span className='px-3 py-2 block'><span className='font-bold'>Popoulation:</span> <span className='font-light'>{country.population}</span></span>
// <span className='px-3 py-2 block'><span className='font-bold'>Region:</span> <span className='font-light'>{country.region}</span></span>
// <span className='px-3 py-2 block'><span className='font-bold'>Capital:</span> <span className='font-light'>{country.capital}</span></span>
// </div>
// ))}
// </div>
// </div>
// )
// }
