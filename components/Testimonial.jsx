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
        ),5000);
     return () => {
      resetTimeout();
    };
  }, [index]);

    const list = [
        {
          name: "Ajay Jeena",
          title:"Student at NIT Raipur",
          img: "/assets/images/Group 223.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"

        },
        {
            name: "Raunit Verma",
            title:"Student at NIT Raipur",
          img: "/assets/images/Group 224.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Raunit Verma",
            title:"Student at NIT Raipur",
          img: "/assets/images/Group 225.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
            name: "Ajay Jeena",
            title:"Student at NIT Raipur",
          img: "/assets/images/Group 228.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
          name: "Ajay Jeena",
          title:"Student at NIT Raipur",
          img: "/assets/images/Group 229.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"
        },
        {
          name: "Ajay Jeena",
          title:"Student at NIT Raipur",
          img: "/assets/images/Group 230.png",
          desc: "I am very thankful to talent connect for their such beautiful courses these courses are really helpful"

        },
      ];
  return (
      
        <div className="w-full slideshow">
            <div style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className="slideshowSlider">
              {/* <div > */}
            {list.map((item, i) => {
            return(<div className="slide">
          <Card css={{backgroundColor:"rgba(28, 73, 128, 0.50)"}}>
            <Card.Body css={{ p: 0,boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={280}
                alt={item.title}
              />
            </Card.Body>
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