"use client"
import useSWR from 'swr';
import {useSession} from "next-auth/react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
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
  const users = [
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
      name: "meta",
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
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
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
  return (
    <div className='w-full'>
    <div className='w-9/10'>
        <h1 className='secondary_text text-left mb-8'>
            <span className='blue_gradient'>Your Applications</span> 
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
        rowsPerPage={3}
      />
    </Table>
    </div>
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