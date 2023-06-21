"use client";
import React from "react";
import FilterJobs from "@components/jobs/FilterJobs";
import ShowJobs from "@components/jobs/ShowJobs";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import Select from "react-select";
const page = () => {
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState([]);
  const [salaryExp, setSalaryExp] = useState(0);
  return (
    <div className="mb-20">
      <div>
      <div className="headerpos">
            <div>
          <div className='head_text jobpos'>
            <h1 className='text-white text-5xl mt-16'>Join the</h1>
            <h1 className='text-blue-400 text-4xl'>Startup <span className="underline decoration-yellow-300 underline-offset-8">you want to join</span></h1>
          </div>
          <div className="inputcontainer">
            <input className="inputbox" type="search" placeholder="Enter"></input>
            <button className="btn1">Search</button>
          </div>
          </div>
           <img className="giphy" src="assets/images/working2.gif" alt="work-img"></img>
          </div> 
          <div>
            <p className="heading">All Jobs</p>
          </div>
        <div className="startup">
          <div className="mt-8">
            <FilterJobs
              setSelectedCity={setSelectedCity}
              setSelectedTitle={setSelectedTitle}
              setSalaryExp={setSalaryExp}
              selectedCity={selectedCity}
              selectedTitle={selectedTitle}
              salaryExp={salaryExp}
            ></FilterJobs>
          </div>
          <div>
            <ShowJobs
              selectedCity={selectedCity}
              selectedTitle={selectedTitle}
              salaryExp={salaryExp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
