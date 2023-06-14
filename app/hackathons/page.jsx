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
      <div className='text-black text-4xl' > Hackathons </div>
      <div className="flex flex-row ">
        <ShowHackathon setHackathon={setHackathon}></ShowHackathon>
        <div>
            <CompleteHackathon post={hackathon}/>
        </div>
      </div>
    </div>
  );
}
