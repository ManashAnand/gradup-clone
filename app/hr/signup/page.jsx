"use client"
import Link from 'next/link';
 import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
 import { StyledBadge } from "@styles/StyledBadged";
 import { IconButton } from "@styles/IconButton";
 import { EyeIcon } from "@styles/EyeIcon";
 import { EditIcon } from "@styles/EditIcon";
 import { DeleteIcon } from "@styles/DeleteIcon";
 
// const HRSignup = () => {
//   return (
//     <div>HRSignup</div>
//   )
// }

// export default HRSignup
import Image from "next/image"
import { Button } from '@nextui-org/react';
export default function HRSignup() {
  const addHR = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("Form Submittedddddd", session?.user.id);
    try {
      const response = await fetch(`/api/auth/${session?.user.id}`, {
        method: "POST",
        body: JSON.stringify({
          a:"a"
        }),
      });
      console.log(response.status)
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
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Image
          src='/assets/images/TalentConnects.png'
          alt='logo'
          width={80}
          height={80}
          className='text-3xl font-bold text-center snap-center'
        />
        </div>
          <form className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Phone Number
                </label>
                <input 
                    type="text" 
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>
            <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Company Name
                </label>
                <input 
                    type="text" 
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>
            <div className="mt-2">
              {/* <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                SignUp
              </button> */}
              <Tooltip
                content="Delete user"
                color="error"
                onClick={addHR }
            >
            <IconButton className='mx-15'>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
            </Tooltip>
            </div>
            
          </form>
        </div>
      </div>
    );
  }