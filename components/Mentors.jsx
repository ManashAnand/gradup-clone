"use client"
import { Card, Grid, Row, Text } from "@nextui-org/react";


const Mentors = () => {
    const list = [
        {
          name: "Ajay Jeena",
          title:"SDE at Microsoft",
          img: "/assets/images/att.jpg"

        },
        {
            name: "Raunit Verma",
            title:"SDE at Microsoft",
            img:"/assets/images/att.jpg"
        },
        {
            name: "Raunit Verma",
            title:"SDE at Microsoft",
            img:"/assets/images/att.jpg"
        },
        {
            name: "Ajay Jeena",
            title:"SDE at Microsoft",
            img:"/assets/images/att.jpg"
        },
        {
            name: "Ajay Jeena",
            title:"SDE at Microsoft",
            img:"/assets/images/att.jpg"
        },
        {
            name: "Ajay Jeena",
            title:"SDE at Microsoft",
            img:"/assets/images/att.jpg"
        },
        {
            name: "Ajay Jeena",
            title:"SDE at Microsoft",
            img:"/assets/images/att.jpg"
        },
        {
            name: "Ajay Jeena",
            title:"SDE at Microsoft",
            img:"/assets/images/att.jpg"
        },
      ];
  return (
    <div className="background">
    <div class="wrap">
      {list.map((items,i)=>{
        return(
          <div key={i} class="box">
          <div class="box-top">
            <img class="box-image" src={items.img} alt="Mentor"/>
          <div class="title-flex">
            <h3 class="box-title text">{items.name}</h3>
            <p class="user-follow-info text">{items.title}</p>
          </div>
         </div>
        </div>
        )
      })}
</div>
</div>
  )
}

export default Mentors