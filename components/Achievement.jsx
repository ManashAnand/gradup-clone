"use client"
import { Card, Col, Text } from "@nextui-org/react";
const Achievement = () => {
    const list1 = ["/assets/achievements/media1.png","/assets/achievements/media2.png","/assets/achievements/media3.png","/assets/achievements/media4.png",,"/assets/achievements/media5.png",,"/assets/achievements/media6.png"]
    const list = ["/assets/achievements/achievement1.png","/assets/achievements/achievement2.png","/assets/achievements/achievement3.png","/assets/achievements/achievement4.png"]
  return (
    <div>
        <section className='w-full max-w-full flex-start flex-col my-10'>
            <div>
                <h1 className='text-3xl font-semibold text-blue-500 text text-center my-12'>Our Achievements</h1>
                <div className="flex flex-wrap justify-center">
                {list1.map((element)=>(
                    <div className="mx-14 h-[250px]">
                     <Card >
                     <Card.Image
                       src={element}
                       objectFit="fit"
                       width="100%"
                       height={150}
                       alt="Media Coverage"
                     />
                     </Card>
                     </div>
                ))};
                </div>
                <div className="flex flex-wrap justify-center">
                {list.map((element)=>(
                    <div className="mx-14 h-[250px] achievements ">
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
                ))};
                </div>
            </div>
        </section>
    </div>
  )
}

export default Achievement