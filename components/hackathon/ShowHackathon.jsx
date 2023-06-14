"use client";
import CompleteHackathon from "@components/CompleteHackathon";
import HackathonComponent from "@components/HackathonComponent";
import React from "react";
import { useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function getData() {
  const response = await fetch("http://localhost:3000/api/hackathon");
  const data = await response.json();
  return data;
}
const ShowHackathon = ({ setHackathon }) => {
  const { data, error } = useSWR(
    "http://localhost:3000/api/hackathon",
    fetcher
  );
  if (error) return <div>Failed to loadinggggggg</div>;
  if (!data) return <div>Loading...</div>;
  const posts = data;
  console.log("INSIDE SHOW HACKATHON")
  return (
    <div>
      <div className="mx-5">
        {posts.map((post) => (
          <div onClick={(e) => setHackathon(post)} className="mb-2">
            <HackathonComponent post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowHackathon;
