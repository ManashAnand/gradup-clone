'use client'
import Spinner from '@components/Spinner.jsx'
import useSWR from 'swr'
async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}

const page = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/blogs/${params.id}`, fetcher)
  if (isLoading) <Spinner />
  if (data) {
    return (
      <div className='my-10 p-4 flex flex-col items-left'>
        <h1 className='text-4xl font-bold text-white'>{data.topic}</h1>
        <img className='mt-5' src={data.img} />
        {data.content.map((outer) => (
          <div>
            <h1 className='font-bold text-2xl text-white my-5 text-left'>
              {outer.head}
            </h1>
            {outer.data.map((inner) => (
              <p className='text-white my-2 text-lg text-left'>{inner}</p>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
export default page
