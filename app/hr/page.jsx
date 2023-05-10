import React from 'react'

const HR = () => {
  return (
    <div>HR</div>
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