"use client";
import ListContentCard from "@components/ListContentCard";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import Select from "react-select";

const FilterStartups = ({
  setSelectedCity,
  setSelectedTitle,
  setSalaryExp,
  selectedCity,
  selectedTitle,
  salaryExp,
  setPage
}) => {
  const [city,setCity] = useState([]);
  const [title,setTitle] = useState([]);
  const cityList = [
    { value: "Remote", label: "Remote" },
    { value: "Delhi", label: "Delhi" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Bihar", label: "Bihar" },
    { value: "Kerala", label: "Kerala" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Punjab", label: "Punjab" },
    { value: "Assam", label: "Assam" },
    { value: "Odisha", label: "Odisha" },
    { value: "West Bengal", label: "West Bengal" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Goa", label: "Goa" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Manipur", label: "Manipur" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
    { value: "Chattisgarh", label: "Chattisgarh" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  ];
  let titleList = [
    { value: "Software Developer/Engineer",label: "Software Developer/Engineer" },
    { value: "Front-End Developer",label: "Front-End Developer" },
    { value: "Back-End Developer",label: "Back-End Developer" },
    { value: "Full-Stack Developer",label: "Full-Stack Developer" },
    { value: "Mobile App Developer",label: "Mobile App Developer" },
    { value: "Data Scientist",label: "Data Scientist" },
    { value: "Data Analyst",label: "Data Analyst" },
    { value: "Database Administrator",label: "Database Administrator" },
    { value: "Systems Administrator",label: "Systems Administrator" },
    { value: "Network Engineer",label: "Network Engineer" },
    { value: "HR Manager",label: "HR Manager" },
    { value: "IT Project Manager",label:"IT Project Manager" },
    { value: "IT Consultant", label: "IT Consultant" },
    { value: "Business Analyst",label: "Business Analyst" },
    { value: "UI/UX Designer",label: "UI/UX Designer" },
    { value: "Quality Assurance Engineer/Tester",label: "Quality Assurance Engineer/Tester" },
    { value: "DevOps Engineer",label: "DevOps Engineer" },
    { value: "Cloud Architect/Engineer",label: "Cloud Architect/Engineer" },
    { value: "IT Support Specialist",label: "IT Support Specialist" },
    { value: "Technical Writer",label: "Technical Writer" },
    { value:"Java Developer",label:"Java Developer"},
    { value:"Python Developer",label:"Python Developer"},
    { value:"Web Developer",label:"Web Developer"},
    { value:"JavaScript Developer",label:"JavaScript Developer"},
    { value:"Game Developer",label:"Game Developer"},
    { value:"C#/.Net Developer",label:"C#/.Net Developer"},
    { value:"Wordpress Developer",label:"Wordpress Developer"},
    { value:"Salesforce Developer",label:"Salesforce Developer"},
    { value:"Unity Developer",label:"Unity Developer"},
    { value:"Machine Learning Engineer",label:"Machine Learning Engineer"},
    { value:"Data Engineer",label:"Data Engineer"},
    { value:"DevOps Engineer",label:"DevOps Engineer"},
    { value:"Cloud Engineer",label:"Cloud Engineer"},
    { value:"Blockchain Developer",label:"Blockchain Developer"},
    { value:"Database Developer",label:"Database Developer"},
    { value:"Automation Developer",label:"Automation Developer"},
    { value:"Microservices Developer",label:"Microservices Developer"},
    { value:"IOS Developer",label:"IOS Developer"},
    { value:"Android Developer",label:"Android Developer"},
    { value:"Data Architect",label:"Data Architect"},
    { value:"Database Analyst",label:"Database Analyst"},
    { value:"SQL Developer",label:"SQL Developer"},
    { value:"Database Designer",label:"Database Designer"},
    { value:"Big Data Engineer",label:"Big Data Engineer"},
    { value:"Data Quality Analyst",label:"Data Quality Analyst"},
    { value:"Operations Manager",label:"Operations Manager"},
    { value:"Support Analyst",label:"Support Analyst"},
    { value:"Network Support Engineer",label:"Network Support Engineer"},
    { value:"Customer Support Representative",label:"Customer Support Representative"},
    { value:"IT Help Desk Manager",label:"IT Help Desk Manager"},
    { value:"HR Business Patner",label:"HR Business Partner"},
    { value:"HR Specialist",label:"HR Specialist"},
    { value:"Talent Acquisition Specialist",label:"Talent Acquisition Specialist"},
    { value:"HR Operations Manager",label:"HR Operations Manager"},
    { value:"HR Business Analyst",label:"HR Business Analyst"},
    { value:"IT Operations Manager",label:"IT Operations Manager"},
    { value:"IT Operations ANalyst",label:"IT Operations ANalyst"},
    { value:"Risk Analyst",label:"Risk Analyst"},
    { value:"Software Trainer",label:"Software Trainer"},
    { value:"Product Owner",label:"Product Owner"},
    { value:"Team Lead",label:"Team Lead"},
    { value:"Release Manager",label:"Release Manager"},
    { value:"Support Engineer",label:"Support Engineer"},
    { value:"Systems Engineer",label:"Systems Engineer"},
    { value:"Software Tester",label:"Software Tester"},
    { value:"Security Engineer",label:"Security Engineer"},
    { value:"Scrum Master",label:"Scrum Master"},
    { value:"Product Manager",label:"Product Manager"},
    { value:"Data Warehouse Developer",label:"Data Warehouse Developer"},
    { value:"Mathematics & Computing",label:"Mathematics & Computing"},
    { value:"Content Development",label:"Content Development"},
    { value:"Digital Marketing",label:"Digital Marketing"},
    { value:"Subject Matter Expert",label:"Subject Matter Expert"},
    { value:"Robotics",label:"Robotics"},
    { value:"Creative Writing",label:"Creative Writing"},
    { value:"Graphic Designing",label:"Graphic Designing"},
    { value:"Business Development",label:"Business Development"},
    { value:"Media & Public Relations",label:"Media & Public Relations"},
    { value:"Social Media Marketing",label:"Social Media Marketing"},
    { value:"Video Editing",label:"Video Editing"},
    { value:"Cyber Security",label:"Cyber Security"},
    { value:"Supply Chain Management",label:"Supply Chain Management"},
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
  useEffect(()=>{
    setPage(1)
  },[selectedCity,selectedTitle,salaryExp])
  const changeSalaryRxp = (event) => {
    setSalaryExp(event.target.value);
  };
  return (
    <div className="pt-16">
      <div style={{ backgroundColor: "" }} className="filterbox">
        <div>
          <div className="p-3">
            <Select
              className="text-left"
              options={cityList}
              placeholder="Select State"
              value={city}
              onChange={handleCity}
              isSearchable={true}
              isMulti
            />
          </div>
          <div className="p-3">
            <Select
              className="container text-left"
              options={titleList}
              placeholder="Select Job"
              value={title}
              onChange={handleTitle}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <input
            className="w-4/5"
            type="range"
            onChange={changeSalaryRxp}
            min={0}
            max={50000}
            step={5000}
            value={salaryExp}
          ></input>
        </div>
        <div className="mt-4 text-center w-full">
          <div className="salary">{`MIN SALARY - Rs. ${salaryExp}`}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterStartups;
