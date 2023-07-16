"use client"
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function CoursesOnHome() {
  const list = [
    {
      title: "Web Development",
      img: "/assets/images/web.gif",
      price: "Rs 8999",
    },
    {
      title: "Data Science",
      img: "/assets/images/datasc.gif",
      price: "Rs 6799",
    },
    {
      title: "Blockchain",
      img: "/assets/images/blockchain.gif",
      price: "Rs 5999",
    },
    {
      title: "Python",
      img: "/assets/images/python.gif",
      price: "Rs 6299",
    },
    {
      title: "Cyber Security",
      img: "/assets/images/cyber.gif",
      price: "Rs 4999",
    },
    {
      title: "Digital Marketing",
      img: "/assets/images/digitalmarket.gif",
      price: "Rs 3999",
    },
    {
      title: "Graphic Design",
      img:"/assets/images/webdesign.gif",
      price: "Rs 3999",
    },
    {
      title: "Video Editing",
      img: "/assets/images/videoedit.gif",
      price: "Rs 2999",
    },
  ];

  return (
    <section className='flex-start flex-col mt-4 mb-16'>
    <div>
        <h1 className='text-3xl text-white font-semibold underline decoration-white underline-offset-8 textnew text-center my-5'>Our best courses</h1>
        <p className="textnew text-center text-gray-200 text-2xl mb-3">Master new skills from anywhere with our online courses</p>
    <Grid.Container gap={2}>
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable isHoverable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={140}
                alt={item.title}
                decoding="async"
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text css={{color:"$gray800", fontWeight: "$semibold"}}>{item.title}</Text>
                <Text css={{ color:"$red700", fontWeight: "$semibold",fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* </Link> */}
        </Grid>
      ))}
    </Grid.Container>
    </div>
    </section>
  );
}
