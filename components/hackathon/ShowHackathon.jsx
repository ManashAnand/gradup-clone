"use client";
import CompleteHackathon from "@components/CompleteHackathon";
import HackathonComponent from "@components/HackathonComponent";
import React from "react";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "@components/Spinner"
const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function getData() {
  const response = await fetch("http://localhost:3000/api/hackathon");
  const data = await response.json();
  return data;
}
const ShowHackathon = ({ setHackathon,display,setDisplay,display1,setDisplay1 }) => {
  const { data, error } = useSWR(
    "http://localhost:3000/api/hackathon",
    fetcher
  );
  if (error) return <div>Failed to loadinggggggg</div>;
  if (!data) return <div className="my-60 mx-auto"><Spinner/></div>;
  const posts = data;
  console.log("INSIDE SHOW HACKATHON")
  return (
    <div>
      <div className="mx-5 hackathons">
        {posts.map((post) => (
          <div onClick={(e) => setHackathon(post)} className="mb-10">
            <HackathonComponent display={display} display1={display1} setDisplay={setDisplay} setDisplay1={setDisplay1} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowHackathon;
