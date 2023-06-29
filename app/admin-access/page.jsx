"use client";
import useSWR from "swr";
import { useState, useEffect } from "react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import Spinner from "@components/Spinner"
const page = () => {
    const { data, error } = useSWR(
        `/api/admin`,
        fetcher
      );
      if (error) return <div>Failed to loadinggggggg</div>;
      if (!data) return <div className="my-60"><Spinner/></div>;
      console.log(data);
  return (
    <div>
        <div>
            Total Users are - {data.totalNoOfUsers}
        </div>
        <div>
            Out of which HR's are -  {data.totalHRs}
        </div>
        <div>
            Total Alumni are - {data.totalAlumni}
        </div>
        <div>
            Last 7 day registration are - {data.lastSevenDaysRegisteresUsers}
        </div>
        <div>
            Total Jobs Posted - {data.totalJobs} 
        </div>
        <div>
            Total Active Jobs - {data.totalActiveJobs}
        </div>
    </div>
  )
}

export default page