import React from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import AlumniCard from "./AlumniCard";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AlumniShow = ({ selectedCollege }) => {
  const [alumniData, setAlumniData] = useState([]);
  var ourData;
  useEffect(() => {
    fetch("http://localhost:3000/api/alumni", {
      method: "POST",
      body: JSON.stringify({
        collegeName: selectedCollege,
        college: "NIT Raipur",
      }),
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAlumniData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);
  return (
    <div className="alumnicardcontainer px-4 rounded-xl">
      {alumniData.map((d) => (
        <AlumniCard data={d} />
      ))}
    </div>
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
