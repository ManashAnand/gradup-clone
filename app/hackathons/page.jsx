"use client"
import CompleteHackathon from "@components/CompleteHackathon";
import HackathonComponent from "@components/HackathonComponent";
import ShowHackathon from "@components/hackathon/ShowHackathon";
import React from "react";
import { useState } from "react";


export default function Page() {
  const [hackathon, setHackathon] = useState(null);
  const [display,setDisplay]=useState("block")
  const [display1,setDisplay1]=useState("block")
  return (
    <div>
      <div style={{color:"darkslateblue"}} className='text text-4xl text-center font-semibold text-4xl mb-8 mr-4' > Hackathons- Bring Your Coding Skills</div>
      <div className="flex">
        <ShowHackathon display={display} setDisplay={setDisplay} display1={display1} setDisplay1={setDisplay1} setHackathon={setHackathon}></ShowHackathon>
        <div>
            <CompleteHackathon display={display} setDisplay={setDisplay} display1={display1} setDisplay1={setDisplay1} post={hackathon}/>
        </div>
      </div>
    </div>
  );
}
