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

function Page({ index, selectedCity, selectedTitle, salaryExp }) {
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
  const { data, error } = useSWR(
    `/api/jobs/?page=${index}&startup=true&intern=true`,
    fetcher
  );
  if (error) return <div>Failed to loadinggggggg</div>;
  if (!data) return <div>Loading...</div>;
  const jobs = data;
  console.log(jobs);
  function handleSubmit() {}
  return (
    <section className="w-full">
      <div className="sortpos">
        <p className="-ml-10 text-gray-500 text-sm font-bold">Sort by:</p>
        <button className="btn6">Recently Released</button>
        <button className="btn6">Alphabetical</button>
      </div>
      <div className="main-content">
        <div className="mt-10 arrange">
          {jobs.map((job) => (
            <ListContentCard post={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ShowJobs({ selectedCity, selectedTitle, salaryExp }) {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div>
      <div className="justify-center flex-center">
        <Page
          index={pageIndex}
          selectedCity={selectedCity}
          selectedTitle={selectedTitle}
          salaryExp={salaryExp}
        />
      </div>
      <div style={{ display: "none" }}>
        <Page
          index={pageIndex + 1}
          selectedCity={selectedCity}
          selectedTitle={selectedTitle}
          salaryExp={salaryExp}
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
