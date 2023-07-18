import { Card, Grid, Text, Link } from "@nextui-org/react";

const ListContentCard = ({post}) => {
  return (
     <Card style={{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}} css={{ p: "$2", mw: "400px",width:"100%",borderRadius:"$2xl"}}>
      <Card.Header css={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
        <img
          className="p-3 border-2 border-gray-200"
          alt="company_logo"
          src={post.logo?post.logo:"/assets/images/website-icon.png"}
          width="90px"
        />
        {/* <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text b css={{ lineHeight: "$xs",color:"$accent500" }}>
              {post.companyName}
            </Text>
          </Grid> */}
          {/* <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{post.skillsRequired}</Text>
          </Grid> */}
        {/* </Grid.Container> */}
        <Text className="textform text-xl" css={{textAlign:"center",lineHeight: "$xs",color:"$accent500",marginBottom:"$4",marginTop:"$6"}}>
          {post.companyName}
        </Text>
        <Text css={{textAlign:"center",color:"$blue700",fontSize:"$md",marginBottom:"$6"}}>
          Hiring for {post.title}
        </Text>
        <Link css={{backgroundColor:"$blue700",color:"white",px:"$16",pt:"$2",pb:"$3",borderRadius:"$sm"}}
          icon
          color="primary"
          target="_blank"
          href={`/jobs/${post._id}`}
        >
          Apply
        </Link>
        </Card.Header>
    </Card>
  )
}

export default ListContentCard