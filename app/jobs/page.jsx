
"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import {useState} from 'react'
import { Input } from "@nextui-org/react";
import Select from 'react-select'
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Page ({ index }) {
  const cityList = [
    { value: "delhi", label: "delhi" },
    { value: "mumbai", label: "mumbai" },
    { value: "dehradun", label: "dehradun" },
    { value: "patna", label: "patna" },
    { value: "gaya", label: "gaya" },
  ];
  const titleList = [
    { value: "SDE", label: "SDE" },
    { value: "business analyst", label: "business analyst" },
    { value: "hr", label: "hr" },
    { value: "ml intern", label: "ml intern" },
    { value: "software engineer", label: "software engineer" },
  ];
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState([]);
  const [salaryExp, setSalaryExp] = useState(0);
  // const { data,error } = useSWR(`https://api.jsonbin.io/v3/b/6460d47e8e4aa6225e9cc67d/?page=${index}`, fetcher);
  const { data, error } = useSWR( `/api/internships/?page=${index}`, fetcher)
  // ... handle loading and error states
  if (error) return <div>Failed to loadinggggggg</div>;
  if (!data) return <div>Loading...</div>;
  var jobs=data
  function handleCity(data) {
    setSelectedCity(data);
  }
  function handleTitle(data) {
    setSelectedTitle(data);
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`/api/jobs/filter`, {
        method: "POST",
        body: JSON.stringify({
          location:[],
          title:["SDE"],
          stipend:0,
        }),
      });
      const d = await response.json()
      console.log(d);
      //  jobs=response.
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }
  const changeSalaryRxp = (event) => {
    setSalaryExp(event.target.value);
  };
  return (
        <section className='w-full'>
          <h1 className='head_text text-left'>
            <span className='blue_gradient'>Jobs for you</span>
          </h1>
          <div className="flex flex-row">
            <div className="pt-16"> Search Bar Filter
                <div>
                <div className="">
                  <div className="p-3">
                  <Select
                    options={cityList}
                    placeholder="Select city"
                    value={selectedCity}
                    onChange={handleCity}
                    isSearchable={true}
                    isMulti
                  />
                  </div>
                  <div className="p-3">
                  <Select
                    options={titleList}
                    placeholder="Select job title"
                    value={selectedTitle}
                    onChange={handleTitle}
                    isSearchable={true}
                    isMulti
                  />
                  </div>
                </div>
                <div className='custom-slider'>
                  <Input
                    type='range'
                    onChange={changeSalaryRxp}
                    min={1}
                    max={10000}
                    step={1}
                    value={salaryExp}
                    className={'custom-slider'}>
                  </Input>
                </div>
                <div>
                <Input underlined value={`Min Salary -  ${salaryExp}`}/>
                </div>
                <div>
                <button onClick={handleSubmit} type='submit' className='black_btn2 mt-5'  >Apply</button>
                </div>
                </div>
            </div>
            <div className='mt-10 prompt_layout'>  
              {jobs.map((job) => (
                <ListContentCard 
                  post={job}
                />
              ))}
            </div>
          </div>
        </section>
      )
  }
 
export default function App () {
  const [pageIndex, setPageIndex] = useState(0);
 
  return <div >
    <div className="justify-center flex-center">
    <Page index={pageIndex}/>
    </div>
    <div style={{ display: 'none' }}><Page index={pageIndex + 1}/></div>
    <div className="flex object-right-bottom">
      <button class="outline_btn" onClick={() => setPageIndex(pageIndex - 1)}>Prev</button>
      <button class="outline_btn" onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  </div>
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