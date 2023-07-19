'use client'
import React from 'react'
import Link from 'next/link';
import useSWR from 'swr';
import { useSession } from "next-auth/react";
import { Grid, Card, Col, Text } from "@nextui-org/react";
const fetcher = async (...args) => await fetch(...args).then((res) => res.json());
const HR = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p className='text-white text-xl text-center mt-10'>Name : {session?.user.name}</p>
      <p className='text-white text-xl text-center'>Email : {session?.user.email}</p>
    <div className='my-20 disp'>
      <Card css={{ w: "90%" }}>
        <Card.Header isBlurred css={{ position: "absolute", bgBlur: "#0f111466", zIndex: 1, bottom: 0 }}>
          <Col>
          <Text size={15} css={{ textAlign: "center",marginBottom:"$6" }} weight="bold" transform="uppercase" color="#ffffff">
              Add Jobs
            </Text>
            <Text css={{ textAlign: "center",marginBottom:"$4" }}>
              <Link href='/hr/addjob' className='bg-blue-400 px-10 rounded-xl py-2 text-white text-center'>
                Add Job
              </Link>
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src="/assets/images/jobpost.png"
          width="100%"
          height={280}
          objectFit="cover"
          alt="Card image background"
        />
      </Card>
      <Card css={{ w: "90%" }}>
        <Card.Header isBlurred css={{ position: "absolute", bgBlur: "#0f111466", zIndex: 1, bottom: 0 }}>
          <Col>
            <Text size={15} css={{ textAlign: "center",marginBottom:"$6" }} weight="bold" transform="uppercase" color="#ffffff">
              Posted Jobs
            </Text>
            <Text css={{ textAlign: "center",marginBottom:"$4" }}>
              <Link href='/hr/posted-jobs' className='bg-blue-400 px-10 rounded-xl py-2 text-white text-center'>
                Posted Jobs
              </Link>
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src="/assets/images/jbs.png"
          width="100%"
          height={280}
          objectFit="cover"
          alt="Card image background"
        />
      </Card>
      {/* <Link href='/hr/addjob' className='bg-blue-400 px-20 py-2 text-white text-center mb-10'>
        Add Job
      </Link>
      <Link href='/hr/posted-jobs' className="bg-blue-400 px-16 py-2 text-white text-center" >
        Jobs Posted
      </Link> */}
    </div>
    </div>
  )
}

export default HR















// "use client";

// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import Profile from "@components/Profile";

// const HR = () => {
//   const router = useRouter();
//   const { data: session } = useSession();

//   const [myPosts, setMyPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch(`/api/users/${session?.user.id}/posts`);
//       const data = await response.json();

//       setMyPosts(data);
//     };

//     if (session?.user.id) fetchPosts();
//   }, [session?.user.id]);

//   const handleEdit = (post) => {
//     router.push(`/update-prompt?id=${post._id}`);
//   };

//   const handleDelete = async (post) => {
//     const hasConfirmed = confirm(
//       "Are you sure you want to delete this prompt?"
//     );

//     if (hasConfirmed) {
//       try {
//         await fetch(`/api/prompt/${post._id.toString()}`, {
//           method: "DELETE",
//         });

//         const filteredPosts = myPosts.filter((item) => item._id !== post._id);

//         setMyPosts(filteredPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <Profile
//       name='My'
//       desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
//       data={myPosts}
//       handleEdit={handleEdit}
//       handleDelete={handleDelete}
//     />
//   );
// };

// export default HR;
// import { signOut, useSession } from "next-auth/react"

// export default function Dashboard() {
//     const { data: session } = useSession()
//     const user = session?.user;
//     if (user?.role !== "admin") {
//         return (
//             <section className="grid h-screen place-items-center">
//                 <div className="w-25">
//                     <p>You do not have permission to view this page!</p>
//                 </div>
//             </section>
//         );
//     }
//     return (
//         <section className="grid h-screen place-items-center">
//             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello {session?.user?.name}</h2><br />
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You are an admin user currently signed in as {session?.user?.email}.</p>
//                 <button
//                     type="button"
//                     onClick={() => signOut()}
//                     className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
//                     Logout
//                 </button>
//             </div>
//         </section>
//     )
// }