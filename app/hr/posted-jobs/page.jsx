'use client'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import LoginAlert from '@components/LoginAlert'
import copy from 'copy-to-clipboard'
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
import Link from 'next/link'
import Spinner from '@components/Spinner'
import { Table, Row, Col, Tooltip, User, Text, Button } from '@nextui-org/react'
import { StyledBadge } from '@styles/StyledBadged'
import { IconButton } from '@styles/IconButton'
import { EyeIcon } from '@styles/EyeIcon'
// import ShareLinkedin from "react-share-linkedin";
import { LinkedinShareButton, LinkedinIcon } from 'react-share'
import { EditIcon } from '@styles/EditIcon'
import { DeleteIcon } from '@styles/DeleteIcon'
import { ShareIcon } from '@heroicons/react/24/outline'

// async function getData(url) {
//   const res = await fetch(url);
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }
const fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json())

export default function App() {
  // const { data: session } = useSession();
  // const url=`api/hr/${session?.user.id}`;
  const { data: session } = useSession()
  var { data, error } = useSWR(
    `${session?.user.id}` ? `/api/hr/${session?.user.id}` : null,
    fetcher
  )
  if (error)
    return (
      <div>
        <LoginAlert />
      </div>
    )
  if (!data)
    return (
      <div className='my-60 mx-auto'>
        <Spinner />
      </div>
    )
  // const data=getData(url);
  const columns = [
    { name: 'Title', uid: 'title' },
    { name: 'Total Applicants', uid: 'impression' },
    { name: 'Status', uid: 'status' },
    { name: 'Upgrade to premium', uid: 'canSee' },
    { name: 'ACTIONS', uid: 'actions' },
  ]

  const users = []
  for (var i = 0; i < data.posts.length; i++) {
    var strStatus = 'OPEN'
    if (data.posts[i].status == false) {
      strStatus = 'CLOSED'
    }
    users.push({
      id: data.posts[i]._id,
      title: data.posts[i].title,
      impression: data.posts[i].impression,
      status: strStatus,
      canSee: data.posts[i].canSee,
    })
  }

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey]
    switch (columnKey) {
      case 'title':
        return (
          <Row>
            <Text
              b
              size={14}
              css={{ tt: 'capitalize', color: '$accents8', marginRight: '$20' }}
            >
              {cellValue}
            </Text>
          </Row>
        )
      case 'impression':
        return (
          <Row>
            <Text
              b
              size={14}
              css={{ tt: 'capitalize', color: '$accents8', marginRight: '$20' }}
            >
              {cellValue}
            </Text>
          </Row>
        )
      case 'status':
        return (
          <Row>
            <Text
              b
              size={14}
              css={{ tt: 'capitalize', color: '$accents8', marginRight: '$20' }}
            >
              {cellValue}
            </Text>
          </Row>
        )
      case 'canSee':
        return (
          <Row>
            <Text
              b
              size={14}
              css={{ tt: 'capitalize', color: '$accents6', marginRight: '$20' }}
            >
              {cellValue == false ? (
                <Link href='/jobs' className=''>
                  Buy Premium
                </Link>
              ) : (
                <Button>Open</Button>
              )}
            </Text>
          </Row>
        )
      case 'actions':
        return (
          <Row justify='center' align='center'>
            <Col css={{ d: 'flex' }}>
              <Link href={`/hr/posted-jobs/${user.id}`}>
                <Tooltip content='Details'>
                  <IconButton
                    onClick={() => {
                      copy(`https://gradup.in/hr/posted-jobs/${user.id}`)
                      {
                        /*
                        navigator.clipboard.writeText(
                        `https://gradup.in/hr/posted-jobs/${user.id}`
                      )
                      */
                      }
                    }}
                  >
                    <EyeIcon size={20} fill='#979797' />
                  </IconButton>
                </Tooltip>
              </Link>
            </Col>
            <Col css={{ d: 'flex', marginLeft: '$5' }}>
              {/* <Link> */}
              <LinkedinShareButton
                url={`https://www.gradup.in/jobs/${user.id}`}
              >
                <LinkedinIcon size={27} />
              </LinkedinShareButton>
              {/* </Link> */}
            </Col>
            {/* <Col css={{ d: "flex" }}>
              <Tooltip content="Edit">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col> */}
          </Row>
        )
      default:
        return cellValue
    }
  }
  return (
    <div className='w-full my-16'>
      <div>
        <h1 className='my-10 text-center'>
          <span className='text-white animate-charcter text-5xl font-semibold mb-10 textnew'>
            Jobs Posted
          </span>
        </h1>
        <Table
          aria-label='Example table with custom cells'
          color='primary'
          css={{
            height: 'auto',
            minWidth: '100%',
            backgroundColor: 'WhiteSmoke',
          }}
          selectionMode='none'
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === 'actions'}
                css={{
                  backgroundColor: '$cyan600',
                  fontSize: '15px',
                  color: 'WhiteSmoke',
                  width: '30vw',
                }}
                align={column.uid === 'actions' ? 'center' : 'left'}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={users}>
            {(item) => (
              <Table.Row css={{}}>
                {(columnKey) => (
                  <Table.Cell css={{ textAlign: 'center' }}>
                    {renderCell(item, columnKey)}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
          <Table.Pagination
            // shadow
            // noMargin
            // align="center"
            rowsPerPage={10}
          />
        </Table>
      </div>
    </div>
  )
}
