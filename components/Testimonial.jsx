"use client"
import { useState,useEffect,useRef } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import SimpleImageSlider from "react-simple-image-slider";

const Testimonial = () => {
  const [index,setIndex]=useState(0)
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex === list.length - 1 ?0 : prevIndex + 1
        ),2500);
     return () => {
      resetTimeout();
    };
  }, [index]);

    const list = [
        {
          name: "Ajay Jeena",
          title:"Student at NIT Raipur",
          img: "/assets/images/image4.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"

        },
        {
            name: "Raunit Verma",
            title:"Student at NIT Raipur",
          img: "/assets/images/image1.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Raunit Verma",
            title:"Student at NIT Raipur",
          img: "/assets/images/image2.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/image3.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
          name: "Ajay Jeena",
          title:"Student at NIT Raipur",
          img: "/assets/images/image4.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
          name: "Ajay Jeena",
          title:"Student at NIT Raipur",
          img: "/assets/images/image1.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"

        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/guess.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/pi.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
      ];
  return (
      
        <div className="w-full slideshow">
            <div style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className="slideshowSlider">
              {/* <div > */}
            {list.map((item, i) => {
            return(<div className="slide">
          <Card>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={280}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start",padding:"$8 $12",backgroundColor:"SkyBlue",color:"WhiteSmoke" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.title}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* <img src={item.img}/> */}
        </div>)
    })}
            {/* </div> */}
            </div>
        <div className="slideshowDots">
        {list.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
        </div>
  )
}

export default Testimonial