import React from 'react'

import { Input } from "@nextui-org/react";
import Select from "react-select";

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
    <div className='filtercontainer'>
      <div className="none">
      <img width="300" src="/assets/images/alumni1.png"></img>
      </div>
        <div className="pt-16">
          <div style={{backgroundColor:"rebeccapurple",minHeight:"55vh",minWidth:"25vw",marginTop:"-12vh"}} className='filterbox'>
            <div>
              <div className="p-3">
                <Select
                className='text-white'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: 'rebeccapurple',
                    primary: '',
                    neutral0:"",
                    neutral50:"white",
                    neutral30:"white",
                    neutral40:"white",
                  },
                })}
                  options={collegeList}
                  placeholder="Select College"
                  value={selectedCollege}
                  onChange={handleCollege}
                  isSearchable={true}
                  isMulti
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="mt-64 px-10 py-1 border-2 text-white border-purple-400 rounded-xl hover:border-2 hover:border-white">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="none">
        <img className="rounded-3xl mt-9" width="260" src="/assets/images/alumni2.png"></img>
        </div>
    </div>
  )
}

export default AlumniFilter