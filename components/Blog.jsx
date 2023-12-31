'use client'
import Spinner from '@components/Spinner.jsx'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}
const Blog = () => {
  const router = useRouter()
  const { data, error, isLoading } = useSWR('/api/blogs', fetcher)
  if (isLoading) <Spinner />
  if (data) {
    return (
      <div className='flex flex-wrap gap-5 justify-center items-center my-10 mx-5'>
        {data.map((blog) => (
          <div className='w-[400px] bg-white rounded-sm p-2'>
            <h1 className='font-bold text-md justify-around my-2 h-[50px]'>
              {blog.topic}
            </h1>
            <img src={blog.img} />
            <p className='overflow-auto text-left mt-2 h-[300px] text-sm'>
              {blog.intro}
            </p>
            <button
              onClick={() => router.push(`/blogs/${blog._id}`)}
              className='bg-blue-300 px-4 py-2 rounded-sm m-2'
            >
              Read Article
            </button>
          </div>
        ))}
      </div>
    )
  }
}
export default Blog
