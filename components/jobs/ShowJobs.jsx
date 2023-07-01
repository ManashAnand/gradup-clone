"use client";
import ListContentCard from "@components/ListContentCard";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import Select from "react-select";
import { useRouter } from "next/router";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import { useSearchParams } from "next/navigation";
const vari=1;
function Page({ selectedCity, selectedTitle, salaryExp, search,index ,searchresults,setSearchresults}) {
  const [jobs,setJobs] = useState(null);
  // const { data, error } = useSWR(
  //   `/api/jobs/?page=${index}&startup=false&intern=false`,
  //   fetcher
  // );

  useEffect(()=>{
    fetchData();
  },[salaryExp,selectedCity,selectedTitle]);
  const fetchData = async() =>{

    try {
      console.log("Cities Selected: ",selectedCity,"Title Selected: ",selectedTitle);
    const response = await fetch(`/api/jobs/filter`, {
      method: "POST",
      body: JSON.stringify({
        location:selectedCity,
        stipend:salaryExp,
        title:selectedTitle,
        intern:"false",
        startup:"false",
        page:1
      }),
    });
    console.log(response.status)
    const newData = await response.json();
    setJobs(newData);
    console.log(newData,"Data is here");
    }   catch (error) {
        console.log(error);
      } 
  }

  function handleSubmit() {}
  
  return (
      <>
    {/* {search.length >= 0 ? (
      <div style={{ backgroundColor: "#0076ce" }} className="mt-10 arrange">
        {searchresults.map((ele, i) => (
          <ListContentCard post={ele} />
        ))}
      </div>
    ) : jobs.length > 0 ? ( */}
      {jobs!=null ? (
      <div style={{ backgroundColor: "#0076ce" }} className="mt-10 arrange">
        {jobs.map((job) => (
          <ListContentCard post={job} />
        ))}
      </div>) : (<></>)}
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

export default function ShowJobs({ selectedCity, selectedTitle, salaryExp, search,index,searchresults,setSearchresults }) {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div>
      <div className="justify-center flex-center">
        <Page
          // index={pageIndex}
          selectedCity={selectedCity}
          selectedTitle={selectedTitle}
          salaryExp={salaryExp}
          search={search}
          index={index}
          searchresults={searchresults}
          setSearchresults={setSearchresults}
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
        />
      </div>
      <div className="flex buttonpos">
        <button class="btn2" onClick={() => setPageIndex(pageIndex - 1)}>
          Prev
        </button>
        <button class="btn3" onClick={() => setPageIndex(pageIndex + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
