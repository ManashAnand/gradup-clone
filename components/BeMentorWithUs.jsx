"use client"
import { Card, Grid, Text, Link, Button } from "@nextui-org/react";

export default function BeMentorWithUs() {
  return (
    <div className="mb-8">
    <Card css={{ p: "$6" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          {/* <Grid xs={12}>
            <Text h2 >
              Be a Mentor
            </Text>
          </Grid> */}
          {/* <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>www.talentconnects.com</Text>
          </Grid> */}
          <form className="mt-6">
            <div className="mb-2 font-bold text-4xl">
                <h2>Be a Mentor</h2>
            </div>
          <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Company Name
                </label>
                <input 
                    type="text" 
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Phone Number
                </label>
                <input 
                    type="text" 
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>
            <Text>
                Join our team as a mentor and get to work with the sharpest minds
            </Text>
            <Link>
          <Button type="submit" className="mt-5">
            Get in touch with us.
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