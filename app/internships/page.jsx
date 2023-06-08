
"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import {useState, useEffect} from 'react'
import Select from 'react-select'
import { Input } from "@nextui-org/react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());


function Page ({ index }) {
  const cityList = [
    { value: "delhi", label: "delhi" },
    { value: "mumbai", label: "mumbai" },
    { value: "dehradun", label: "dehradun" },
    { value: "patna", label: "patna" },
    { value: "gaya", label: "gaya" },
  ];
  const titleList = [
    { value: "SDE", label: "SDE" },
    { value: "business analyst", label: "business analyst" },
    { value: "hr", label: "hr" },
    { value: "ml intern", label: "ml intern" },
    { value: "software engineer", label: "software engineer" },
  ];
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState([]);
  const [salaryExp, setSalaryExp] = useState(0);
  const [jobs, setJobs] = useState([]);
  // const { data,error } = useSWR(`https://api.jsonbin.io/v3/b/6460d47e8e4aa6225e9cc67d/?page=${index}`, fetcher);
  // const { data, error } = useSWR( `/api/jobs/?page=${index}&intern=true`, fetcher)
  // console.log(data, "Front ",index);
  // ... handle loading and error states
  // if (error) return <div>Failed to loadinggggggg</div>;
  // if (!data) return <div>Loading...</div>;
  // console.log(data.record);
  // var jobs=data
  const fetchJobs = async () => {
    const response = await fetch(`/api/jobs/?page=${index}&?intern=true`);
    const data = await response.json();
    setJobs(data);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  function handleCity(data) {
    setSelectedCity(data);
  }
  function handleTitle(data) {
    setSelectedTitle(data);
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`/api/jobs/filter/?intern=true`, {
        method: "POST",
        body: JSON.stringify({
          location:[],
          title:["SDE"],
          stipend:0,
        }),
      });
      const d = await response.json()
      console.log(d);
      setJobs(d);
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }
  const changeSalaryRxp = (event) => {
    setSalaryExp(event.target.value);
  };
  return (
        <section className='w-full'>
          <h1 className='head_text text-left'>
            <span className='blue_gradient'>Internships for you</span>
          </h1>
          <div className="flex flex-row">
            <div className="pt-16"> Search Bar Filter
                <div>
                <div className="">
                  <div className="p-3">
                  <Select
                    options={cityList}
                    placeholder="Select city"
                    value={selectedCity}
                    onChange={handleCity}
                    isSearchable={true}
                    isMulti
                  />
                  </div>
                  <div className="p-3">
                  <Select
                    options={titleList}
                    placeholder="Select job title"
                    value={selectedTitle}
                    onChange={handleTitle}
                    isSearchable={true}
                    isMulti
                  />
                  </div>
                </div>
                <div className='custom-slider'>
                  <Input
                    type='range'
                    onChange={changeSalaryRxp}
                    min={1}
                    max={10000}
                    step={1}
                    value={salaryExp}
                    className={'custom-slider'}>
                  </Input>
                </div>
                <div>
                <Input underlined value={`Min Salary -  ${salaryExp}`}/>
                </div>
                <div>
                <button onClick={handleSubmit} type='submit' className='black_btn2 mt-5'  >Apply</button>
                </div>
                </div>
            </div>
          <div className='mt-10 prompt_layout'>
            
            {jobs.map((job) => (
              <ListContentCard 
                post={job}
              />
            ))}
          </div>
          </div>
        </section>
      )
  }
 
export default function App () {
  const [pageIndex, setPageIndex] = useState(0);
 
  return <div>
    <Page index={pageIndex}/>
    <div style={{ display: 'none' }}><Page index={pageIndex + 1}/></div>
    <button onClick={() => setPageIndex(pageIndex - 1)}>Prev</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
  </div>
}