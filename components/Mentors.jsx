"use client"
import { Card, Grid, Row, Text } from "@nextui-org/react";


const Mentors = () => {
    const list = [
        {
            name: "Abhinaba Chakraborty",
            title:"XLRI Jamshedpur - InsideIIM | P&G | XLRI | BIT MESRA  at Microsoft",
            img:"/assets/mentors/mentor1.png"
        },
        {
            name: "Ashish Ambastha",
            title:"Software Development Engineer III , Flipkart",
            img:"/assets/mentors/mentor2.png"
        },
        {
            name: "Luv Saxena",
            title:"Assistant Vice President- magicpin | IIT Roorkee | IIM Bangalore | All India CAT Topper 2016 |",
            img:"/assets/mentors/mentor3.png"
        },
        {
            name: "Dharmendra Kumar",
            title:"IES Officer, 2019 Batch",
            img:"/assets/mentors/mentor4.png"
        },
        {
            name: "Mohit Agarwal",
            title:"(Siemens EDA) | IIT BHU |",
            img:"/assets/mentors/mentor5.png"
        },
        {
            name: "Narendra Lamba",
            title:" (Ex-Intelligence Officer,GOI) IIFT DELHI & BIT MESRA Alumnus ",
            img:"/assets/mentors/mentor6.png"
        },
        {
            name: "Charu Chaudhary",
            title:" Software Engineer (Samsung)",
            img:"/assets/mentors/mentor7.png"
        },
        {
           name: "Pushkal Shukla",
           title:"Adobe",
           img: "/assets/mentors/mentor8.png"
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