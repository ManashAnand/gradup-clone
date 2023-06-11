"use client"
import { Card, Grid, Text, Link, Button } from "@nextui-org/react";

export default function BeMentorWithUs() {

  const handleSubmit =async (e)=>{
    e.preventDefault();

    try{
      const response = await fetch ("/api/mentor/application",{
        method:"POST",
        body:JSON.stringify({
          name:e.target[0].value,
          companyName:e.target[1].value,
          mobileNo:e.target[2].value,
          email:e.target[3].value,
        }),
      });
      console.log(response.status)
    }catch(error){
      console.log(error," on be mentor api");
    }finally{

    }
  }
  return (
    <div className="mb-20">
    <Card css={{ p: "$6",backgroundColor:"$cyan400" }}>
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          {/* <Grid xs={12}>
            <Text h2 >
              Be a Mentor
            </Text>
          </Grid> */}
          {/* <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>www.talentconnects.com</Text>
          </Grid> */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-6 font-bold text text-4xl">
                <h2>Be a Mentor</h2>
                <Text css={{mt:"$4",fontSize:"$lg",fontWeight:"$normal"}}>
                Join our team as a mentor and get to work with the sharpest minds
            </Text>
            </div>
            <div className="mb-2">
                <label
                    className="block text-sm text text-gray-800"
                >
                    Your Name *
                </label>
                <input 
                    type="text" 
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>
          <div className="mb-2">
                <label
                    className="block text-sm text text-gray-800"
                >
                    Company Name *
                </label>
                <input 
                    type="text" 
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text text-gray-800"
              >
                Email *
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
                <label
                    className="block text text-sm text-gray-800"
                >
                    Phone Number *
                </label>
                <input 
                    type="text" 
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>
            <Link>
          <Button type="submit" className="mt-5">
            Get in touch with us
          </Button>
        </Link>
           
          </form>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        
      </Card.Body>
    </Card>
    </div>
  );
}
