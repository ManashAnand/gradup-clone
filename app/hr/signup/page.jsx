"use client";
import Link from "next/link";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import useSWR from 'swr';

// const HRSignup = () => {
//   return (
//     <div>HRSignup</div>
//   )
// }

// export default HRSignup
import Image from "next/image";
import {useSession} from "next-auth/react";
import Router from "next/navigation";
import { Button } from "@nextui-org/react";

const fetcher = async (...args) =>await fetch(...args).then((res) => res.json());
export default function HRSignup() {
  let vari =0;
  
  const { data: session } = useSession();
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher);
  if (error) return <div>userFailed to loadinggggggg</div>;
  if (!data) return <div>Loading...</div>;
  if(data.role=="Hr"){
    Router.push("/hr");
  }
  const addHR = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("Form Submittedddddd", session?.user.id);
    try {
      const response = await fetch(`/api/verify/${session?.user.id}`);
      console.log(response.status);
      vari=response.status;
    } catch (error) {
      console.log(error);
    } finally {
      // setIsSubmitting(false);
      // alert("Submitted");
    }
  };

  return (
    <div className="bg-violet-200 p-10 mt-10 rounded-xl main-login">
    <div style={{display: "flex",justifyContent: "center"}}>
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="mb-6 font-bold text-center snap-center"
          />
        </div>
    <div className="flex items-center">
        <div className="side1">
        <form>
        <div className="mb-4">
            <label
              htmlFor="email"
              className=" text-sm font-semibold text-gray-800"
            >
              Company Email
            </label>
            <input
              type="email"
              className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className=" text-sm font-semibold text-gray-800"
            >
              Company Name
            </label>
            <input
              type="text"
              className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 otp">
            <div className="flex flex-col">
              <label
                htmlFor="text"
                className=" text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="phonewidth px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mx-4 mt-7 ">
              <button type="submit" className="otppos w-auto text-sm font-semibold text bg-white text-violet-500 px-5 py-2 my-auto rounded-xl border-4 border-violet-300">
                Get OTP
              </button>
            </div>
            </div>
            {vari == 1 ? (
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
            )}
            <div className="mt-6">
              <button type="submit" className="mt-5 py-3 w-full font-bold border-violet-300 border-4 text-center bg-white text-violet-500 rounded-xl">
                Submit
              </button>
            </div>
        </form>
        </div>
      <div className="side2">
        <img width="300" src="/assets/images/loginhr.gif" alt="secure-login"></img>
        <p></p>
      </div>
    </div>
    </div>
  );
}
