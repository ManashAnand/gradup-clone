"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Profile() {
  const { data: session } = useSession();
  const { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher)
  if (error) return <div>Failed to loadinggggggg</div>;
  if (!data) return <div>Loading...</div>;
 
  return (
    <div>
        <section className='w-full'>
          <h1 className='head_text text-left'>
            <span className='blue_gradient'>{data.name}</span>
          </h1>
          <p className='desc text-left'>{data.email}</p>

      {/* <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div> */}
    </section>
      <h1>{data.name}</h1>
      {/* <p>{data.email}</p>
      <h1>{session?.user.name}</h1> */}
      {/* <p>{data.email}</p> */}
    </div>
  );
}