"use client"
import { Input, Spacer, Textarea, Grid } from "@nextui-org/react";
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
  return (
    <div className='justify-center w-full align-center justify-items-center hrjobs'>
          <h1 className='font-bold text-5xl text-left mb-5'>
            <p className='text text-4xl text-center text-white mb-8'>Post a Job and hire the best Talent</p>
          </h1>
        <form onSubmit={createNewJob} className='w-full'>
          <Grid.Container gap={2} >
            <Grid xs={12} sm={4}>
              <Input css={{backgroundColor:"$white",mx:"auto"}} clearable bordered placeholder="Job Title" initialValue="" />
            </Grid>
            <Grid xs={12} sm={4}>
              <Input css={{backgroundColor:"$white",mx:"auto"}} clearable bordered Placeholder="Stipend" initialValue="" />
            </Grid>
            <Grid xs={12} sm={4}>
              <Input css={{backgroundColor:"$white",mx:"auto"}} clearable bordered placeholder="Company Name" initialValue="" />
            </Grid>
            <Grid xs={12} sm={4}>
              <Input css={{backgroundColor:"$white",mx:"auto"}} clearable bordered Placeholder="Duration" initialValue="" />
            </Grid>
            <Grid xs={12} sm={4}>
              <Input css={{backgroundColor:"$white",mx:"auto"}} clearable bordered Placeholder="Last date to apply" initialValue="" />
            </Grid>
            <Grid xs={12} sm={4}>
              <Input css={{backgroundColor:"$white",mx:"auto"}} clearable bordered Placeholder="Expected Start Date" initialValue="" />
            </Grid>
            <Grid xs={12} sm={4}>
              <Input css={{backgroundColor:"$white",mx:"auto"}} clearable bordered Placeholder="Skills Required" initialValue="" />
            </Grid>
            <Textarea
              css={{mt:"$10",ml:"$6",backgroundColor:"$white"}}
              rows='10'
              fullWidth="true"
              bordered
              placeholder="Description of the Job"
            />
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
          <button type='submit' className='py-2 px-10 rounded-xl bg-purple-500 text-white ml-6 mt-8 border-white border-2 hover:bg-white hover:text-purple-500 hover:border-purple-500'  >Submit</button>
        </form>
    </div>
  )
}

export default page