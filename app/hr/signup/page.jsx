"use client";
import Link from "next/link";
import {useState} from "react"
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import useSWR from 'swr';
import Spinner from "@components/Spinner"
// const HRSignup = () => {
//   return (
//     <div>HRSignup</div>
//   )
// }

// export default HRSignup
import Image from "next/image";
import { useSession } from "next-auth/react";
import Router from "next/navigation";
import { Button } from "@nextui-org/react";

const fetcher = async (...args) => await fetch(...args).then((res) => res.json());
export default function HRSignup() {
  let vari = 0;
  const [posted, setPosted] = useState(false)
  const [err,setErr]=useState(false)
  const { data: session } = useSession();
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher);
  if (error) return <div>userFailed to loadinggggggg</div>;
  if (!data) return <div className="my-60 mx-auto"><Spinner /></div>;
  if (data.role == "HR") {
    // Router.push("/hr");
  }
  const addHR = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("Form Submittedddddd", session?.user.id);
    try {
      const response = await fetch(`/api/verify/${session?.user.id}`, {
        method: "POST",
        body: JSON.stringify({
          companyEmail: e.target[0].value,
          companyName: e.target[1].value,
          contact: e.target[2].value,
          otp: "1234"
        }),
      });
      console.log(response, "here is the response from hr/signup");
      vari = response.status;
      if (response.status == 201) {
        setPosted(true)
        setErr(false)
      }
      if (response.status == 500) {
        setPosted(true)
        setErr(true)
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setIsSubmitting(false);
      // 
      // alert("Submitted");
    }
  };

  return (
    !posted?<div className="bg-blue-100 py-10 px-6 mt-10 mb-20 rounded-xl main-login">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/assets/images/logo-for-website.png"
          alt="logo"
          width={180}
          height={80}
          className="mb-6 font-bold text-center snap-center"
        />
      </div>
      <div className="flex items-center">
        <div className="side1">
          <form onSubmit={addHR}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className=" text-sm font-semibold text-gray-600"
              >
                Company Email *
              </label>
              <input
                type="email"
                required
                placeholder="Enter Company Email"
                className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label
                className=" text-sm font-semibold text-gray-600"
              >
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter Company Name"
                className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 otp">
              <div className="flex flex-col">
                <label
                  htmlFor="text"
                  className=" text-sm font-semibold text-gray-600"
                >
                  Phone Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  required
                  className="phonewidth px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* <div className="mx-4 mt-7 ">
              <button type="submit" className="otppos w-auto text-sm text bg-white text-violet-500 px-5 py-2 my-auto rounded-xl border-2 border-violet-300">
                Get OTP
              </button>
            </div> */}
            </div>
            {/* {vari == 1 ? (
              <>
                <div>
                  <div className=" mb-4">
                    <label className=" text-sm font-semibold text-gray-800">
                      Enter OTP
                    </label>
                    <input className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )} */}
            <div className="mt-10">
              <button type="submit" className="mt-10 py-2 w-full textnew font-semibold border-violet-400 border-2 text-center bg-white hover:border-violet-700 text-violet-700 rounded-xl">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="side2">
          <img width="300" src="/assets/images/frame.png" alt="secure-login"></img>
          <p></p>
        </div>
      </div>
    </div>: err?<div className="flex flex-col items-center justify-center my-20"><img width="700" src="/assets/images/500error.png" alt="500 Error"></img></div>: <div className="flex flex-col justify-center items-center my-32">
      <img width="250" src="/assets/images/jobpost.gif"></img>
      <p className="text-4xl text text-white mb-4">You are authorized as an HR</p>
    </div>
  );
}
