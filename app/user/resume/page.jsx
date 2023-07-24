"use client"
import useSWR from 'swr';
import dynamic from 'next/dynamic';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Spinner from "@components/Spinner"
import {useSession} from "next-auth/react";
const fetcher = async (...args) =>await fetch(...args).then((res) => res.json());
export default function Page() {
const Editor=dynamic(()=>import("@components/Editor"),{ssr:false})
   
    return(
        <div>
          <Editor/>
        </div>
    )
}