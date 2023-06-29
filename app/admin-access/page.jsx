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
    <div className="text-white my-20 flex flex-col items-center justify-center">
        <div className="flex justify-center m-auto">
        <div className="px-4 py-2 rightmargin">
        <p className="text-center textnew">Total HR's</p>
        <p className="text-center text-6xl overflow-hidden my-auto animate-charcter">{data.totalHRs}</p>
            {/* Out of which HR's are -  {data.totalHRs} */}
        </div>
        <div className="bg-green-500 ml-8 circlepad1 rounded-full">
        <p className="text-center textnew">Total Users</p>
        <p className="text-center text-5xl overflow-hidden">{data.totalNoOfUsers}</p>
        </div>
        <div className="px-4 py-2 leftmargin">
        <p className="text-center textnew">Total Alumni's</p>
        <p className="text-center text-6xl overflow-hidden animate-charcter">{data.totalAlumni}</p>
            {/* Total Alumni are - {data.totalAlumni} */}
        </div>
        </div>
        <div className="px-16 py-4 bg-green-500 circlepad3 mt-20 rounded-md">
        <p className="text-center textnew">Last 7 days registration</p>
        <p className="text-center text-5xl overflow-hidden">{data.lastSevenDaysRegisteresUsers}</p>
            {/* Last 7 day registration are - {data.lastSevenDaysRegisteresUsers} */}
        </div>
        <div className="flex mt-20">
        <div className="px-4 py-2 rightmargin">
        <p className="text-center textnew">Active Jobs</p>
        <p className="text-center text-6xl overflow-hidden my-auto animate-charcter">{data.totalActiveJobs}</p>
            {/* Out of which HR's are -  {data.totalHRs} */}
        </div>
        <div className="bg-green-500 ml-4 circlepad2 rounded-full">
        <p className="text-center textnew">Total Jobs</p>
        <p className="text-center text-5xl overflow-hidden">{data.totalJobs}</p>
        </div>
        <div className="px-4 py-2 leftmargin">
        <p className="text-center textnew">Inactive Jobs</p>
        <p className="text-center text-6xl overflow-hidden animate-charcter">{data.totalJobs-data.totalActiveJobs}</p>
            {/* Total Alumni are - {data.totalAlumni} */}
        </div>
        </div>
    </div>
  )
}

export default page