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
    <div>
      <div>
        <div className="text-black text-4xl"> Join the StartUp you want to join </div>
        <div className="flex flex-row ">
          <div>
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
