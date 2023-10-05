"use client"
import useSWR from 'swr';
import{useState,useEffect} from "react"
import {useSession} from "next-auth/react";
import Spinner from "@components/Spinner"
const fetcher = (...args) => fetch(...args).then((res) => res.json());

import { Table, useAsyncList } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";
import styles from './styles.module.css'

 function Page({user}) {  
  
  const columns = [
    { name: "NAME", uid: "companyName" },
    { name: "ROLE", uid: "title" },
    // { name: "LOCATION",uid:"location"},
    { name: "STATUS", uid: "isActive" },
    { name: "APPLICANTS", uid: "appliedCandidates" },
  ];
  return (
    <div className='w-screen px-3 '>
      <div className='w-9/10'>
       <p className='text-center mb-8 '>
       <span className={`${styles["textform"]} text-5xl ${styles["animate-charcter"]} font-semibold text-white`}>Your Applications</span>
       </p>
        
    {user.length>0?<Table
     aria-label="Example table with custom cells"
     color="primary"
     css={{
       height: "auto",
       minWidth: "100%",
       backgroundColor:"WhiteSmoke"
     }}
     selectionMode="none"
   >
      <Table.Header columns={columns} css={{backgroundColor:"blue"}}>
        {(column) => (
          <Table.Column css={{backgroundColor:"$cyan600",fontSize:"15px",px:"$4",color:"WhiteSmoke",width:"30vw",textAlign:"left"}} key={column.uid}>{column.name}</Table.Column>
        )}
      </Table.Header>
      <Table.Body
        items={user}
      >
        {(item) => (
          <Table.Row key={item._id}>
            {(key) => <Table.Cell css={{color:"$accents8",fontWeight:"$semibold",fontSize:"15px",textAlign:"left"}}>{item[key]===true?"OPENED":item[key]===false?"CLOSED":key==="appliedCandidates"?item[key].length:item[key].toUpperCase()}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
      {/* <Table.Pagination  css={{mr:"$15"}}
        // shadow
        // noMargin
        align="center"
        rowsPerPage={25}
      /> */}
    </Table>:<div className={`text-center text-xl my-32 ${styles["textnew"]} text-white`}>No Applications Available</div>}
    </div>
    </div>
  );
}
export default function App() {
  const [pageIndex, setPageIndex] = useState(1);
  const [opacity1,setOpacity1]=useState(1)
  const [opacity2,setOpacity2]=useState(1)
  const { data: session } = useSession();
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}/appliedJobs?page=${pageIndex}` : null, fetcher)
  if (error) return <div>userFailed to loadinggggggg</div>;
  if (!data) return <div className="my-60"><Spinner/></div>;
  let user=data
  return (
    <div className='w-full mt-10'>
      <div className="justify-center flex-center">
        <Page user={user} />
      </div>
      {/* <div style={{ display: "none" }}>
        <Page index={pageIndex + 1} />
      </div> */}
      <div className="flex mt-6 mb-16 justify-center items-center">
        <button  disabled={pageIndex===1?true:false} className={`${styles["btn2"]} bg-sky-500`} onClick={() => setPageIndex(pageIndex - 1)}>
          Prev
        </button>
        <button  className={`${styles["btn3"]} bg-sky-500`} onClick={() => setPageIndex(pageIndex + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

  // const columns = [
  //   { name: "NAME", uid: "CompanyName" },
  //   { name: "ROLE", uid: "title" },
  //   { name: "STATUS", uid: "isActive" },
  // ];
  // const users =[
  //   {
  //     id: 1,
  //     name: "Microsoft",
  //     role: "CEO",
  //     team: "Management",
  //     status: "active",
  //     age: "29",
  //     avatar: "/assets/images/TalentConnects.png",
  //     email: "tony.reichert@example.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Apple",
  //     role: "Technical Lead",
  //     team: "Development",
  //     status: "paused",
  //     age: "25",
  //     avatar: "/assets/images/TalentConnects.png",
  //     email: "zoey.lang@example.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Talent Connect",
  //     role: "Senior Developer",
  //     team: "Development",
  //     status: "active",
  //     age: "22",
  //     avatar: "/assets/images/TalentConnects.png",
  //     email: "jane.fisher@example.com",
  //   },
  //   {
  //     id: 4,
  //     name: "Microsoft",
  //     role: "Community Manager",
  //     team: "Marketing",
  //     status: "vacation",
  //     age: "28",
  //     avatar: "/assets/images/TalentConnects.png",
  //     email: "william.howard@example.com",
  //   },
  //   {
  //     id: 5,
  //     name: "Meta",
  //     role: "Sales Manager",
  //     team: "Sales",
  //     status: "active",
  //     age: "24",
  //     avatar: "/assets/images/TalentConnects.png",
  //     email: "kristen.cooper@example.com",
  //   },
  // ];
  // const renderCell = (user, columnKey) => {
  //   const cellValue = user[columnKey];
  //   switch (columnKey) {
  //     case "companyName":
  //       return (
  //         <Text css={{color:"white"}} b>{cellValue}</Text>
  //       );
  //     case "title":
  //       return (
  //             <Text b size={14} css={{ tt: "capitalize",color:"white"}}>
  //               {cellValue}
  //             </Text>
  //       );
  //     case "isActive":
  //       return <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>{cellValue===true?"Opened":"Closed"}</Text>;
  //     default:
  //       return cellValue;
  //   }
  // };
  // return (
  //   <div className='w-full mb-32 mt-16'>
  //       <p className='text-4xl text-center mb-8'>
  //           <span className='textnew text-white'>Your Applications</span> 
  //       </p>
        
  //   <Table
  //     aria-label="Example table with custom cells"
  //     color="success"
  //     css={{
  //       height: "calc($space$14 * 5)",
  //       minWidth: "100%",
  //     }}
  //     selectionMode="none"
  //   >
  //     <Table.Header columns={columns}>
  //       {(column) => (
  //         <Table.Column 
  //           css={{textAlign:"center",backgroundColor:"$green600",color:"WhiteSmoke",width:"30vw"}}
  //           key={column.uid}
  //         >
  //           {column.name}
  //         </Table.Column>
  //       )}
  //     </Table.Header>
  //     <Table.Body items={users}>
  //       {(item) => (
  //         <Table.Row>
  //           {(columnKey) => (
  //             <Table.Cell css={{paddingLeft:"$28"}}>{renderCell(item, columnKey)}</Table.Cell>
  //           )}
  //         </Table.Row>
  //       )}
  //     </Table.Body>
  //     <Table.Pagination  css={{mr:"$15"}}
  //       // shadow
  //       // noMargin
  //       // align="center"
  //       rowsPerPage={3}
  //     />
  //   </Table>
  //   </div>
  // );










// const page = () => {
//     const { data: session } = useSession();
//     const { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher)
//     if (error) return <div>Failed to loadinggggggg</div>;
//     if (!data) return <div>Loading...</div>;
//   return (
//     <div>
//         <section>
//             <h1 className='secondary_text text-left'>
//                 <span className='blue_gradient'>Your Applications</span> 
//             </h1>
//         </section>
//     </div>
//   )
// }

// export default page