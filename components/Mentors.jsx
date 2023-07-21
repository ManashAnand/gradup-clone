"use client"
import { Card, Grid, Row, Text } from "@nextui-org/react";


const Mentors = () => {
    const list = [
        {
            name: "Abhinaba Chakraborty",
            title:"XLRI Jamshedpur - Inside IIM | P&G | XLRI | BIT MESRA",
            img:"/assets/mentors/mentor1.webp"
        },
        // {
        //     name: "Ashish Ambastha",
        //     title:"Software Development Engineer III  Flipkart",
        //     img:"/assets/mentors/mentor2.png"
        // },
        {
            name: "Luv Saxena",
            title:'Assistant Vice President- magicpin | IIT Roorkee | IIM Bangalore | CAT Topper-2016',
            img:"/assets/mentors/mentor3compress.webp"
        },
        {
            name: "Dharmendra Kumar",
            title:"IES Officer, 2019 Batch, AIR-87, NIT Calicut",
            img:"/assets/mentors/mentor4new.jpg"
        },
        {
            name: "Mohit Agarwal",
            title:"(Siemens EDA) | IIT BHU |",
            img:"/assets/mentors/mentor5.webp"
        },
        // {
        //     name: "Narendra Lamba",
        //     title:" (Ex-Intelligence Officer,GOI) IIFT DELHI & BIT MESRA Alumnus ",
        //     img:"/assets/mentors/mentor6.png"
        // },
        {
            name: "Saumya Singh",
            title:"NKAM, Streax |  IMT Ghaziabad",
            img:"/assets/images/mentornew1.jpg"
        },
        {
          name:"130 + Mentors",
          title:"",
          img:"/assets/images/mentors.png"
        }
        // {
        //    name: "Pushkal Shukla",
        //    title:"Adobe",
        //    img: "/assets/mentors/mentor8.png"
        // },
      ];
  return (
    <div className="background pt-10">
    <div class="wrap">
      {list.map((items,i)=>{
        return(
          <div key={i} class="box">
            <div class="box-top">
              <img class="box-image" src={items.img} alt="Mentor" decoding="async"/>
            </div>
            <h3 class="textform text-center text-md text-white">{items.name}</h3>
            <p class="user-follow-info text-center text-white textform text-xs">{items.title}</p>
            </div>
        )
      })}
    </div>
</div>
  )
}

export default Mentors