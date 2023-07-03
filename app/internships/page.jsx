
"use client";
import ListContentCard from "@components/ListContentCard";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import Select from "react-select";
import Spinner from "@components/Spinner";
import { useRouter } from "next/router";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import { useSearchParams } from "next/navigation";
import FilterInternships from "@components/internships/FilterInternships";
import ShowInternships from "@components/internships/ShowInternships";
const cityList = [
  { value: "delhi", label: "delhi" },
  { value: "mumbai", label: "mumbai" },
  { value: "dehradun", label: "dehradun" },
  { value: "patna", label: "patna" },
  { value: "gaya", label: "gaya" },
  { value: "remote", label: "remote" },
];
const titleList = [
  { value: "SDE", label: "SDE" },
  { value: "business analyst", label: "business analyst" },
  { value: "hr", label: "hr" },
  { value: "ml intern", label: "ml intern" },
  { value: "software engineer", label: "software engineer" },
];

function Page({ index }) {
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState([]);
  const [salaryExp, setSalaryExp] = useState(0);
  const [searchresults, setSearchresults] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <section className="w-full mt-14">
      <div className="headerpos">
        <div>
        <div className='font-bold jobpos'>
            <h1 className="text-white text-5xl underline decoration-yellow-300 underline-offset-8">Internship</h1>
            <h1 style={{color:"darkturquoise"}} className=' text-5xl mt-2'>Opportunities for you.</h1>
          </div>
          {/* <div className="inputcontainer">
            <input className="inputbox"  type="search" placeholder="🔍 Search Job Title"></input>
          </div> */}
        </div>
        <img
          className="giphy"
          src="assets/images/working4.gif"
          alt="work-img"
        ></img>
      </div>
      <div>
        <p className="heading my-20"></p>
      </div>
      {/* <div className="sortpos">
            <p className="-ml-10 text-white text-sm">Sort by:</p>
            <button className="btn6">Recently Released</button>
            <button className="btn6">Alphabetical</button>
          </div> */}
      <div className="main-content">
        <FilterInternships setSelectedCity={setSelectedCity}
  setSelectedTitle={setSelectedTitle}
  setSalaryExp={setSalaryExp}
  selectedCity={selectedCity}
  selectedTitle={selectedTitle}
  salaryExp={salaryExp} />
        <ShowInternships selectedCity={selectedCity} selectedTitle={selectedTitle} salaryExp={salaryExp} search={search} index={index}/>
      </div>
    </section>
  );
}

export default function App() {
  const [pageIndex, setPageIndex] = useState(0); 
  return (
    <div className="mb-32">
      <div className="justify-center flex-center">
        <Page index={pageIndex} />
      </div>
      {/* <div style={{ display: "none" }}>
        <Page index={pageIndex + 1} />
      </div> */}
    </div>
  );
}