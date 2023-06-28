
"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import {useState, useEffect} from 'react'
import Select from 'react-select'
import Spinner from "@components/Spinner"
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
  const [salaryExp, setSalaryExp] = useState(1000);
  const [jobs, setJobs] = useState([]);
  const [searchresults, setSearchresults] = useState([]);
  const [search,setSearch]=useState("")
  const [loading,setLoading]=useState(true)
  const [status,setStatus]=useState(false)
  // function handleChange(e){
  //   setSearch(e.target.value)
  //   console.log(search)
  //   setStatus(true)
  // }
  // function handleSearch(){
  //   let results=jobs.filter((ele,i)=>{
  //     return search===""?ele:ele.title.toLowerCase().includes(search.toLowerCase())
  //   })
  //   console.log(results)
  //   results.length>0?setSearchresults(results):setStatus(false)
  // }
  // useEffect(()=>{
  //   handleSearch()
  // },[search])

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
    console.log(data)
    setJobs(data);
    setLoading(false)
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
        <section className='w-full mt-14'>
         <div className="headerpos">
            <div>
          <div className='font-bold jobpos'>
            <h1 className="text-white text-5xl underline decoration-yellow-300 underline-offset-8">Internship</h1>
            <h1 style={{color:"teal"}} className=' text-5xl mt-2'>Opportunities for you.</h1>
          </div>
          {/* <div className="inputcontainer">
            <input className="inputbox" type="search" placeholder="🔍 Search Job Title"></input>
             <button onClick={handleSearch} className="btn1">Search</button>
          </div> */}
          </div>
           <img className="giphy" src="assets/images/working4.gif" alt="work-img"></img>
          </div> 
          <div>
          <p className="heading1 my-20"></p>
          </div>
          {/* <div className="sortpos">
            <p className="-ml-10 text-white text-sm">Sort by:</p>
            <button className="btn6">Recently Released</button>
            <button className="btn6">Alphabetical</button>
          </div> */}
          <div className="main-content">
            <div className="pt-16">
                <div style={{backgroundColor:"teal"}} className="filterbox">
                <div>
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
                    className="container"
                    options={titleList}
                    placeholder="Select job title"
                    value={selectedTitle}
                    onChange={handleTitle}
                    isSearchable={true}
                    isMulti
                  />
                  </div>
                </div>
                <div className='text-center mt-4'>
                  <Input
                    type='range'
                    onChange={changeSalaryRxp}
                    min={1000}
                    max={10000}
                    step={1000}
                    value={salaryExp}
                  >
                  </Input>
                </div>
                <div className="mt-4 text-center w-full">
                <div className="salary">{`MIN SALARY - Rs. ${salaryExp}`}</div>
                </div>
                <div>
                <button type='submit' className='btn4 mt-5'>Apply</button>
                </div>
                </div>
            </div>
            {loading && <div className="m-auto"><Spinner/></div>}
            {!status && jobs.length>0?<div style={{backgroundColor:"teal"}} className='mt-10 arrange'> 
              {jobs.map((job) => (
                <ListContentCard 
                  post={job}
                />
              ))}
            </div>:search.length>0?<div style={{backgroundColor:"teal"}} className='mt-10 arrange'> 
            {searchresults.map((ele,i)=>(
              <ListContentCard post={ele}/>
            ))}</div>:<div className="text-white text-center m-auto text-2xl">No more Internships to display!!<br/> Please go to previous page</div>}
          </div>
        </section>
      )
  }
 
export default function App () {
  const [pageIndex, setPageIndex] = useState(0);
  const [opacity,setOpacity]=useState(1)
  useEffect(()=>{
    pageIndex===0?setOpacity(0.2):setOpacity(1)
  })
  return (
    <div>
      <div className="justify-center flex-center">
        <Page index={pageIndex} />
      </div>
      {/* <div style={{ display: "none" }}>
        <Page index={pageIndex + 1} />
      </div> */}
      <div className="flex buttonpos mb-16">
        <button style={{opacity:opacity}} disabled={pageIndex===0?true:false} class="btn2" onClick={() => setPageIndex(pageIndex - 1)}>
          Prev
        </button>
        <button class="btn3" onClick={() => setPageIndex(pageIndex + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}