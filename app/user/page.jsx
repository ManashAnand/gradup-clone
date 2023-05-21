"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
import Link from 'next/link';
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
        </section>
      <Link href={'/user/applications'}>
        <button className='outline_btn'>Your applications</button>
      </Link>
    </div>
  );
}