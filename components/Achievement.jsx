'use client'
import BusinessIcon from '@mui/icons-material/Business'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import HandshakeIcon from '@mui/icons-material/Handshake'
const Achievement = () => {
  const list1 = [
    '/assets/achievements/media1.png',
    '/assets/achievements/media2.png',
    '/assets/achievements/media3.png',
    '/assets/achievements/media4.png',
    ,
    '/assets/achievements/media5.png',
    ,
    '/assets/achievements/media6.png',
  ]
  const list = [
    '/assets/achievements/achievement2.png',
    '/assets/achievements/achievement3.png',
    '/assets/achievements/achievement1.png',
    '/assets/achievements/achievement4.png',
  ]
  return (
    <div className='achievementbox w-screen justify-center items-center mb-8'>
      <div className='filter1'></div>
      {/* <div className="w-screen media">
                {list1.map((element)=>(
                    <div className="mx-3">
                     <Card >
                     <Card.Image
                       src={element}
                       objectFit="contain"
                       width="100%"
                       height={140}
                       alt="Media Coverage"
                     />
                     </Card>
                     </div>
                ))}
                </div>
                <div className="news">
                {list.map((element,i)=>(
                    <div className="mx-3 achievements ">
                     <Card >
                     <Card.Image
                       src={element}
                       objectFit="fit"
                       width="100%"
                       alt="Achievement"
                     />
                     </Card>
                     </div>
                ))}
                </div> */}
      <div className='milestones gap-x-16 gap-y-12 my-auto'>
        <div className='w-48 h-28 datamile1 pt-2'>
          <h1 className='text-4xl text-center text-white font-semibold'>3+</h1>
          <p className='text-xs font-semibold text-white text-center mb-1'>
            YEARS IN BUSINESS
          </p>
          <BusinessIcon sx={{ color: 'white' }} fontSize='large'></BusinessIcon>
        </div>
        <div className='w-48 h-28 datamile2 pt-2'>
          <h1 className='text-4xl text-center text-white font-semibold'>33+</h1>
          <p className='text-xs font-semibold text-white text-center mb-1'>
            HACKATHONS DONE
          </p>
          <PeopleAltIcon
            sx={{ color: 'white' }}
            fontSize='large'
          ></PeopleAltIcon>
        </div>
        <div className='w-48 h-28 datamile1 pt-2'>
          <h1 className='text-4xl text-center text-white font-semibold'>
            15000+
          </h1>
          <p className='text-xs font-semibold text-white text-center mb-1'>
            NUMBER OF STUDENTS
          </p>
          <ThumbUpIcon sx={{ color: 'white' }} fontSize='large'></ThumbUpIcon>
        </div>
        <div className='w-48 h-28 datamile2 pt-2'>
          <h1 className='text-4xl text-center text-white font-semibold'>42+</h1>
          <p className='text-xs font-semibold text-white text-center mb-1'>
            TOP COMPANIES IN TOUCH
          </p>
          <GroupsIcon sx={{ color: 'white' }} fontSize='large'></GroupsIcon>
        </div>
        <div className='w-48 h-28 datamile1 pt-2'>
          <h1 className='text-4xl text-center text-white font-semibold'>
            100+
          </h1>
          <p className='text-xs font-semibold text-white text-center mb-1'>
            INSTITUTES IN TOUCH
          </p>
          <AccountBalanceIcon
            sx={{ color: 'white' }}
            fontSize='large'
          ></AccountBalanceIcon>
        </div>
        <div className='w-48 h-28 datamile2 pt-2'>
          <h1 className='text-4xl text-center text-white font-semibold'>
            1500+
          </h1>
          <p className='text-xs font-semibold text-white text-center mb-1'>
            LEARNERS
          </p>
          <HandshakeIcon
            sx={{ color: 'white' }}
            fontSize='large'
          ></HandshakeIcon>
        </div>
      </div>
    </div>
  )
}

export default Achievement
