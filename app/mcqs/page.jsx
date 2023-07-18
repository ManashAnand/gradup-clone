"use client"
import React from 'react'
import useSWR from "swr";
import Spinner from "@components/Spinner"
import { Card, Row, Text } from "@nextui-org/react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const page = () => {
  const { data, error } = useSWR( '/api/mcq/', fetcher)
  // ... handle loading and error states
  
  if (error) return <div>Failed to loadinggggggg job data</div>;
  if (!data) return <div className='mx-auto my-60'><Spinner/></div>;
  console.log("From quiz Page",data);
  // let categories=[{img:"/assets/images/engineer.png",name:"Engineering"},{img:"/assets/images/aptitude.png",name:"Aptitude"}]
  return (
    <div className='my-10'>
      <div style={{backgroundColor:"whitesmoke"}} className="none flex justify-between pl-2 pr-20 py-2 mb-14">
        <img src="/assets/images/energize.png"></img>
        <p className='text-center text-4xl text-sky-500 text font-semibold my-auto'>Energize your confidence with quizzes.<br/>Get Yourself Ready !</p>
      </div>
      <p className='text-center text-4xl animate-charcter textnew font-semibold text-white mb-8'>Test your knowledge with an interactive online quiz !!</p>
      <p className='text-center textnew text-white mb-4'>MCQs to practice multiple choice questions and answers on school, college, university courses with placement tests. Job seekers competing for a job should attempt a series of job tests for better grades and learning to prepare themselves for tests as well as interviews.</p>
     <div className="categorybox mt-20 mx-20">
      {data?.map((ele,i)=>{
        return(
          <div className="mb-10 mx-4">
          <a href={`/mcqs/${ele._id}`}>
          <Card isHoverable >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="/assets/images/engineer.png"
                objectFit="fit"
                width="260px"
                height="150px"
                alt={ele.name}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>{ele._id}</Text>
              </Row>
            </Card.Footer>
          </Card>
          </a>
        </div>
        )
      })}
     </div>
    </div>
  )
}

export default page