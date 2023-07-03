"use client";
import ListContentCard from "@components/ListContentCard";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import Select from "react-select";

const FilterJobs = ({
  setSelectedCity,
  setSelectedTitle,
  setSalaryExp,
  selectedCity,
  selectedTitle,
  salaryExp,
}) => {
  const [city,setCity] = useState([]);
  const [title,setTitle] = useState([]);
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

  // function handleCity(data) {
  //   setSelectedCity(data);
  // }
  // function handleTitle(data) {
  //   setSelectedTitle(data);
  // }
  // const changeSalaryRxp = (event) => {
  //   setSalaryExp(event.target.value);
  // };

  function handleCity(data) {
    console.log("City Name",data);
    var arr=[]
    data.forEach(element => {
      arr.push(element.value);
    });
    setSelectedCity(arr);
    setCity(data);
  }
  function handleTitle(data) {
    var arr=[]
    data.forEach(element => {
      arr.push(element.value);
    });
    setSelectedTitle(arr);
    setTitle(data);
  }

  const changeSalaryRxp = (event) => {
    setSalaryExp(event.target.value);
  };
  return (
    <div className="pt-16">
      <div style={{ backgroundColor: "#0076ce" }} className="filterbox">
        <div>
          <div className="p-3">
            <Select
              options={cityList}
              placeholder="Select city"
              value={city}
              onChange={handleCity}
              isSearchable={true}
              isMulti
            />
          </div>
          <div className="p-3">
            <Select
              className="container"
              options={titleList}
              placeholder="Select job"
              value={title}
              onChange={handleTitle}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <Input
            type="range"
            onChange={changeSalaryRxp}
            min={0}
            max={50000}
            step={5000}
            value={salaryExp}
          ></Input>
        </div>
        <div className="mt-4 text-center w-full">
          <div className="salary">{`MIN SALARY - Rs. ${salaryExp}`}</div>
        </div>
        <div>
          <button type="submit" className="btn4 mt-5">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterJobs;
