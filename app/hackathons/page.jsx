"use client"
import CompleteHackathon from "@components/CompleteHackathon";
import ShowHackathon from "@components/hackathon/ShowHackathon";
import React from "react";
import { useState } from "react";


export default function Page() {
  const [hackathon, setHackathon] = useState();
  const [display,setDisplay]=useState("block")
  const [display1,setDisplay1]=useState("grid")
  return (
    <div>
      <div style={{color:"deepskyblue"}} className='text text-4xl animate-charcter text-center font-semibold my-8 mr-4' > Hackathons- Bring Your Coding Skills</div>
      <div className="flex">
        <ShowHackathon display={display} setDisplay={setDisplay} display1={display1} setDisplay1={setDisplay1} setHackathon={setHackathon}></ShowHackathon>
        <div>
        <CompleteHackathon display={display} setDisplay={setDisplay} display1={display1} setDisplay1={setDisplay1} post={hackathon}/>
        </div>
      </div>
    </div>
  );
}
