"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = ({id}) => {
    const { data, error } = useSWR( `/api/mcq/${id}`, fetcher)
  // ... handle loading and error states
  
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div>Loading...</div>;
  console.log("From quiz Page",data);
  return (
    <div>
        {data}
    </div>
  )
}

export default page