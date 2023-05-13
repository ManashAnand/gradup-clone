"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import { Card, Grid, Text, Link } from "@nextui-org/react";

const page = () => {
    const { data: session } = useSession();
    const { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher)
    if (error) return <div>Failed to loadinggggggg</div>;
    if (!data) return <div>Loading...</div>;
  return (
    <div>
        <section>
        <h1 className='secondary_text text-left'>
            <span className='blue_gradient'>Your Expired Applications</span>
        </h1>
        </section>
    </div>
  )
}

export default page