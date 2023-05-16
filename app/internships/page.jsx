// "use client"
// import ListContentCard from "@components/ListContentCard";

// async function getData() {
//   const response = await fetch("https://api.jsonbin.io/v3/b/645b79d98e4aa6225e9a3925");
//   if (!response.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// }


// export default async function Internships ()  {
//   const data = await getData();
//   const jobs=data.record.jobs;
  
//   return (
//     <section className='w-full'>
//       <h1 className='head_text text-left'>
//         <span className='blue_gradient'>Internships for you</span>
//       </h1>

//       <div className='mt-10 prompt_layout'>
//         {jobs.map((job) => (
//           <ListContentCard 
//             post={job}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

"use client"
import ListContentCard from "@components/ListContentCard";
import useSWR from 'swr';
import {useState} from 'react'
const fetcher = (...args) => fetch(...args).then((res) => res.json());


function Page ({ index }) {
  // const { data,error } = useSWR(`https://api.jsonbin.io/v3/b/6460d47e8e4aa6225e9cc67d/?page=${index}`, fetcher);
  const { data, error } = useSWR( `/api/internships/?page=${index}`, fetcher)
  console.log(data, "Front ",index);
  // ... handle loading and error states
  if (error) return <div>Failed to loadinggggggg</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data.record);
  const jobs=data
  console.log(jobs)
  return (
        <section className='w-full'>
          <h1 className='head_text text-left'>
            <span className='blue_gradient'>Internships for you</span>
          </h1>
    
          <div className='mt-10 prompt_layout'>
            
            {jobs.map((job) => (
              <ListContentCard 
                post={job}
              />
            ))}
          </div>
        </section>
      )
  }
 
export default function App () {
  const [pageIndex, setPageIndex] = useState(0);
 
  return <div>
    <Page index={pageIndex}/>
    <div style={{ display: 'none' }}><Page index={pageIndex + 1}/></div>
    <button onClick={() => setPageIndex(pageIndex - 1)}>Prev</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
  </div>
}