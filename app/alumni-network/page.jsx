"use client"
import {useSession} from "next-auth/react";
import useSWR from "swr";
import Spinner from "@components/Spinner"
import AlumniFilter from '@components/alumni/AlumniFilter'
import AlumniShow from '@components/alumni/AlumniShow'
import React from 'react'
import { useState } from 'react'
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = () => {
    const [selectedCollege, setSelectedCollege]=useState()
    const { data: session } = useSession();
  const [alumniData, setAlumniData] = useState([]);
  const [collegeName,setcollegeName]=useState("")

  const [loading,setLoading]=useState(true)
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher)
  if (error) return <div></div>;
  if (!data) return <div className="my-60"><Spinner/></div>;
  console.log("mohittttttttttttt", data);
  return (
    <>
      <div className="alumnitop w-full mt-6">
        <div className="my-auto">
         <p className="text-5xl text mb-4">Alumni Network</p>
         <p><em>"Nobody is bothered about its institution more than<br/>its Alumni"</em></p>
        </div>
        <img width="400" src="/assets/images/alumni.png"></img>
      </div>
      <div>
        <AlumniFilter setSelectedCollege={setSelectedCollege} />
        <AlumniShow selectedCollege={selectedCollege} data={data}/>
      </div>
    </>
  )
}

export default page