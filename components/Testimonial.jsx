"use client"
import { Card, Grid, Row, Text } from "@nextui-org/react";


const Testimonial = () => {
    const list = [
        {
          name: "Ajay Jeena",
          title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"

        },
        {
            name: "Raunit Verma",
            title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Raunit Verma",
            title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/att.jpg",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
      ];
  return (
      
        <div className="containerslider w-screen">
            <div className="cards-container">
              {/* <div > */}
            {list.map((item, index) => (
        <div className="card">
          <Card isHoverable >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="fit"
                width="100%"
                height={200}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.title}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* <img src={item.img}/> */}
        </div>
      ))}
            {/* </div> */}
            </div>
        </div>
  )
}

export default Testimonial