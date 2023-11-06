'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json())
const HR = () => {
  const list = [
    { img: '/assets/images/jbs.png', title: 'Add Jobs', link: '/hr/addjob' },
    {
      img: '/assets/images/jobpost.png',
      title: 'Posted Jobs',
      link: '/hr/posted-jobs',
    },
    { img: '/assets/images/jbs.png', title: 'Get Premium', link: '/premium' },
  ]
  const { data: session } = useSession()
  return (
    <div className='w-screen '>
      <p className='text-white text-xl text-center mt-10'>
        Name : {session?.user.name}
      </p>
      <p className='text-white text-xl text-center'>
        Email : {session?.user.email}
      </p>
      <div className=' flex justify-center my-12 mx-24'>
        <Grid
          container
          spacing={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {list.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ maxWidth: 300, marginX: 'auto' }}>
                <CardMedia
                  sx={{ height: 170 }}
                  image={item.img}
                  title='courses'
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                  {/* <Typography sx={{ textAlign: "center", marginY: "auto" }} gutterBottom variant="subtitle1" component="div">
                  {item.title}
                </Typography> */}
                  <Typography
                    sx={{ textAlign: 'center', marginY: 'auto' }}
                    gutterBottom
                    variant='subtitle1'
                    component='div'
                  >
                    <a href={item.link}>
                      <Button variant='outlined' className='rounded-xl mt-2'>
                        {item.title}
                      </Button>
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <Link href='/hr/addjob' className='bg-blue-400 px-20 py-2 text-white text-center mb-10'>
        Add Job
      </Link>
      <Link href='/hr/posted-jobs' className="bg-blue-400 px-16 py-2 text-white text-center" >
        Jobs Posted
      </Link> */}
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
