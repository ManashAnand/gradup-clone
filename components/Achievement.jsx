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
        {
          title: "Aptitude & Reasoning",
          img: "/images/fruit-7.jpeg",
          price: "Rs 4999",
        },
        {
          title: "Handbooks",
          img: "/images/fruit-8.jpeg",
          price: "Rs 2999",
        },
      ];
  return (
    <div>
        <section className='w-full max-w-full flex-start flex-col my-10'>
            <div>
                <h1 className='secondary_text text-center my-5'>Our Achievements</h1>
                <div className="flex">
                {list.map((element)=>(
                     <Card>
                     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                       <Col>
                         <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                           What to watch
                         </Text>
                         <Text h4 color="white">
                           Stream the Acme event
                         </Text>
                       </Col>
                     </Card.Header>
                     <Card.Image
                       src="https://nextui.org/images/card-example-4.jpeg"
                       objectFit="cover"
                       width="100%"
                       height={340}
                       alt="Card image background"
                     />
                     </Card>
                ))};
                </div>
            </div>
        </section>
    </div>
  )
}

export default Achievement