"use client"
import CompleteHackathon from "@components/CompleteHackathon";
import HackathonComponent from "@components/HackathonComponent";
import ShowHackathon from "@components/hackathon/ShowHackathon";
import React from "react";
import { useState } from "react";


export default function Page() {
  const [hackathon, setHackathon] = useState(null);
  return (
    <div>
      <div style={{color:"darkslateblue"}} className='text text-4xl text-center font-semibold text-4xl mb-8' > Hackathons- Bring Your Coding Skills</div>
      <div className="flex">
        <ShowHackathon setHackathon={setHackathon}></ShowHackathon>
        <div>
            <CompleteHackathon post={hackathon}/>
        </div>
      </div>
    </div>
  );
}
