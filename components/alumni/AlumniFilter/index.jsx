import React from 'react'

import { Input } from "@nextui-org/react";
import Select from "react-select";
import styles from "./styles.module.css"

const AlumniFilter = ({selectedCollege, setSelectedCollege}) => {
    const collegeList = [
        { value: "Delhi", label: "Delhi" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Dehradun", label: "Dehradun" },
        { value: "Patna", label: "Patna" },
        { value: "Gaya", label: "Gaya" },
        { value: "Remote", label: "Remote" },
      ];
      function handleCollege(data) {
        setSelectedCollege(data);
      }
  return (
    <div className={styles["filtercontainer"]}>
      <div className={styles["none"]}>
      <img width="300" src="/assets/images/alumni1.png"></img>
      </div>
        <div className="pt-16">
          <div style={{backgroundColor:"darkslateblue",minWidth:"25vw",marginTop:"-10vh"}} className='alumniback rounded-xl p-4'>
            <div className='flex flex-col items-center mx-10'>
              <p className={`text-3xl text-center text-white ${styles["textnew"]} py-4`}>Meet the Alumni's</p>
              <p className={`text-2xl text-center text-white ${styles["textnew"]}`}>Together again !!</p>
              <p className={`text-md text-white text-center ${styles["textnew"]} pt-6`}>Build a network and increase your connections.</p>
              <p className={`text-md text-white text-center ${styles["textnew"]} pt-2`}>Connect with the community and build relationships.</p>
              <img className="py-5" width="100" src="/assets/images/alumniback.png"></img>
            </div>
          </div>
        </div>
        <div className={styles["none"]}>
        <img style={{transform:"rotate(180deg)"}} className="rounded-3xl" width="300" src="/assets/images/alumni1.png"></img>
        </div>
    </div>
  )
}

export default AlumniFilter