const Details = ({ data }) => {
  return (
    <div className='p-2 cursor-pointer'>
      <img src={data.poster} className='w-full h-[300px] rounded-md ' />
      <p className='text-left mt-2'>Overview</p>
      <hr className='border border-[#010048] mt-2'></hr>
      <div className='rounded-md bg-white mt-2 text-left py-2 text-[#010048]'>
        <h1 className=' ml-4 px-2 font-bold font-lg'>Description :</h1>
        <p className='ml-4 px-2 '>{data.description}</p>
        <hr className='m-4 ' />
        <h1 className=' ml-4 px-2 font-bold font-lg'>Problem Statement :</h1>
        <p className='ml-4 px-2 '>{data.problem}</p>
        <hr className='m-4 ' />
        <h1 className=' ml-4 px-2 font-bold font-lg'>Reward :</h1>
        <p className='ml-4 px-2 '>{data.rewards}</p>
        <hr className='m-4' />
        <h1 className=' ml-4 px-2 font-bold font-lg'>Start's On :</h1>
        <p className='ml-4 px-2 '>
          {new Date(data.hackathonStartDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className=' ml-4 px-2 font-bold font-lg mt-2'>End's On :</h1>
        <p className='ml-4 px-2 '>
          {new Date(data.hackathonEndDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <hr className='m-4' />
        <h1 className=' ml-4 px-2 font-bold font-lg my-2  '>Apply here :</h1>
        <a
          href={data.link}
          className='ml-4 px-2 cursor-pointer py-1 rounded-md border bg-blue-400 border-black '
        >
          {data.link}
        </a>
      </div>
    </div>
  )
}
export default Details
