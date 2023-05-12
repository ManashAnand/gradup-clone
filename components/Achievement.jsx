"use client"
import { Card, Col, Text } from "@nextui-org/react";
const Achievement = () => {
    const list = [
        {
          title: "Web Development",
          img: "/assets/icons/WebDevl.jpeg",
          price: "Rs 8999",
        },
        {
          title: "Machine Learning",
          img: "/images/fruit-2.jpeg",
          price: "Rs 6799",
        },
        {
          title: "Artificial Intelligence",
          img: "/images/fruit-3.jpeg",
          price: "Rs 5999",
        },
        {
          title: "DSA",
          img: "/images/fruit-4.jpeg",
          price: "Rs 6299",
        },
        {
          title: "Communication Skills",
          img: "/images/fruit-5.jpeg",
          price: "Rs 3999",
        },
        {
          title: "Group Discussion",
          img: "/images/fruit-6.jpeg",
          price: "Rs 3999",
        },
      ];
  return (
    <div>
        <section className='w-full max-w-full flex-start flex-col my-10'>
            <div>
                <h1 className='secondary_text text-center my-5'>Our Achievements</h1>
                <div className="flex flex-wrap ">
                {list.map((element)=>(
                    <div className="w-1/3 h-[230px] ">
                     <Card >
                     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                       <Col >
                         <Text size={12} weight="bold" transform="uppercase" color="black">
                           What to watch
                         </Text>
                         <Text h4 color="black">
                           Stream the Acme event
                         </Text>
                       </Col>
                     </Card.Header>
                     <Card.Image
                       src="/assets/images/TalentConnects.png"
                       objectFit="cover"
                       width="95%"
                       height={200}
                       alt="Card image background"
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