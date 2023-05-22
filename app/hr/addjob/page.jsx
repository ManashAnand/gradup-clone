"use client"
import { Input, Spacer, Textarea, Grid } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import useSWR from 'swr';
import Link from "next/link";
import { useRouter } from "next/navigation";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = ({params}) => {
    const router = useRouter();
    // const { data: session } = useSession();
    // const { data, error } = useSWR( `/api/jobs/${params.id}`, fetcher)
    // if (error) return <div>Failed to loadinggggggg job data</div>;
    // if (!data) return <div>Loading...</div>;
    // const jobs=data;

    const createNewJob = async (e) => {
      e.preventDefault();
      // setIsSubmitting(true);
      console.log("Form Submitted");
      try {
        const response = await fetch("/api/jobs/new", {
          method: "POST",
          body: JSON.stringify({
            title:"SDE",
            isIntern: false,
            companyName: "Talent Connect",
            companyLink: "www.talentconnects.com",
            duration: "Always",
            stipend: "50000",
            lastDate: "26/05/2023",
            expectedStartDate: "01/06/2023",
            skillsRequired: ["ReactJS"],
            eligiblilty: ["1 year experience"],
            perks: ["Health Insurance"],
            noOfOpenings: 3,
            workingHours: "9 a.m. to 5 p.m.",
            postedDate: "21/05/2023",
            responsilities:["Work with Web team to write clean code"],
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
    <div className='justify-center w-full align-center justify-items-center'>
          <h1 className='mt-3 font-bold text-5xl text-left mb-5'>
            <span className='blue_gradient'>Post a Job and hire the best Talent</span>
          </h1>
        <form onSubmit={createNewJob} className='w-4/5 '>
          <Grid.Container gap={2} >
            <Grid xs={4}>
              <Input clearable bordered label="Job Title" Placeholder="Job Title" initialValue="" />
            </Grid>
            <Grid xs={4}>
              <Input clearable bordered label="Stipend" Placeholder="Stipend" initialValue="" />
            </Grid>
            <Textarea
              rows='10'
              fullWidth="true"
              bordered
              label="Description of the Job"
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
          <button type='submit' className='black_btn2 mt-5'  >Submit</button>
        </form>
    </div>
  )
}

export default page