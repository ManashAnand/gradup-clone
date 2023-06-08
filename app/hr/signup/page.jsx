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
  let vari = 0;
  
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
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden w-full">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/images/TalentConnects.png"
            alt="logo"
            width={80}
            height={80}
            className="text-3xl font-bold text-center snap-center"
          />
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Company Name
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 flex flex-row">
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mx-4 mt-2">
              <button type="submit" className="black_btn mt-5">
                Get OTP
              </button>
            </div>
            </div>
            {vari == 1 ? (
              <>
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-800">
                      Enter OTP
                    </label>
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="mx-4 mt-2">
              <button type="submit" className="black_btn2 mt-5">
                Submit
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}
