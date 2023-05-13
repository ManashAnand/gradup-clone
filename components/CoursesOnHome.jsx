"use client"
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function CoursesOnHome() {
  const list = [
    {
      title: "Web Development",
      img: "/assets/icons/WebDevl.jpeg",
      price: "Rs 8999",
    },
    {
      title: "Data Science",
      img: "/assets/icons/dataScience.jpeg",
      price: "Rs 6799",
    },
    {
      title: "Blockchain",
      img: "/assets/icons/blockchain.jpeg",
      price: "Rs 5999",
    },
    {
      title: "Python",
      img: "/assets/icons/python.jpeg",
      price: "Rs 6299",
    },
    {
      title: "Cyber Security",
      img: "/assets/icons/cyberSecurity.jpeg",
      price: "Rs 4999",
    },
    {
      title: "Digital Marketing",
      img: "/assets/icons/digitalMarketing.jpeg",
      price: "Rs 3999",
    },
    {
      title: "Graphic Design",
      img:"/assets/icons/graphicDesign.jpeg",
      price: "Rs 3999",
    },
    {
      title: "Video Editing",
      img: "/assets/icons/photoEditing.jpeg",
      price: "Rs 2999",
    },
  ];

  return (
    <section className='w-full max-w-full flex-start flex-col my-10'>
    <div>
        <h1 className='secondary_text text-center my-5'>Our Best Courses</h1>
    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable isHoverable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
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
