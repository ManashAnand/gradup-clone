"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import Link from "next/link";
import { useState,useEffect } from "react";
const fetcher = (url) => fetch("https://api.jsonbin.io/v3/b/649318cf8e4aa6225eb211a2").then((res) => res.json());
const page = ({id}) => {
  const [que,setQue]=useState([])
  const [color,setColor]=useState("")
  function handleClick(index){
    (index+1)===1?setColor("green"):setColor("red")
  }
  const { data, error } = useSWR( "/api/mcq/", fetcher);
  useEffect(()=>{
    let quest=data?data.record.map((ele,i)=>{
      return ele.questions
    }):""
    console.log(quest)
    setQue(quest[0])
  },[data])
  // ... handle loading and error states
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data.record)
  return (
    <div className="mb-20 w-screen">
    <p className="text-4xl text-center text-white text mt-8 mb-12">{`Top ${id} MCQ's`}</p>
    <div className="text-white mx-32">
      {que&&<div>{que.map((ele,i)=>{
        return(
          <>
          <div className="text-left text-xl text">{`${i+1}) ${ele.question}`}</div>
          <div className="flex flex-col mt-4 mb-6">{ele.options.map((item,j)=>{
            return(
              <button onClick={()=>handleClick(j)} className="text-left ml-6 mb-1 px-10 py-2 w-1/3">
                {item}
              </button>
            )
          })}</div>
          </>
        )
      })}</div>}
    </div>
    </div>
  )
}

export default page