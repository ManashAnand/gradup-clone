"use client";
import ListContentCard from "@components/ListContentCard";
import useSWR from "swr";
import Spinner from "@components/Spinner";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import Select from "react-select";
import { useRouter } from "next/router";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import { useSearchParams } from "next/navigation";
const vari=1;
function Page({ selectedCity, selectedTitle, salaryExp, search,index ,jobs,loading,searchresults,setSearchresults}) {
  // const [jobs,setJobs] = useState([]);
  // const [loading,setLoading]=useState(true)
  // // const { data, error } = useSWR(
  // //   `/api/jobs/?page=${index}&startup=false&intern=false`,
  // //   fetcher
  // // );

  // useEffect(()=>{
  //   fetchData();
  // },[salaryExp,selectedCity,selectedTitle,index]);
  // const fetchData = async() =>{

  //   try {
  //     console.log("Cities Selected: ",selectedCity,"Title Selected: ",selectedTitle,"Page No:",index);
  //   const response = await fetch(`/api/jobs/filter`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       location:selectedCity,
  //       stipend:salaryExp,
  //       title:selectedTitle,
  //       intern:"false",
  //       startup:"false",
  //       page:index
  //     }),
  //   });
  //   console.log(response.status)
  //   const newData = await response.json();
  //   setJobs(newData);
  //   setLoading(false)
  //   console.log(newData,"Data is here");
  //   }   catch (error) {
  //       console.log(error);
  //     } 
  // }

  // function handleSubmit() {}
  
  return (
      <>
    {/* {search.length >= 0 ? (
      <div style={{ backgroundColor: "#0076ce" }} className="mt-10 arrange">
        {searchresults.map((ele, i) => (
          <ListContentCard post={ele} />
        ))}
      </div>
    ) : jobs.length > 0 ? ( */}
      {loading && <div className="text-center message"><Spinner/></div>}
      {jobs.length>0 ? (
      <div style={{ backgroundColor: "#0076ce" }} className="mt-10 arrange">
        {jobs.map((job) => (
          <ListContentCard post={job} />
        ))}
      </div>) : (<div className="text-white text-center my-32 mx-60 text-2xl">
        No more jobs to display!!
      </div>)}
    {/* ) : (
      <div className="text-white text-center m-auto text-2xl">
        No more Jobs to display!!
        <br />
        Please go to previous Page
      </div>
    )} */}
    </>
  );
}

export default function ShowJobs({ selectedCity, selectedTitle, salaryExp, search,index,searchresults,setSearchresults,setPage }) {
  const [jobs,setJobs] = useState([]);
  const [loading,setLoading]=useState(true)
  const [opacity1,setOpacity1]=useState(1)
  const [opacity2,setOpacity2]=useState(1)
  useEffect(()=>{
    fetchData();
  },[salaryExp,selectedCity,selectedTitle,index]);
  const fetchData = async() =>{

    try {
    const response = await fetch(`/api/jobs/filter`, {
      method: "POST",
      body: JSON.stringify({
        location:selectedCity,
        stipend:salaryExp,
        title:selectedTitle,
        intern:"false",
        startup:"false",
        page:index
      }),
    });
    const newData = await response.json();
    setJobs(newData);
    setLoading(false)
    }   catch (error) {
      } 
  }
  useEffect(()=>{
    index===1?setOpacity1(0.2):setOpacity1(1)
    jobs.length<6?setOpacity2(0.2):setOpacity2(1)
  })
  return (
    <div>
      <div className="justify-center">
        <Page
          // index={pageIndex}
          selectedCity={selectedCity}
          selectedTitle={selectedTitle}
          salaryExp={salaryExp}
          search={search}
          index={index}
          searchresults={searchresults}
          setSearchresults={setSearchresults}
          jobs={jobs}
          loading={loading}
        />
      </div>
      <div style={{ display: "none" }}>
        <Page
          // index={pageIndex + 1}
          selectedCity={selectedCity}
          selectedTitle={selectedTitle}
          salaryExp={salaryExp}
          search={search}
          index={index+1}
          jobs={jobs}
          loading={loading}
        />
      </div>
      <div className="flex buttonpos ml-2">
        <button style={{backgroundColor:"#0076ce",opacity:opacity1}} disabled={index===1?true:false} class="btn2" onClick={() => setPage(index - 1)}>
          Prev
        </button>
        <button style={{backgroundColor:"#0076ce",opacity:opacity2}} disabled={jobs.length<6?true:false} class="btn3" onClick={() => setPage(index + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
