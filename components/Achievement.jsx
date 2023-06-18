"use client"
import { Card, Col, Text } from "@nextui-org/react";
const Achievement = () => {
    const list1 = ["/assets/achievements/media1.png","/assets/achievements/media2.png","/assets/achievements/media3.png","/assets/achievements/media4.png",,"/assets/achievements/media5.png",,"/assets/achievements/media6.png"]
    const list = ["/assets/achievements/achievement2.png","/assets/achievements/achievement3.png","/assets/achievements/achievement1.png","/assets/achievements/achievement4.png"]
  return (
       <div className="achievementbox w-screen flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl font-semibold text-white my-10">Our Achievements</h1>
            <div className="filter1"></div>
                <div className="w-screen media">
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
                {list.map((element)=>(
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
                </div>
          </div>
  )
}

export default Achievement