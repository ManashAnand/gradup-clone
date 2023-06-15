"use client"
import { Input, Spacer, Textarea, Grid } from "@nextui-org/react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import useSWR from 'swr';
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState} from 'react'
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const page = ({params}) => {
    const router = useRouter();
    const { data: session } = useSession();
    // const { data, error } = useSWR( `/api/jobs/${params.id}`, fetcher)
    // if (error) return <div>Failed to loadinggggggg job data</div>;
    // if (!data) return <div>Loading...</div>;
    // const jobs=data;

    const createNewJob = async (e) => {
      e.preventDefault();
      // setIsSubmitting(true);
      console.log("Form Submitted");
      e.target[0].value && e.target[2].value && e.target[4].value && e.target[8].value && e.target[13].value && e.target[15].value && e.target[17].value && e.target[18].value?setPosted(true):setPosted(false) 
      try {
        for(let i=0; i<e.target.length; i++){
          console.log("index is this ",i," label is this ",e.target[i].label," value is this ",e.target[i].value);
        }

        const response = await fetch("/api/jobs/new", {
          method: "POST",
          body: JSON.stringify({
            HRId:session?.user.id,
            title:e.target[0].value,
            stipend:e.target[2].value,
            companyName:e.target[4].value,
            companyLink:e.target[3].value,
            duration:e.target[6].value,
            isIntern: e.target[5].value,
            lastDate:e.target[8].value,
            expectedStartDate:e.target[7].value,
            skillsRequired:e.target[12].value,
            eligiblilty:e.target[9].value,
            perks:e.target[10].value,
            noOfOpenings:e.target[11].value,
            workingHours:e.target[12].value,
            postedDate:e.target[13].value,
            responsibilities:e.target[14].value,
            description:e.target[14].value,
          }),
        });
        console.log(response.status)
      } catch (error) {
        console.log(error);
      } finally {
        // setIsSubmitting(false);
        // alert("Submitted");
      }
    };
    const [posted,setPosted]=useState(false)
    function handleSubmit(e){

    }     
  return (
    !posted?<>
    <div className='justify-center w-full align-center justify-items-center hrjobs'>
          <h1 className='font-bold text-5xl text-left mb-5'>
            <p className='text text-4xl text-center text-white mb-8'>Post a Job and hire the best Talent</p>
          </h1>
        <form onSubmit={createNewJob} className='w-full'>
          <Grid.Container gap={2} >
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"white",marginTop:"1.8vh",marginLeft:"1em"}}><path d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"></path><path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z"></path></svg> 
                <label className="text-sm text-white my-3 ml-2">Job Title</label>
                </div>
              <Input css={{backgroundColor:"$white"}} clearable bordered placeholder="Job Title" initialValue="" required/>
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"1.6vh",marginLeft:"1em"}}><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path><path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
              <label className="text-sm text-white my-3 ml-2">Stipend</label>
              </div>
              <Input css={{backgroundColor:"$white"}} clearable bordered placeholder="Stipend" initialValue="" required/>
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"white",marginTop:"1.6vh",marginLeft:"1em"}}><path d="M18 2H6c-1.103 0-2 .897-2 2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm0 18H6V4h12v16z"></path><path d="M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z"></path></svg>
              <label className="text-sm text-white my-3 ml-2">Company Name</label>
              </div>
              <Input css={{backgroundColor:"$white"}} clearable bordered placeholder="Company Name" initialValue="" required/>
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div className="flex flex-col mx-auto w-full">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"1.6vh",marginLeft:"1em"}}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
              <label className="text-sm text-white my-3 ml-2">Duration</label>
              </div>
              <Input css={{backgroundColor:"$white"}} clearable bordered placeholder="Duration" initialValue="" />
              </div>
            </Grid>
            <div className="flex flex-col mx-auto w-full">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"1.6vh",marginLeft:"1em"}} ><path d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z"></path></svg>
            <label className="text-sm text-white mt-3 ml-2">Eligibility</label>
            </div>
            <Textarea
              css={{mt:"$5",backgroundColor:"$white"}}
              rows='5'
              fullWidth="true"
              bordered
              placeholder="Eligibility Criteria"
              required
            />
            </div>
            <Grid xs={12} sm={4}>
              <div className="flex flex-col mx-auto w-full">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"1.6vh",marginLeft:"1em"}}><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
              <label className="text-sm text-white my-3 ml-2">Last Date to Apply</label>
              </div>
              <Input type="date" css={{backgroundColor:"$white"}} clearable bordered Placeholder="Last Date to apply" initialValue=""/>
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div className="flex flex-col mx-auto w-full">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"1.6vh",marginLeft:"1em"}}><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
              <label className="text-sm my-3 ml-2">Expected Start Date</label>
              </div>
              <Input type="date" css={{backgroundColor:"$white"}} clearable bordered Placeholder="Expected Start Date" initialValue=""/>
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div className="flex flex-col mx-auto w-full">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"1.6vh",marginLeft:"1em"}}><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path></svg>
              <label className="text-sm text-white my-3 ml-2">No. of Openings</label>
              </div>
              <Input type="number" css={{backgroundColor:"$white"}} clearable bordered Placeholder="No. of Openings" initialValue="" required/>
              </div>
            </Grid>
            <Grid xs={12} sm={12}>
              <div className="flex flex-col mx-auto w-full">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"white",marginTop:"1.6vh",marginLeft:"1em"}}><path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path><path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path></svg>
              <label className="text-sm text-white my-3 ml-2">Skills Required</label>
              </div>
              <Input css={{backgroundColor:"$white"}} clearable bordered Placeholder="Skills" initialValue="" required/>
              </div>
            </Grid>
            <div className="flex flex-col mx-auto w-full">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"4.7vh",marginLeft:"1em"}}><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path></svg>
            <label className="text-sm text-white mt-8 ml-2">Job Description</label>
            </div>
            <Textarea
              css={{mt:"$5",backgroundColor:"$white"}}
              rows='10'
              fullWidth="true"
              bordered
              placeholder="Description of the Job"
              required
            />
            </div>
            <div className="flex flex-col mx-auto w-full">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",marginTop:"4.7vh",marginLeft:"1em"}}><path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path><path d="M7 9h10v2H7zm0 4h5v2H7z"></path></svg>
            <label className="text-sm text-white mt-8 ml-2">Responsibilities</label>
            </div>
            <Textarea
              css={{mt:"$5",backgroundColor:"$white"}}
              rows='10'
              fullWidth="true"
              bordered
              placeholder="Roles and Responsibilities"
              required
            />
            </div>
          </Grid.Container>
          
          {/* <Grid.Container gap={2} >
            <Input clearable bordered label="Job Title" Placeholder="Job Title" initialValue="" />
            <Spacer y={0.5} />
            <Input clearable bordered label="Stipend" Placeholder="Stipend" initialValue="" />
            <Spacer x={0.5} />
          </Grid.Container> */}
          {/* <Textarea
              bordered  
              label="Description of the Job"
              placeholder="Description of the Job"
            /> */}
          <button onClick={handleSubmit} type='submit' className='py-2 px-10 rounded-xl bg-purple-500 text-white ml-6 mt-4 border-white border-2 hover:bg-white hover:text-purple-500 hover:border-purple-500'  >Submit</button>
        </form>
    </div>
    </>:<div className="flex flex-col justify-center items-center">
      <img width="250" src="/assets/images/jobpost.gif"></img>
      <p className="text-4xl text text-lime-500 mb-4">Successfully published the job.</p>
      <p>Check the dashboard for tracking the application.</p>
    </div>
  )
}

export default page