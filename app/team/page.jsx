const team = [
  {
    name: 'Jocelyn Schleifer',
    designation: 'Software Engineer',
    img: '/assets/mentors/mentor1.png',
    desc: 'There is always something to explore thats my way of life!',
  },
]
const page = () => {
  return (
    <div className='w-screen bg-white border-t-2 border-t-black font-inter'>
      <h1 className='font-semibold mt-5 text-[#282828]'>Our Team</h1>
      <h1 className='font-semibold mt-3 sm:text-4xl text-xl text-[#282828]'>
        Meet the GradUp team
      </h1>
      <p className='text-[#5F6980] mt-2 mx-4'>
        Each member of the GradUp team takes personal ownership of the company
        and wholeheartedly dedicates themselves to their work.
      </p>
      <div className='flex flex-wrap items-center justify-center text-[#5F6980] my-10'>
        {team.map((data) => {
          return (
            <div className='border border-[#EAECF0] w-[300px] h-[370px]'>
              <img src={data.img} className='h-[230px] w-full'></img>
              <div className='p-2 text-left'>
                <h2 className='text-[#282828] font-semibold mt-2'>
                  {data.name}
                </h2>
                <p className='mt-2'>{data.designation}</p>
                <p className='mt-2'>{data.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default page
