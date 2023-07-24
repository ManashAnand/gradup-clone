"use client"
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function CoursesOnHome() {
  const list = [
    {
      title: "Web Development",
      img: "/assets/images/webcompress.gif",
      price: "8999",
    },
    {
      title: "Data Science",
      img: "/assets/images/datasccompress.gif",
      price: "6799",
    },
    {
      title: "Blockchain",
      img: "/assets/images/blockchaincompress.gif",
      price: "5999",
    },
    {
<<<<<<< HEAD
      title: "Python Programming",
      img: "/assets/images/python.gif",
=======
      title: "Python",
      img: "/assets/images/pythoncompress.gif",
>>>>>>> 3ae5551508be47126cdf3390f2fa232ed5ddfef9
      price: "6299",
    },
    {
      title: "Cyber Security",
      img: "/assets/images/cybercompress.gif",
      price: "4999",
    },
    {
      title: "Digital Marketing",
      img: "/assets/images/digitalmarketcompress.gif",
      price: "3999",
    },
    {
      title: "Graphic Design",
      img:"/assets/images/webdesigncompress.gif",
      price: "3999",
    },
    {
      title: "Video Editing",
      img: "/assets/images/videoeditcompress.gif",
      price: "2999",
    },
  ];

  return (
    <section className='flex-start flex-col mt-4'>
    <div>
        <h1 className='text-3xl text-white font-semibold underline decoration-white underline-offset-8 textform text-center my-5'>Placement guarantee courses</h1>
        <p className="textnew text-center text-gray-200 text-2xl mb-3">Master new skills from anywhere with our online courses</p>
    <Grid.Container gap={1}>
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
                <Text css={{color:"$gray800", fontWeight: "$semibold",textAlign:"left"}}>{item.title}</Text>
                <Text css={{ color:"$red700", fontWeight: "$semibold",fontSize: "$sm" }}>
                &#8377; {item.price}
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
