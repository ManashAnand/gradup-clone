"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

import { Table, useAsyncList, useCollator, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@styles/StyledBadged";
import { IconButton } from "@styles/IconButton";
import { EyeIcon } from "@styles/EyeIcon";
import { EditIcon } from "@styles/EditIcon";
import { DeleteIcon } from "@styles/DeleteIcon";

export default function App() {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users =[
    {
      id: 1,
      name: "Microsoft",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "/assets/images/TalentConnects.png",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Apple",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "/assets/images/TalentConnects.png",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Talent Connect",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "/assets/images/TalentConnects.png",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "Microsoft",
      role: "Community Manager",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "/assets/images/TalentConnects.png",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Meta",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "/assets/images/TalentConnects.png",
      email: "kristen.cooper@example.com",
    },
  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User color="success" squared src={user.avatar} css={{ p: 0}}>
            <Text css={{color:"white"}} b>{cellValue}</Text>
            {/* {user.email} */}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize",color:"white"}}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
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
  const collator = useCollator({ numeric: true });
  async function load({ signal }) {
    console.log(users)
    return {
      items:users,
    };
  }
  async function sort({ items, sortDescriptor }) {
    return {
      items: items.sort((a, b) => {
        let first = a[sortDescriptor.column];
        let second = b[sortDescriptor.column];
        let cmp = collator.compare(first, second);
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    };
  }
  const list = useAsyncList({ load, sort });
  return (
    <div className='w-full mb-32 mt-16'>
        <p className='text-4xl text-center mb-8'>
            <span className='textnew text-white'>Your Applications</span> 
        </p>
        
    <Table
      aria-label="Example table with custom cells"
      color="success"
      css={{
        height: "calc($space$14 * 5)",
        minWidth: "100%",
      }}
      selectionMode="none"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column 
            css={{textAlign:"center",backgroundColor:"$green600",color:"WhiteSmoke",width:"30vw"}}
            key={column.uid}
            hideHeader={column.uid === "actions"}
            allowsSorting
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={list.items}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell css={{paddingLeft:"$28"}}>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination  css={{mr:"$15"}}
        // shadow
        // noMargin
        // align="center"
        rowsPerPage={3}
      />
    </Table>
    </div>
  );
}









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