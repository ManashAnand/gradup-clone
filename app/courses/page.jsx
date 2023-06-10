"use client"
import React,{useState} from 'react'
import { Card, Grid, Row, Text } from "@nextui-org/react";
const Courses = () => {
  const[results,setResults]=useState(false)
  const list = [
    {
      title: "Computer Science",
      img: "/assets/icons/computerr.png",
      price: "Rs 8999",
    },
    {
      title: "Information Technology",
      img: "/assets/icons/IT.png",
      price: "Rs 6799",
    },
    {
      title: "Software development",
      img:  "/assets/icons/WebDevl.jpeg",
      price: "Rs 5999",
    },
    {
      title: "Management",
      img: "/assets/icons/management.png",
      price: "Rs 6299",
    },
    {
      title: "Design and Product",
      img: "/assets/icons/productdesign.png",
      price: "Rs 4999",
    },
    {
      title: "Art and Humanities",
      img: "/assets/icons/art.png",
      price: "Rs 3999",
    },
  ];
  const list1 = [
    {
      title: "Web Development",
      img: "/assets/images/web.gif",
      price: "$14",
    },
    {
      title: "Full Stack Development",
      img: "/assets/images/fullStack.gif",
      price: "$14",
    },
    {
      title: "Python Programming",
      img: "/assets/images/python.gif",
      price: "$14",
    },
    {
      title: "C Programming",
      img: "/assets/images/C.gif",
      price: "$14",
    },
  ];
  const list2 = [
    {
      title: "Blockchain Technology",
      img: "/assets/images/blockchain.gif",
      price: "$14",
    },
    {
      title: "Cyber Security",
      img: "/assets/images/cyber.gif",
      price: "$14",
    },
    {
      title: "Cloud Computing",
      img: "/assets/images/cloud.gif",
      price: "$14",
    },
    {
      title: "Machine Learning & AI",
      img: "/assets/images/AI.gif",
      price: "$14",
    },
  ];
  const list3 = [
    {
      title: "Embedded System",
      img: "/assets/images/circuit.gif",
      price: "$14",
    },
    {
      title: "Robotic Process Automation",
      img: "/assets/images/robot.gif",
      price: "$14",
    },
    {
      title: "Virtual Reality",
      img: "/assets/images/vr.gif",
      price: "$14",
    },
    {
      title: "3D Printing",
      img: "/assets/images/3dprinter.gif",
      price: "$14",
    },
  ];
  const list4 = [
    {
      title: "Product Management",
      img: "/assets/images/productiter.gif",
      price: "$14",
    },
    {
      title: "Financial Planning",
      img: "/assets/images/finplanning.gif",
      price: "$14",
    },
    {
      title: "Digital Marketing",
      img: "/assets/images/digitalmarket.gif",
      price: "$14",
    },
  ];
  const list5 = [
    {
      title: "Foreign Language",
      img: "/assets/images/foreignlanguage.gif",
      price: "$14",
    },
    {
      title: "IELTS/English Proficiency",
      img: "/assets/images/english.gif",
      price: "$14",
    },
  ];
  function handleCourses(){
    setResults(true)
  }
  return (
    !results?<>
    <div className='coursebox'>
    <svg height="400" width="600">
    <polygon points="500,50 500,320 10,400 10,50" style={{fill:"#fde68a"}}/>
    <text className="text-4xl text" x="90" y="100" fill="#57534e">Learn from anywhere</text>
    <text className="text-4xl text" x="90" y="140" fill="#57534e">around the globe</text>
    <text className="text-4xl text" x="90" y="180" fill="#57534e">with us</text>
    <text className="text-xl text" x="90" y="250" fill="grey">Experience quality courses with us with</text>
    <text className="text-xl text" x="90" y="270" fill="grey">best price. You can get best courses</text>
    <text className="text-xl text" x="90" y="290" fill="grey">from us</text>
     </svg>
    <div className='courseimg'>
      <img width="200" src="/assets/images/image1.png"></img>
      <img width="200" src="/assets/images/image2.png"></img>
      <img width="200" src="/assets/images/image4.png"></img>
      <img width="200" src="/assets/images/image3.png"></img>
    </div>
    </div>
    <div className='w-full max-w-full flex-start flex-col my-10'>
    <div>
    <h1 className='text-4xl font-bold text-sky-700 text text-center my-5'>Our Best Courses</h1>
    <Grid.Container gap={3} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={4} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable>
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
                  <button className="text-sm text-blue-600" onClick={handleCourses}>Start Course</button>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* </Link> */}
        </Grid>
      ))}
    </Grid.Container>
    </div>
    </div>
    <p className='text-xl text-left text font-semibold text-gray-700 mb-8'>Computer Science</p>
    <div className="p-2 rounded-xl bg-sky-200">
    <Grid.Container gap={2} justify="flex-start">
      {list1.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={160}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text css={{mr:"$10"}} b>{item.title}</Text>
                <Text css={{color:"$red700"}} b>{item.price}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  <button className="text-sm text-blue-600" onClick={handleCourses}>Start Course</button>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* </Link> */}
        </Grid>
      ))}
    </Grid.Container>
    </div>
    <p className='text-xl text-left text font-semibold text-gray-700 mt-16 mb-8'>Information Technology</p>
    <div className="p-2 rounded-xl bg-yellow-200">
    <Grid.Container gap={2} justify="flex-start">
      {list2.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={160}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text css={{mr:"$10"}} b>{item.title}</Text>
                <Text  css={{color:"$red700"}} b>{item.price}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  <button className="text-sm text-blue-600" onClick={handleCourses}>Start Course</button>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* </Link> */}
        </Grid>
      ))}
    </Grid.Container>
    </div>
    <p className='text-xl text-left text font-semibold text-gray-700 mt-16 mb-8'>Automation Technology</p>
    <div className="p-2 rounded-xl bg-red-200">
    <Grid.Container gap={2} justify="flex-start">
      {list3.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={160}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text css={{mr:"$16"}} b>{item.title}</Text>
                <Text  css={{color:"$red700",mr:"$8"}} b>{item.price}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  <button className="text-sm text-blue-600" onClick={handleCourses}>Start Course</button>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* </Link> */}
        </Grid>
      ))}
    </Grid.Container>
    </div>
    <p className='text-xl text-left text font-semibold text-gray-700 mt-16 mb-8'>Management</p>
    <div className="p-2 rounded-xl bg-green-200">
    <Grid.Container gap={2} justify="flex-start">
      {list4.map((item, index) => (
        <Grid xs={6} sm={4} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={160}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{color:"$red700"}} b>{item.price}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  <button className="text-sm text-blue-600" onClick={handleCourses}>Start Course</button>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* </Link> */}
        </Grid>
      ))}
    </Grid.Container>
    </div>
    <p className='text-xl text-left text font-semibold text-gray-700 mt-16 mb-8'>Language Learning</p>
    <div className="p-2 rounded-xl bg-orange-200">
    <Grid.Container gap={2} justify="flex-start">
      {list5.map((item, index) => (
        <Grid xs={6} sm={6} key={index}>
          {/* <Link href="/courses"> */}
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="150%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{color:"$red700"}} b>{item.price}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  <button className="text-sm text-blue-600" onClick={handleCourses}>Start Course</button>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          {/* </Link> */}
        </Grid>
      ))}
    </Grid.Container>
    </div>
  </>:<div>
     <img className="my-10 mx-auto" width="500" src="/assets/images/maintenance.png" alt="maintenance"></img>
     <p className="text-5xl text text-center text-sky-400 mt-4">Our Courses will be launched Soon.</p>
     <p className="text-5xl text-center my-4 text text-sky-400">Stay tuned !!</p>
  </div>
  )
}

export default Courses