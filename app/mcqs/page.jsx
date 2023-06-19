"use client"
import React from 'react'
import { Card, Row, Text } from "@nextui-org/react";
const page = () => {
  let categories=[{img:"/assets/images/engineer.png",name:"Engineering"},{img:"/assets/images/aptitude.png",name:"Aptitude"},{img:"/assets/images/aptitude.png",name:"Aptitude"},{img:"/assets/images/aptitude.png",name:"Aptitude"},{img:"/assets/images/engineer.png",name:"Engineering"},{img:"/assets/images/engineer.png",name:"Engineering"}]
  return (
    <div className='my-10'>
      <div style={{backgroundColor:"whitesmoke"}} className="none flex justify-between pl-2 pr-20 py-2 mb-14">
        <img src="/assets/images/energize.png"></img>
        <p className='text-center text-4xl text-sky-500 text font-semibold my-auto'>Energize your confidence with quizzes.<br/>Get Yourself Ready !</p>
      </div>
      <p className='text-center text-4xl text font-semibold text-white mb-8'>Test your knowledge with an interactive online quiz !!</p>
      <p className='text-center text text-white mb-4'>MCQs to practice multiple choice questions and answers on school, college, university courses with placement tests. Job seekers competing for a job should attempt a series of job tests for better grades and learning to prepare themselves for tests as well as interviews.</p>
     <div className="categorybox mt-20 mx-20">
      {categories.map((ele,i)=>{
        return(
          <div className="mb-10 ml-6">
          <Card isHoverable >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={ele.img}
                objectFit="fit"
                width="100%"
                height="150px"
                alt={ele.name}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>{ele.name}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </div>
        )
      })}
     </div>
    </div>
  )
}

export default page