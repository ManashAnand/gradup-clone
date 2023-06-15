import React from 'react'

import { Input } from "@nextui-org/react";
import Select from "react-select";

const AlumniFilter = ({selectedCollege, setSelectedCollege}) => {
    const collegeList = [
        { value: "delhi", label: "delhi" },
        { value: "mumbai", label: "mumbai" },
        { value: "dehradun", label: "dehradun" },
        { value: "patna", label: "patna" },
        { value: "gaya", label: "gaya" },
        { value: "remote", label: "remote" },
      ];
      function handleCollege(data) {
        setSelectedCollege(data);
      }
  return (
    <div>
        <div className="pt-16">
          <div className="filterbox">
            <div>
              <div className="p-3">
                <Select
                  options={collegeList}
                  placeholder="Select College"
                  value={selectedCollege}
                  onChange={handleCollege}
                  isSearchable={true}
                  isMulti
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn4 mt-5">
                Apply
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AlumniFilter