"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Spinner from "@components/Spinner"
const fetcher = (...args) => fetch(...args).then((res) => res.json());


const page = ({params}) => {
    let index=1;
  const { data: session } = useSession();
  const { data, error } = useSWR( `/api/hr/${session?.user.id}/postedJob/${params.id}`, fetcher)
  // ... handle loading and error states
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div className="my-60 mx-auto"><Spinner/></div>;
  console.log("data come isssssssssssssssssssssssssssss",data);
  return (
    <div>

    </div>
  )
}

export default page