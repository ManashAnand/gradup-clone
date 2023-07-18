"use client";
import Link from "next/link";
import {useState,useEffect} from "react"
import { useRouter } from "next/navigation";
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
  const router=useRouter();
  const [emaildata,setEmaildata]=useState("")
  const [posted, setPosted] = useState(false)
  const [err,setErr]=useState(false)
  const [message,setMessage]=useState(false)
  function handleChange(e){
    setEmaildata(e.target.value)
  }
  useEffect(()=>{
    if(emaildata.includes("gmail")||emaildata.includes("hotmail")|| emaildata.includes("yahoo")|| emaildata.includes("outlook")){
      setMessage(true)
    }
    else{
      setMessage(false)
    }
  },[emaildata])
  const { data: session } = useSession();
  console.log(data)
  // useEffect(()=>{
  //   data?.role==="HR"?router.push("/hr"):""
  // })
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher);
  if (error) return <div>userFailed to loadinggggggg</div>;
  if (!data) return <div className="my-60 mx-auto"><Spinner /></div>;
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
          aboutCompany:e.target[3].value,
          otp: "1234"
        }),
      });
      console.log(response.status);
      vari = response.status;
      console.log(vari)
      if (response.status == 201) {
        router.push('/hr')
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
    !posted?<div className="bg-blue-100 text-left py-10 px-6 mt-10 mb-20 rounded-xl main-login">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/assets/images/logo-for-website.png"
          alt="logo"
          width={180}
          height={80}
          className=" font-bold text-center snap-center"
        />
      </div>
      <p className="text-blue-800 text-center text-xl mb-7">"Attention HR professionals: Take the next step in finding exceptional talent! Login now and post captivating job opportunities to attract top candidates and build your dream team."</p>
      <div className="flex items-center">
        <div className="side1">
          <form onSubmit={addHR}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className=" text-sm ml-3 text-left font-semibold text-gray-600"
              >
                Company Email *
              </label>
              <input
                type="email"
                required
                value={emaildata}
                onChange={handleChange}
                placeholder="Enter Company Email"
                className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {message && <p className="text-red-500 text-sm ml-2 mt-1">Please Enter company mail only !</p>}
            </div>
            <div className="mb-4">
              <label
                className=" text-sm ml-3 text-left font-semibold text-gray-600"
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
                  className=" text-sm ml-3 font-semibold text-gray-600"
                >
                  Phone Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  pattern="[0-9]{10}"
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
            <div className="mb-4 mt-2">
              <label className=" text-sm ml-3 text-left font-semibold text-gray-600">
                About Company *
              </label>
              <textarea
                rows={8}
                required
                placeholder="Enter a brief introduction about your company"
                className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
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
            <div className="mt-2">
              <button type="submit" disabled={message?true:false} className="mt-10 py-2 w-full textnew font-semibold border-violet-400 border-2 text-center bg-white hover:border-violet-700 text-violet-700 rounded-xl">
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
