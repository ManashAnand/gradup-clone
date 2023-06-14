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
                <h1 className='text-3xl font-semibold text-blue-500 text text-center my-12'>Our Achievements</h1>
                <div className="flex flex-wrap justify-center">
                {list.map((element)=>(
                    <div className="mx-12 h-[250px] ">
                     <Card >
                     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                       <Col >
                         <Text css={{ml:"$1"}} size={12} weight="bold" transform="uppercase" color="white">
                           What to watch
                         </Text>
                         <Text css={{ml:"$1"}} h4 color="white">
                           Stream the Acme event
                         </Text>
                       </Col>
                     </Card.Header>
                     <Card.Image
                       src="/assets/images/att.jpg"
                       objectFit="fit"
                       width="100%"
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