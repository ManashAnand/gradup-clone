import React from "react";
import { useEffect, useState } from "react";
import {useSession} from "next-auth/react";
import useSWR from "swr";
import AlumniCard from "../AlumniCard";
import Spinner from "@components/Spinner"
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import styles from "./styles.module.css"

const AlumniShow = ({data}) => {
  const [alumniData, setAlumniData] = useState([]);
  const [collegeName,setcollegeName]=useState("")

  const [loading,setLoading]=useState(true)
  useEffect(() => {
    fetch("/api/alumni", {
      method: "POST",
      body: JSON.stringify({
        college:data?(data.education.length>0?data.education[0].collegeName:""):(""),
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAlumniData(data);
        setLoading(false)
      })
      .catch((error) => {
      })
      .finally(() => {});
  }, []);
  return (
    <>
    {loading && <Spinner/>}
    <div className={`${styles["alumnicardcontainer"]} px-4 rounded-xl`}>
      {alumniData.map((d) => (
        <AlumniCard data={d} />
      ))}
    </div>
    </>
  );
  //   const [alumniData, setAlumnniData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     try {
  //       const fetchData = () => {
  //         fetch("http://localhost:3000/api/alumni", {
  //           method: "GET",
  //           body: JSON.stringify({
  //             // collegeName:selectedCollege,
  //             college: "NIT Raipur",
  //           }),
  //         })
  //           .then((response) => {
  //             console.log("Response",response.status);
  //             return response.json();
  //           })
  //           .then((data) => {
  //             console.log(data);
  //           }).catch((error)=>{
  //             console.log("Error",error);
  //           })
  //           .finally(() => {
  //             setLoading(false);
  //           });
  //       };
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       console.log("Finally");
  //       setLoading(false);
  //     }
  //   }, [selectedCollege]);
  //   if (loading) {
  //     return <div>Loading Data</div>;
  //   }
  //   return <div>sdfsdfsdfsdfsdf </div>;
};

export default AlumniShow;
