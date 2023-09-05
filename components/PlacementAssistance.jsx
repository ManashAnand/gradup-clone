const PlacementAssistance = () => {
  return (
    <div className=' w-full flex flex-row justify-between'>
      {/* text area */}
      <div className='text-left mt-10  '>
        <h1 className='font-black text-white text-4xl mt-5 '>
          What placement assistance will you receive?
        </h1>
        <h3 className='font-black text-white text-xl mt-5'>
          Free Placement Prep Training
        </h3>
        <p className=' text-white mt-1 '>Free Placement Prep Training</p>
        <h3 className='font-black text-white text-xl mt-5'>
          Curated internships & jobs
        </h3>
        <p className=' text-white mt-1  '>
          Get internships and fresher jobs as per your preference in your inbox.
        </p>
        <h3 className='font-black text-white text-xl mt-5'>
          Get highlighted on GradUp
        </h3>
        <p className=' text-white mt-1 '>
          Top performers will be highlighted in their internship & job
          applications on Gradup.
        </p>
      </div>
      {/* image */}
      <div className='hidden sm:block mt-10'>
        <img
          className='rounded-lg pt-10 '
          src='/serviceasset/asset2.jpg'
          alt='image'
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
export default PlacementAssistance
