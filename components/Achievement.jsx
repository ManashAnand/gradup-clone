"use client"
import { Card, Col, Text } from "@nextui-org/react";
const Achievement = () => {
    const list1 = ["/assets/achievements/media1.png","/assets/achievements/media2.png","/assets/achievements/media3.png","/assets/achievements/media4.png",,"/assets/achievements/media5.png",,"/assets/achievements/media6.png"]
    const list = ["/assets/achievements/achievement1.png","/assets/achievements/achievement2.png","/assets/achievements/achievement3.png","/assets/achievements/achievement4.png"]
  return (
    <div>
        <section className='w-screen my-10'>
        <h1 className='text-3xl font-semibold text-blue-500 text text-center mt-12 mb-2'>Our Achievements</h1>
            <div className="flex justify-center items-center">
                <div style={{width:"45vw"}} className="grid grid-cols-2 gap-10 justify-center my-10 bg-sky-100 p-10">
                {list1.map((element)=>(
                    <div className="mx-3">
                     <Card >
                     <Card.Image
                       src={element}
                       objectFit="fit"
                       width="auto"
                       height={150}
                       alt="Media Coverage"
                     />
                     </Card>
                     </div>
                ))}
                </div>
                <div style={{width:"55vw"}} className="grid grid-cols-2 justify-center my-10 bg-red-200 py-14 px-4">
                {list.map((element)=>(
                    <div className="mx-3 h-[250px] achievements ">
                     <Card >
                     <Card.Image
                       src={element}
                       objectFit="fit"
                       width="100%"
                       height={200}
                       alt="Achievement"
                     />
                     </Card>
                     </div>
                ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Achievement