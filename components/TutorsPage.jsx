const TutorsPage = ({ authors }) => {
  return (
    <div>
      <h1 className='font-bold text-white text-4xl'>About your tutors</h1>
      <div className='flex flex-wrap justify-center mt-5 gap-5 '>
        {authors.map((author, index) => (
          <div
            className='border-4 border-slate-800 rounded-xl p-4  flex flex-col  bg-white w-[400px] h-[210px]'
            key={index}
          >
            <div className='flex flex-row justify-between'>
              <div>
                <h3 className='mt-2 text-left'>{author.name}</h3>
                <h3 className='mt-2 text-left'>{author.designation}</h3>
              </div>
              <div>
                <img className='rounded-full h-20 w-20' src={author.imageURL} />
              </div>
            </div>
            <div>
              <hr className='border-2 border-slate-800 mt-2' />
              <h3 className='mt-2 text-left'>{author.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TutorsPage
