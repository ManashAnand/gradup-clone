"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
import Link from 'next/link';
import Spinner from "@components/Spinner"
import { Table, Row, Col, Tooltip, User, Text, Button } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";


// async function getData(url) {
//   const res = await fetch(url);
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
 
//   return res.json();
// }
const fetcher = async (...args) =>await fetch(...args).then((res) => res.json());

export default function App() {
  // const { data: session } = useSession();
  // const url=`api/hr/${session?.user.id}`;
  const { data: session } = useSession();
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/hr/${session?.user.id}` : null, fetcher)
  if (error) return <div>userFailed to loadinggggggg</div>;
  if (!data) return <div className='my-60 mx-auto'><Spinner/></div>;
  // const data=getData(url);
  console.log(data);
  const columns = [
    { name: "TITLE", uid: "title" },
    { name: "IMPRESSION", uid: "impression" },
    { name: "STATUS", uid: "status" },
    { name:"ACTION", uid:"canSee"},
    { name: "ACTIONS", uid: "actions" },
    
  ];

  const users=[];
  for(var i=0;i<data.posts.length;i++){
    var strStatus="OPEN"
    if(data.posts[i].status==false){
      strStatus="CLOSED"
    }
    users.push({
      id:data.posts[i]._id,
      title:data.posts[i].title,
      impression:data.posts[i].impression,
      status:strStatus,
      canSee:data.posts[i].canSee,
    })
  }
  
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "title":
        return (
          <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
        );
      case "impression":
        return (
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
        );
      case "status":
        return (
        <Row>
          <Text b size={14} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        </Row>
      );
      case "canSee":
        return (
          <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {(cellValue==false)?<Link href='/jobs' className='outline_btn'>
                                    Buy Premium
                                  </Link>:<Button>Open</Button>}
              </Text>
            </Row>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Link
                href={`/hr/posted-jobs/${user.id}`}
              >
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
              </Link>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <div className='w-full'>
    <div className='w-9/10'>
        <h1 className='secondary_text text-left mb-8'>
            <span className='blue_gradient'>Jobs that you posted</span> 
        </h1>
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination 
        // shadow
        // noMargin
        // align="center"
        rowsPerPage={3}
      />
    </Table>
    </div>
    </div>
  );
}
