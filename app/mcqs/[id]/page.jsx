"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import HelpIcon from '@mui/icons-material/Help';
import Link from "next/link";
import { useState,useEffect } from "react";
const fetcher = (url) => fetch("https://api.jsonbin.io/v3/b/649318cf8e4aa6225eb211a2").then((res) => res.json());
const page = ({id}) => {
  const [que,setQue]=useState([])
  const [current,setCurrent]=useState("")
  const [message1,setMessage1]=useState(false)
  const [message2,setMessage2]=useState(false)
  function handleClick(position,index,ans){
    console.log(position)
    setCurrent(position);
    index+1===ans? setMessage1(true):setMessage2(true)
    console.log(current)
  }
  const { data, error } = useSWR( "/api/mcq/", fetcher);
  useEffect(()=>{
    let quest=data?data.record.map((ele,i)=>{
      return ele.questions
    }):""
    console.log(quest)
    setQue(quest[0])
  },[data])
  useEffect(()=>{
    setTimeout(()=>{
      message1?setMessage1(false):""
      message2?setMessage2(false):""
    },1000)
  })
  // ... handle loading and error states
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data.record)
  return (
    <div className="mb-20 w-screen">
    <p className="text-4xl text-center text-white text mt-8 mb-12">{`Top ${data.record[0]._id} MCQ's`}</p>
    <div>
      {que&&<div>{que.map((ele,i)=>{
        return(
          <div key={i}>
          <div className="question text-center bg-sky-300 rounded-xl text"><span className="px-1 pt-2 pb-3 bg-white rounded-full"><HelpIcon fontSize="large" color="primary"/></span> {ele.question}</div>
          <div className="flex flex-col mt-4 mb-2">{ele.options.map((item,j)=>{
            return(
              <button onClick={()=>handleClick(i,j,ele.answer)} className="options rounded-2xl text text-sm text-center bg-white text-black mb-2 hover:bg-yellow-100 focus:font-semibold">
                {item}
              </button>
            )
          })}</div>
          <div className="h-20 mb-2">
          {current===i && message1 && <div className="result rounded-md text-center text-black bg-green-300">Yayy!! Correct Answer.</div>}
          {current===i && message2 && <div className="result rounded-md text-center text-black bg-red-300">Oops!! Wrong Answer. Please try again.</div>}
          </div>
          </div>
        )
      })}</div>}
    </div>
    </div>
  )
}

export default page